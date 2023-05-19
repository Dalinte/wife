import {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {DirectionalLightHelper} from "three";

export default function Light () {
    const dirLight = useRef(null);
    useHelper(dirLight, DirectionalLightHelper, 0.5);

    return (
        <directionalLight
            position={[-2, 2.7, 1.6]}
            color={"#ffa700"}
            intensity={2}
            ref={dirLight}
            target-position={[4, 0, -1]}
        />
    );
};
