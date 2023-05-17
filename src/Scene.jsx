import {Canvas} from "@react-three/fiber";
import WifeModel from "./WifeModel.jsx";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene () {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
            <WifeModel/>
            <OrbitControls/>
            <Environment preset="sunset" background />
        </Canvas>
    )
}
