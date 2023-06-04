import {Canvas} from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Perf } from 'r3f-perf'

import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import Light from "../Light/Light.jsx";
import Camera from "../Camera/Camera.jsx";

export default function Scene () {
    const scale = Array(3).fill(0.009)

    return (
        <Canvas>
            <group scale={scale}>
                <WifeModel/>
                <Room/>
                <Light/>
            </group>

            <Camera/>
            <Environment background blur={0.1} files="suburban_parking_area_1k.hdr" />
            <Perf position="top-left" />
            {/*<OrbitControls/>*/}
        </Canvas>
    )
}
