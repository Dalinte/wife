import { create } from 'zustand'
import {animationsNames} from '../../shared/animationsNames'

const defaultEnableWeightList = {
    [animationsNames.boredBody]: 1,
    [animationsNames.blinking]: 1,
}

export const defaultEmotions = {
    [animationsNames.sad]: 0,
    [animationsNames.smiling]: 0,
    [animationsNames.embarrass]: 0,
    [animationsNames.blinking]: 0,
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

export const animationsStore = create((set) => ({
    animationWeights: defaultActionsWeightList,
    addAnimationWeight: (animationName, animationWeight) => set((state)=> (
        {
            animationWeights: {
                ...state.animationWeights,
                [animationName]: animationWeight
            }
        }
    )),
    enableOneAnimation: (animationName, animationWeight) => set((state)=> (
        {
            animationWeights: {
                ...defaultActionsWeightList,
                [animationName]: animationWeight
            }
        }
    )),
    enableStartedAnimations: () => set((state)=> (
        {
            animationWeights: {
                ...defaultActionsWeightList,
                ...defaultEnableWeightList,
            }
        }
    )),
    addEmotion: (emotion, weight) => set((state) => (
        {
            animationWeights: {
                ...state.animationWeights,
                ...defaultEmotions,
                [emotion]: weight
            }
        }
    )),
}))
