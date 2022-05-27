import * as THREE from 'three'

export default class Box
{
    constructor()
    {
        this.container = new THREE.Object3D()

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.BoxGeometry(3, 3, 3)
    }

    setMaterial()
    {
        this.material = new THREE.MeshBasicMaterial({ color: '#ff0000', wireframe: true })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.container.add(this.mesh)
    }
}