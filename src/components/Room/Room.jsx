import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export default function Room() {
    const {scene} = useLoader(GLTFLoader, '/wife/room.glb')

    return (
        <mesh scale={[30, 30, 30]}>
            <primitive object={scene} />
        </mesh>
    )
}
