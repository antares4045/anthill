import React from "react"

import Vector from 'helpers/vector'

const setter = (key) => ({state}, value) => state[key] = value



const PADDING = 5
const PADDING_RIGHT = PADDING
const PADDING_LEFT = PADDING
const PADDING_TOP = PADDING
const PADDING_BOTTOM = PADDING


export default {
    // setShift: setter('shift'),
    // setAnchor: setter('anchor'),
    // setMul: setter('mul'),
    setDefaultSize : ({state}) => {
        function action(){
            if(! state.contentRef.current || !state.bgRef.current){
                setTimeout(action, 100)
                return
            }
            const contentBox = state.contentRef.current.getBBox()
            const borderBox = state.bgRef.current.getBBox()
            if(!contentBox || !borderBox)
                return

            const newMul = Math.min(
                (borderBox.width - PADDING_RIGHT - PADDING_LEFT) / contentBox.width,
                (borderBox.height - PADDING_TOP - PADDING_BOTTOM) / contentBox.height,
                Number.MAX_SAFE_INTEGER
            )
            state.mul =newMul
            state.shift = new Vector(
                    borderBox.width - PADDING_LEFT + PADDING_RIGHT - contentBox.width * newMul,
                    borderBox.height - PADDING_BOTTOM + PADDING_TOP - contentBox.height * newMul
                ).div(2).add(borderBox).div(newMul).sub(contentBox)
        }
        
        action()   
    },

    startDrag: ({state, getter}, event) => {
        state.anchor = getter('eventToInnerPoint', {event})
    },
    moveToMouse: ({state, getter}, event) => {
        state.shift = getter('eventToInnerPoint', {event, shift: state.anchor})
    },
    stopDrag: ({state}) => {
        state.anchor = null
    },
    startDragHandler : ({state}, {onDrag, onDragStop, delta=new Vector()}) => {
        state.dragHandler = {
            onDrag, 
            onDragStop,
            delta
        }
    },
    clearDragHandler : ({state}) => {
        state.dragHandler = null
    },

    zoomAroundMouse : ({state, getter}, event) => {
        let newMul = state.mul * Math.pow(2, -event.deltaY / 1000);
        newMul = newMul > 0 ? newMul : state.mul;

        state.shift = getter('eventToInnerPoint', {event,
             mul: newMul * state.mul / (state.mul - newMul), 
             shift: state.shift.copy().mul(-1)
             })
        state.mul = newMul
    },

}