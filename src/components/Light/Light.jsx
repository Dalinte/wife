import {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {DirectionalLightHelper} from "three";
import { useControls } from 'leva'

export default function Light () {
    const defaultValues = {
        color: "#e8bb68",
        intensity: 1,
        position: [-2, 2.7, 1.6],
        targetPosition: [4, 0, -1],
    }

    const {color, intensity, position, targetPosition, showLightHelper} = useControls(
        'DirectionalLight',
        {
            color: defaultValues.color,
            intensity: {
                    value: defaultValues.intensity,
                    min: 0,
                    max: 10
            },
            position: defaultValues.position,
            targetPosition: defaultValues.targetPosition,
            showLightHelper: true
        })

    const dirLight = useRef(null);
    useHelper(dirLight, showLightHelper && DirectionalLightHelper, 0.5);

    return (
        <>
            <directionalLight
                position={position}
                color={color}
                intensity={intensity}
                ref={dirLight}
                target-position={targetPosition}
            />
            <ambientLight color={'#ffffff'} intensity={0.1}/>
        </>
    );
}
