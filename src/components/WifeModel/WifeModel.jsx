import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import { LoopOnce } from "three";
import {useControls, buttonGroup} from "leva";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/typing-3.glb')
    const {actions} = useAnimations(animations, scene)
    const [values, set] = useControls(() => ({
                action: 'typing',
            ' ': buttonGroup({
                'typing' : () => set({ action: 'typing' }),
                'sit_to_type': () => set({ action: 'sit_to_type' }),
                'type_to_sit': () => set({ action: 'type_to_sit' }),
             }),
        }))

    const previousAction = usePrevious('typing');

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
                position={[-0.43, 0.1, -0.25]}
                object={scene}
                rotation-y={-Math.PI/2}
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
