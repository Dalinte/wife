import {Canvas, useFrame} from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import {useRef} from "react";
import { Perf } from 'r3f-perf'

import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import Light from "../Light/Light.jsx";

const Camera = () => {
    const cam = useRef()
    const defaultTarget = [1, 0.88, -0.96]
    const defaultPosition = [-2.3, 1.6, 1]

    useFrame(() => {
        cam.current.lookAt(...defaultTarget)
    }, [])

    return <PerspectiveCamera ref={cam} makeDefault position={defaultPosition} fov={40} />
}

export default function Scene () {
    const scale = Array(3).fill(0.009)

    return (
        <Canvas>
            <group scale={scale}>
                <WifeModel/>
                <Room/>
            </group>
            <Light/>
            <Camera/>
            <Environment background blur={0.1} files="wife/suburban_parking_area_1k.hdr" />
            <Perf position="top-left" />
        </Canvas>
    )
}
