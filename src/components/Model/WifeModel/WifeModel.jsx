import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useControls} from "leva";

export default function WifeModel() {
    const ref = useRef()
    const {scene, animations} = useGLTF('/wife/AnimateGirle1.glb')
    const {actions} = useAnimations(animations, scene)

    const {animation: selectedAnimationName} = useControls({
        animation: {
            value: animations?.[0]?.name,
            options: animations.map((animation) => animation.name)
        }
    })

    console.log(selectedAnimationName, animations)

    const previousAction = usePrevious('IdleF1');

    useEffect(() => {
        // Object.values(actions).forEach((action) => {
        //     action.setLoop(LoopOnce)
        //     action.clampWhenFinished = true
        // })

        if (previousAction) {
            actions[previousAction].fadeOut(0.2);
            actions[previousAction].stop();
        }
        console.log(actions[selectedAnimationName])
        actions[selectedAnimationName].play();
        actions[selectedAnimationName].fadeIn(0.2)
    }, [actions, selectedAnimationName, previousAction])


    return (
        <mesh ref={ref}>
            <primitive
                position={[-55, 43, 66]}
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
