import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useControls, button} from "leva";
import {animationsStore, defaultEmotions} from "../../../app/modules/animations";
import {animationsNames} from "../../../shared/animationsNames";
import {LoopOnce} from "three";
import {usePrevious} from "../../../shared/hooks/usePrevious";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/AnimateGirle1.glb')

    const {actions} = useAnimations(animations, scene)
    const [animationWeights, addAnimationWeight, addEmotion, enableStartedAnimations] = animationsStore((state) => [
        state.animationWeights,
        state.addAnimationWeight,
        state.addEmotion,
        state.enableStartedAnimations,
    ])

    const prevAnimationWeights = usePrevious(animationWeights)

    // const values = useControls({
    //         'Печатает': button(() => addAnimationWeight(animationsNames.typing, 1)),
    //         'Скучает (тело)': button(() => addAnimationWeight(animationsNames.boredBody, 1)),
    //         'Скучает (лицо)': button(() => addAnimationWeight(animationsNames.boredFace, 1)),
    //         'Грустит': button(() => addEmotion(animationsNames.sad, 1)),
    //         'Машет рукой': button(() => addAnimationWeight(animationsNames.wavingHand, 1)),
    //         'Моргает': button(() => addAnimationWeight(animationsNames.blinking, 1)),
    //         'Улыбается': button(() => addEmotion(animationsNames.smiling, 1)),
    //         'Смущается': button(() => addEmotion(animationsNames.embarrass, 1)),
    //     })

    useEffect(() => {
        enableStartedAnimations()
        setDefaultAnimationSettings(actions)
    }, [])

    useEffect(() => {
        disablePrevActions(actions, prevAnimationWeights)
        activateNewActions(actions, animationWeights)
    }, [animationWeights])

    return (
        <mesh ref={ref}>
            <primitive
                position={[-55, 43, 66]}
                object={scene}
            />
        </mesh>
    )
}

function disablePrevActions (actions, animationsWeight) {
    Object.values(actions).forEach((action) => {
        if (animationsWeight?.[action._clip.name]) {
            action.fadeOut( 1 )
        }
    })
}

function activateNewActions (actions, animationsWeight) {
    Object.values(actions).forEach((action) => {
        if (animationsWeight[action._clip.name]) {
            playAction(action, animationsWeight[action._clip.name])
        }
    })
}

function setDefaultAnimationSettings(actions) {
    Object.values(actions).forEach((action) => {
       if (defaultEmotions[action._clip.name] !== undefined) {
           action.clampWhenFinished = true;
           action.loop = LoopOnce;
       }
    })
}

const playAction = (action, weight) => {
    action.reset()
        .setEffectiveTimeScale( 1 )
        .setEffectiveWeight( weight )
        .fadeIn( 0.2 )
        .play();
}

