import Spell3dObject from '../spell3d-object'
import {SpellCamera,SpellGeometry,SpellLight,SpellMaterial,SpellMesh,SpellGroup, SpellSkeleton} from './spell3d-basics'
import * as THREE from 'three'
import * as _SC from "../../spell-consts"


export class SpellPlane extends SpellMesh {

    static descriptor() {
        return {
            name: "Plane",
            desc: "Plane Object",
            defaults: {
                [_SC.NODES.type]: "plane",
                _geometry: {
                    [_SC.NODES.type]: "plane-geometry",
                    width: 2,
                    height: 2,
                    widthSegments: 500,
                    heightSegments: 500
                },
                _material: {
                    [_SC.NODES.type]: "standard-material",
                    color: 0x0e0e0e,
                    side: 2
                },
                _position: {x: 0,y: 0,z: 0},
                _rotation: {x: 90,y: 0,z: 0}
            }
        }
    }



    constructor(data, defaults) {

        if (!defaults) {
            defaults = {
                [_SC.NODES.type]: "plane",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.width, data._geometry.height, data._geometry.widthSegments, data._geometry.heightSegments]
        super(data, defaults)
    }

}


export class SpellBox extends SpellMesh {
    static descriptor() {
        return {
            name: "Box",
            desc: "Spell Box",
            defaults: {
                [_SC.NODES.type]: "box",
                _geometry: {
                    [_SC.NODES.type]: "box-geometry",
                    width: 0.2,
                    height: 0.2,
                    depth: 0.2,
                    widthSegments: 50,
                    heightSegments: 50,
                    depthSegments: 50
                },
                _material: {
                    [_SC.NODES.type]: "standard-material",
                    color: 0xff00ff,
                    side: 2
                },
                _position: {x: THREE.MathUtils.randFloat(-0.5,0.5),y: 0.1,z: THREE.MathUtils.randInt(0,2)},
                _rotation: {x: 90,y: 0,z: 0},
                //"onframe":"hover axis:z step:0.01 radius:2"
            }
        }
    }

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                [_SC.NODES.type]: "box",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.width, data._geometry.height, data._geometry.depth, data._geometry.widthSegments, data._geometry.heightSegments, data._geometry.depthSegments]

        super(data, defaults)
    }
}

export class SpellSphere extends SpellMesh {
    static descriptor() {
        return {
            name: "Sphere",
            desc: "Sphere Object",
            defaults: {
                [_SC.NODES.type]: "sphere",
                _geometry: {
                    [_SC.NODES.type]: "sphere-geometry",
                    widthSegments: 20,
                    heightSegments: 20,
                    radius: 0.25
                },
                _material: {
                    [_SC.NODES.type]: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
                _position: {x: THREE.MathUtils.randFloat(-0.5,0.5),y: THREE.MathUtils.randFloat(0.3,0.5),z: THREE.MathUtils.randFloat(0,2)},
                _rotation: {x: 90,y: 0,z: 0},
                "onframe":"rotation x:++0.01"
            }
        }
    }

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                [_SC.NODES.type]: "sphere",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radius, data._geometry.widthSegments, data._geometry.heightSegments]

        super(data, defaults)

    }
}

export class SpellCylinder extends SpellMesh {
    static descriptor() {
        return {
            name: "Cylinder",
            desc: "Cylinder Object",
            defaults: {
                [_SC.NODES.type]: "cylinder",
                _geometry: {
                    [_SC.NODES.type]: "cylinder-geometry",
                    radiusTop: 0.2,
                    radiusBottom: 0.2,
                    height: 0.5,
                    radialSegments: 24
                },
                _material: {
                    [_SC.NODES.type]: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
                _position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                _rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }
        }
    }

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                [_SC.NODES.type]: "cylinder",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radiusTop, data._geometry.radiusBottom, data._geometry.height, data._geometry.radialSegments]

        super(data, defaults)
    }

}

