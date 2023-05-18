import {Canvas} from "@react-three/fiber";
import WifeModel from "../WifeModel/WifeModel.jsx";
import Background from "../Background/Background.jsx";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene () {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
            <group position={[0, -0.5, 0]}>
                <WifeModel/>
                <Background/>
            </group>

            <OrbitControls/>
            <Environment preset="sunset" background />
        </Canvas>
    )
}
