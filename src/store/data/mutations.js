import md5 from 'helpers/md5'

import { Builder } from "./ant";
import incrementalColor from "helpers/incrementalColor";
import Vector from "helpers/vector";


const setter = (key) => ({state}, value) => state[key] = value
export default {
    SET: ({state}, {key, value}) => state[key] = value,

    resetWoldBySettings: ({state}) => {
        state.builders = new Array(state.agents).fill(null).map((_, index) => new Builder(
            incrementalColor(index), {
                rotationBorder: Math.PI/180 * state.rotationBorder,
                positionBufferSize: state.positionBufferSize,
                speedLimits: state.speedLimits
            }
        ))
        state.worldBorder = [
            state.worldBorderSize.copy().div(-2),
            state.worldBorderSize.copy().div(2)
        ]

    },
    tick: ({state}) => {
        state.builders.forEach((builder) => {
            builder.move()
            if(builder.position.x <= state.worldBorder[0].x){
                builder.position.x = state.worldBorder[0].x
                builder.speed.x = -builder.speed.x;
            }
            if(builder.position.y <= state.worldBorder[0].y){
                builder.position.y = state.worldBorder[0].y
                builder.speed.y = -builder.speed.y;
            }

            if(builder.position.x >= state.worldBorder[1].x){
                builder.position.x = state.worldBorder[1].x
                builder.speed.x = -builder.speed.x;
            }
            if(builder.position.y >= state.worldBorder[1].y){
                builder.position.y = state.worldBorder[1].y
                builder.speed.y = -builder.speed.y;
            }
        })
    }
}