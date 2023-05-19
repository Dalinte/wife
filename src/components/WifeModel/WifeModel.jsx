import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export default function WifeModel() {
    const {scene} = useLoader(GLTFLoader, '/wife/wife-model-2.glb')

    return (
        <mesh>
            <primitive
                position={[0.1, 0.15, 0.2]}
                object={scene}
            />
        </mesh>
    )
}
