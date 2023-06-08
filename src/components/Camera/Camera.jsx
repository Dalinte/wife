import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";

export default function Camera () {
    const cam = useRef()
    const defaultTarget = [1, 0.88, -0.96]
    const defaultPosition = [-2.4, 1.6, 1.1]

    useEffect(() => {
        // console.log('useFrame')
        cam.current.lookAt(...defaultTarget)
    }, [])

    return <PerspectiveCamera ref={cam} makeDefault position={defaultPosition} fov={40} />
}
