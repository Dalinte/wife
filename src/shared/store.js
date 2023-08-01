import { create } from 'zustand'
import {animationsNames} from './animationsNames'

const actionsWeightList = {
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
    animationWeightList: actionsWeightList,
    setAnimationWeight: (animationName, animationWeight) => set((state)=> (
        {
            animationWeightList: {
                ...actionsWeightList,
                [animationName]: animationWeight
            }
        }
    )),
}))
