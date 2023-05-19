import {Canvas} from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import Light from "../Light/Light.jsx";

export default function Scene () {
    return (
        <Canvas camera={{ lookat: [-2, 0, 0], position: [1, 3, 4], fov: 45 }}>
            <group position={[0, -0.5, 0]}>
                <WifeModel/>
                <Room/>
                <Light/>
            </group>

            <OrbitControls/>
        </Canvas>
    )
}
