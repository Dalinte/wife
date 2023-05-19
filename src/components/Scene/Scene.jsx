import {Canvas} from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import Light from "../Light/Light.jsx";

export default function Scene () {
    return (
        <Canvas camera={{ lookat: [-2, 10, 0], position: [1, 2.5, 4], fov: 40 }}>
            <group position={[0, -0.5, 0]}>
                <WifeModel/>
                <Room/>
                <Light/>
            </group>

            <OrbitControls/>
            <Environment preset="sunset" background />
        </Canvas>
    )
}
