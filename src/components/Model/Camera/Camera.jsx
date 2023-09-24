import {useEffect, useRef} from "react";
import {PerspectiveCamera} from "@react-three/drei";

export default function Camera () {
    const cam = useRef()
    const defaultTarget = [1.3, 0.7, -1]
    const defaultPosition = [-1.9, 1.5, 2]

    useEffect(() => {
        cam.current.lookAt(...defaultTarget)
    }, [cam.current])

    return <PerspectiveCamera ref={cam} makeDefault position={defaultPosition} fov={30} />
}
