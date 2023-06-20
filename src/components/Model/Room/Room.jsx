import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export default function Room() {
    const {scene} = useLoader(GLTFLoader, '/wife/room-3.glb')

    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    )
}
