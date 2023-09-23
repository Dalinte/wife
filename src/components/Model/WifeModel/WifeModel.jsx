import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useControls, button} from "leva";
import {store} from "../../../shared/store.js";
import {animationsNames} from "../../../shared/animationsNames.js";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/AnimateGirle1.glb')
    const {actions} = useAnimations(animations, scene)
    const [animationWeightList, addAnimationWeight, enableStartedAnimations] = store((state) => [state.animationWeightList, state.addAnimationWeight, state.enableStartedAnimations])

    const values = useControls({
            'Печатает': button(() => addAnimationWeight(animationsNames.typing, 1)),
            'Скучает (тело)': button(() => addAnimationWeight(animationsNames.boredBody, 1)),
            'Скучает (лицо)': button(() => addAnimationWeight(animationsNames.boredFace, 1)),
            'Грустит': button(() => addAnimationWeight(animationsNames.sad, 1)),
            'Машет рукой': button(() => addAnimationWeight(animationsNames.wavingHand, 1)),
            'Моргает': button(() => addAnimationWeight(animationsNames.blinking, 1)),
            'Улыбается': button(() => addAnimationWeight(animationsNames.smiling, 1)),
            'Смущается': button(() => addAnimationWeight(animationsNames.embarrass, 1)),
        })

    activateAllActions(actions, animationWeightList)

    useEffect(() => {
        enableStartedAnimations()
    }, [])

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
