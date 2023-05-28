import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export default function Room() {
    const {scene} = useLoader(GLTFLoader, '/wife/room-2.glb')
    const scale = Array(3).fill(0.0139)

    return (
        <mesh scale={scale}>
            <primitive object={scene} />
        </mesh>
    )
}
