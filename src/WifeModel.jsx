import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export default function WifeModel() {
    const {scene} = useLoader(GLTFLoader, '/wife-model.glb')

    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    )
}