export class SpellTorus extends SpellMesh {
    static descriptor() {
        return {
            name: "Torus",
            desc: "Torus Object",
            defaults: {
                [_SC.NODES.type]: "torus",
                _geometry: {
                    [_SC.NODES.type]: "torus-geometry",
                    radius: 0.5,
                    tubeRadius: 0.25,
                    radialSegments: 12,
                    tubularSegments: 20
                },
                _material: {
                    [_SC.NODES.type]: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
                _position: {
                    x: 0,
                    y: 1,
                    z: 0
                },
                _rotation: {
                    x: 1.57,
                    y: 0,
                    z: 0
                }
            }
        }
    }

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                [_SC.NODES.type]: "torus",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radius, data._geometry.tubeRadius, data._geometry.radialSegments, data._geometry.tubularSegments]

        super(data, defaults)
    }

}

export class SpellCone extends SpellMesh {
    static descriptor() {
        return {
            name: "Cone",
            desc: "Cone Object",
            defaults: {
                [_SC.NODES.type]: "cone",
                _geometry: {
                    [_SC.NODES.type]: "cone-geometry",
                    radius: 0.25,
                    height: 0.5,
                    segments: 18
                },
                _material: {
                    [_SC.NODES.type]: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
                _position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                _rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }
        }
    }
    
    constructor(data, defaults) {
        if (!defaults) {
            defaults = {
                [_SC.NODES.type]: "cone",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radius, data._geometry.height, data._geometry.segments]

        super(data, defaults)
    }

}

export class SpellFloor extends Spell3dObject {

    constructor(data) {
        const defaults = {
            _three_class: THREE.Group,
            _base_color_map: null,
            _normal_map: null,
            _height_map: null,
            _block_width: 0,
            _block_height: 0,
            _num_of_blocks_x: 0,
            _num_of_blocks_z: 0,
            _geometry: null,
            _material: null


        }


        super(data, defaults)





    }

    async get_three() {

        const plane = {
            [_SC.NODES.type]: "plane",
            _geometry: this._geometry,
            _material: this._material,
            _grid: 10,
            _position: {
                x: 0,
                y: 0,
                z: 0
            },
            _rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            receiveShadow: true
            // onframe:"rotate y up 0.01"
        }


        //const so = new SpellPlane(plane)
        // const geometry = new THREE.PlaneGeometry(this._block_width, this._block_length, 12, 12);
        // const material = new THREE.MeshStandardMaterial(
        //     {
        //         map: sandBaseColor, normalMap: sandNormalMap,
        //         displacementMap: sandHeightMap, displacementScale: 0.1,
        //         aoMap: sandAmbientOcclusion
        //     })

        let basic_floor = await (new SpellPlane(plane)).get_three()

        this._three_obj = new this._three_class()

        for (let i = 0; i < this._num_of_blocks_x; i++) {
            for (let j = 0; j < this._num_of_blocks_z; j++) {
                const floor = basic_floor.clone()
                floor.receiveShadow = true
                floor.rotation.x = -Math.PI / 2

                floor.position.x = i * this._geometry.width - (this._num_of_blocks_x / 2) * this._geometry.width
                //floor.position.y = j * this._geometry.width - (this._num_of_blocks_x / 2) * this._geometry.width
                floor.position.z = j * this._geometry.height - (this._num_of_blocks_z / 2) * this._geometry.height

                this._three_obj.add(floor)
            }
        }

        return await super.get_three()
    }



}

export class SpellPrimitives {
    static get_objects() {
        return {
            "material": SpellMaterial,
            "geometry": SpellGeometry,
            "mesh": SpellMesh,
            "group":SpellGroup,
            "plane": SpellPlane,
            "box": SpellBox,
            "sphere": SpellSphere,
            "cylinder": SpellCylinder,
            "torus": SpellTorus,
            "cone": SpellCone,
            "floor": SpellFloor,
            "perspective-camera": SpellCamera,
            "light": SpellLight,
            "skeleton":SpellSkeleton
        }
    }
}

export default SpellPrimitives