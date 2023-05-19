import {Canvas} from "@react-three/fiber";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import {useRef} from "react";
import {DirectionalLightHelper} from "three";

import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";

const Light = () => {
    const dirLight = useRef(null);
    useHelper(dirLight, DirectionalLightHelper, 0.5);

    return (
        <directionalLight
            position={[-2, 3, 0]}
            color={"#ffa700"}
            intensity={2}
            ref={dirLight}
        />
    );
};

export default function Scene () {
    return (
        <Canvas camera={{ lookat: [-2, 10, 0], position: [1, 2.5, 4], fov: 40 }}>
            <group position={[0, -0.5, 0]}>
                <WifeModel/>
                <Room/>
                <ambientLight intensity={0.1} />
                <Light/>
            </group>

            <OrbitControls/>
            <Environment preset="sunset" background />
        </Canvas>
    )
}
