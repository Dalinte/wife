import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import { LoopOnce } from "three";
import {useControls, buttonGroup} from "leva";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/AnimateGirleDemo.glb')
    const {actions} = useAnimations(animations, scene)
    const [values, set] = useControls(() => ({
                action: 'Typing',
            ' ': buttonGroup({
                'Typing' : () => set({ action: 'Typing' }),
                'blinkingBP': () => set({ action: 'blinkingBP' }),
             }),
        }))

    const previousAction = usePrevious('Typing');

    useEffect(() => {
        Object.values(actions).forEach((action) => {
            action.setLoop(LoopOnce)
            action.clampWhenFinished = true
        })

        if (previousAction) {
            actions[previousAction].fadeOut(0.2);
            actions[values.action].stop();
        }
        actions[values.action].play();
        actions[values.action].fadeIn(0.2)
    }, [actions, values.action, previousAction])


    return (
        <mesh ref={ref}>
            <primitive
                position={[-0.43, 0.43, 0.56]}
                object={scene}
            />
        </mesh>
    )
}

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}
