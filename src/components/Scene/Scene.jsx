import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import Light from "../Light/Light.jsx";

export default function Scene () {
    return (
        <Canvas camera={{ position: [1.2, 1, 4], fov: 40 }}>
            <group position={[0.7, -0.45, 1]}>
                <WifeModel/>
                <Room/>
                <Light/>
            </group>

            <OrbitControls/>
        </Canvas>
    )
}
