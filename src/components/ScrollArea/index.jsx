import { useCallback, useEffect, useRef, useState } from "react"
import Vector from 'helpers/vector'

import useStorage from './state'
// import { throttle } from "lodash"


export default function ScrollArea({style={}, zoomAutoOnLoad=false, zoomAutoOnSiftZ=false, children}){
    const [{mul, shift, anchor, contentRef, bgRef, dragHandler},
         {setDefaultSize, startDrag, moveToMouse, stopDrag, zoomAroundMouse, clearDragHandler},
         {onHandleDrag, onHandleDragStop}] = useStorage()

    // const moveToMouseThrottled = useCallback(throttle((...args) => moveToMouse(...args), 10), [])
    // const zoomAroundMouseThrottled = useCallback(throttle((...args) => zoomAroundMouse(...args), 10), [])

    useEffect(() => {
        if(zoomAutoOnLoad)
        setDefaultSize()

        function keyBoardHandler(event){
            if(event.shiftKey && !event.altKey && !event.ctrlKey && event.code=='KeyZ'){
                event.stopPropagation()
                setDefaultSize()
            }
        }
        if(zoomAutoOnSiftZ)
            document.addEventListener('keypress', keyBoardHandler)
        return () => zoomAutoOnSiftZ && document.removeEventListener('keypress', keyBoardHandler)
    }, [])
    
    function stopMouseHandle(event){
        if(anchor)
            stopDrag()
        if(dragHandler){
            onHandleDragStop()
            clearDragHandler()
        }
    }


    return <div style={{position : 'relative', width: '100%', 'height' : '100%', margin: 'auto', ...style}}>
        <svg width="100%" height="100%"
            xmlns="http://www.w3.org/2000/svg"
            onMouseDown={(event) => {
                if(event.button == 0){
                    event.stopPropagation()
                    startDrag(event)
                }
            }}
            onMouseUp={(event) => {
                if(event.button == 0){
                    event.stopPropagation()
                    stopMouseHandle(event)
                }
            }}
            onMouseLeave={(event) => stopMouseHandle(event)}
            onMouseMove={(event) => {
                if(anchor){
                    // moveToMouseThrottled(event)
                    moveToMouse(event)
                }
                if(dragHandler){
                    onHandleDrag(event)
                }
            }}
            
            onWheel={(event) => {
                event.stopPropagation()
                // zoomAroundMouseThrottled(event)
                zoomAroundMouse(event)
            }}
        >
            <g ref={bgRef}>
                <rect fill="transparent" stroke="gray" strokeWidth="1" width="100%" height="100%"/>
            </g>
            <g ref={contentRef} transform={`scale(${mul}) translate(${shift.x} ${shift.y})`}>
                {
                    // anchor && <circle r="0.1" fill="yellow" cx={anchor.x} cy={anchor.y}/>
                }
                {children}
            </g>
        </svg>
    </div>
}