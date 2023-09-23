import { create } from 'zustand'
import {animationsNames} from './animationsNames'

const defaultEnableWeightList = {
    [animationsNames.boredBody]: 1,
    [animationsNames.blinking]: 1,
}

const defaultActionsWeightList = {
    [animationsNames.typing]: 0,
    [animationsNames.boredBody]: 0,
    [animationsNames.sad]: 0,
    [animationsNames.blinking]: 0,
    [animationsNames.boredFace]: 0,
    [animationsNames.embarrass]: 0,
    [animationsNames.smiling]: 0,
    [animationsNames.wavingHand]: 0,
}

export const store = create((set) => ({
    animationWeightList: defaultActionsWeightList,
    addAnimationWeight: (animationName, animationWeight) => set((state)=> (
        {
            animationWeightList: {
                ...state.animationWeightList,
                [animationName]: animationWeight
            }
        }
    )),
    enableAnimationDisableAnother: (animationName, animationWeight) => set((state)=> (
        {
            animationWeightList: {
                ...defaultActionsWeightList,
                [animationName]: animationWeight
            }
        }
    )),
    enableStartedAnimations: () => set((state)=> (
        {
            animationWeightList: {
                ...defaultActionsWeightList,
                ...defaultEnableWeightList,
            }
        }
    )),
}))
