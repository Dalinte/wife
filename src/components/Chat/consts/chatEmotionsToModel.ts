import {emotionsObject} from "./chat.consts";
import {animationsNames} from "../../../shared/animationsNames";

export const chatEmotionsToModel = {
    [emotionsObject.embarrassment]: animationsNames.embarrass,
    [emotionsObject.smile]: animationsNames.smiling,
    [emotionsObject.neutrality]: animationsNames.blinking,
    [emotionsObject.sadness]: animationsNames.sad,
}