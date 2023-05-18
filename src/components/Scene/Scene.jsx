import {Canvas} from "@react-three/fiber";
import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene () {
    return (
        <Canvas camera={{ lookat: [-2, 10, 0], position: [1, 2.5, 4], fov: 40 }}>
            <group position={[0, -0.5, 0]}>
                <WifeModel/>
                <Room/>
                <ambientLight intensity={0.1} />
                <directionalLight
                    color="#ffa700"
                    position={[-1, 2, 0.7]}
                />
            </group>

            <OrbitControls/>
            <Environment preset="sunset" background />
        </Canvas>
    )
}
