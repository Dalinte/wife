import {useAnimations, useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useControls} from "leva";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/AnimateGirle1.glb')
    const {actions} = useAnimations(animations, scene)

    const animationsForGui = animations.reduce((animations, currentAnimations) => {
        animations[removeDot(currentAnimations.name)] = {
            value: 0,
            min: 0,
            max: 1,
        }
        return animations
    }, {})

    const animationsWeight = useControls(animationsForGui)
    activateAllActions(actions, animationsWeight)

    return (
        <mesh ref={ref}>
            <primitive
                position={[-55, 43, 66]}
                object={scene}
            />
        </mesh>
    )
}

function activateAllActions (actions, animationsWeight) {
    Object.values(actions).forEach((action) => {
        setWeight(action, animationsWeight[action._clip.name])
        action.play()
    })
}

function setWeight( action, weight ) {
    action.enabled = true;
    action.setEffectiveTimeScale( 1 );
    action.setEffectiveWeight( weight );
}

function removeDot(string) {
    return string.replace(/[.\s]/g, '')
}
