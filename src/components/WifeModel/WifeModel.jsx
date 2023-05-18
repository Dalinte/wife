import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export default function WifeModel() {
    const {scene} = useLoader(GLTFLoader, '/wife/wife-model.glb')

    return (
        <mesh>
            <primitive
                position={[0.1, 0.25, 0.2]}
                rotation-y={3.1}
                object={scene}
            />
        </mesh>
    )
}
