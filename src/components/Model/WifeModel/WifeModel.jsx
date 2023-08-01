import {useAnimations, useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useControls, button} from "leva";
import {store} from "../../../shared/store.js";
import {animationsNames} from "../../../shared/animationsNames.js";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/AnimateGirle1.glb')
    const {actions} = useAnimations(animations, scene)
    const [animationWeightList, setAnimationWeight] = store((state) => [state.animationWeightList, state.setAnimationWeight])

    const values = useControls({
            'Печатает': button(() => setAnimationWeight(animationsNames.typing, 1)),
            'Скучает (тело)': button(() => setAnimationWeight(animationsNames.boredBody, 1)),
            'Скучает (лицо)': button(() => setAnimationWeight(animationsNames.boredFace, 1)),
            'Грустит': button(() => setAnimationWeight(animationsNames.sad, 1)),
            'Машет рукой': button(() => setAnimationWeight(animationsNames.wavingHand, 1)),
            'Моргает': button(() => setAnimationWeight(animationsNames.blinking, 1)),
            'Улыбается': button(() => setAnimationWeight(animationsNames.smiling, 1)),
            'Смущается': button(() => setAnimationWeight(animationsNames.embarrass, 1)),
        })

    activateAllActions(actions, animationWeightList)

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
        console.log(action._clip.name, animationsWeight[action._clip.name])
        setWeight(action, animationsWeight[action._clip.name])
        action.play()
    })
}

function setWeight( action, weight ) {
    action.enabled = true;
    action.setEffectiveTimeScale( 1 );
    action.setEffectiveWeight( weight );
}
