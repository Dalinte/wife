import {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {DirectionalLightHelper} from "three";
import { useControls } from 'leva'

export default function Light () {
    const dirLight = useRef(null);
    useHelper(dirLight, DirectionalLightHelper, 0.5);

    const defaultValues = {
        color: "#ffa700",
        intensity: 2
    }

    const {color, intensity} = useControls(
        'Light',
        {
            color: defaultValues.color,
            intensity: {
                value: defaultValues.intensity,
                    min: 0,
                    max: 10
                }
            }
        )

    return (
        <directionalLight
            position={[-2, 2.7, 1.6]}
            color={color}
            intensity={intensity}
            ref={dirLight}
            target-position={[4, 0, -1]}
        />
    );
};
