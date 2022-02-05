import Vector from 'helpers/vector'

export default {
    eventToInnerPoint({state}, {event, shift, mul}){
        if(shift === undefined)
            shift = state.shift
        if(mul === undefined)
            mul = state.mul
        const borderBox = state.bgRef.current.getBoundingClientRect()

        return new Vector(event.pageX, event.pageY).sub(borderBox).div(mul).sub(shift)
    },

    onHandleDrag: ({state, getter}, event) => {
        state.dragHandler.onDrag(getter('eventToInnerPoint', {event}).sub(state.dragHandler.delta))
    },
    onHandleDragStop: ({state}) => {
        state.dragHandler.onDragStop()
    },
}