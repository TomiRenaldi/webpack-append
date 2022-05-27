import * as THREE from 'three'

import Time from './Time.js'
import Sizes from './Sizes.js'
import Box from './Box.js'

export default class App
{
    constructor()
    {
        this.time = new Time()
        this.sizes = new Sizes()

        this.canvas = document.querySelector('canvas.webgl')

        this.setScene()
        this.setBox()
        this.setRenderer()
    }

    
    setScene()
    {
        // Scene
        this.scene = new THREE.Scene()

        // Camera
        this.camera = new THREE.PerspectiveCamera(25, this.sizes.width / this.sizes.height, 0.1, 100)
        this.camera.position.x = 1
        this.camera.position.y = 1
        this.camera.position.z = 1 
        this.scene.add(this.camera)

        // Resize
        this.sizes.on('resize', () =>
        {
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()
        })
    }

    setBox()
    {
        this.box = new Box()
        this.scene.add(this.box.container)
    }

    setRenderer()
    {
        this.renderer = new THREE.WebGLRenderer()
        document.body.appendChild(this.renderer.domElement)

        // Resize
        const resize = () =>
        {
            this.renderer.setSize(this.sizes.width, this.sizes.height)
        }
        this.sizes.on('resize', resize)
        resize()

         // Tick
        this.time.on('tick', () =>
        {
            this.renderer.render(this.scene, this.camera)
        })
    }
}