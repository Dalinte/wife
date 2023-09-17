import {Canvas} from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import WifeModel from "../WifeModel/WifeModel.jsx";
import Room from "../Room/Room.jsx";
import Light from "../Light/Light.jsx";
import Camera from "../Camera/Camera.jsx";
import { Html, useProgress } from '@react-three/drei'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

export default function Scene () {
    const scale = Array(3).fill(0.009)

    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <group scale={scale}>
                    <WifeModel/>

                    <Room/>
                    <Light/>
                </group>

                <Camera/>
                <Environment background blur={0.1} files="suburban_parking_area_1k.hdr" />
                <OrbitControls/>
            </Suspense>
        </Canvas>
    )
}
