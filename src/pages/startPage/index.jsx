import '../startPageStyle.css'
import React, {useCallback, useEffect, useReducer, useState} from 'react'
import { Redirect } from "react-router-dom";

import ScrollArea from 'components/ScrollArea'


import use$sa from 'components/ScrollArea/state'
import use$ui from 'store/ui';
import use$data from 'store/data';
import { Button, Fab, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';

import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
const configs = [
    {key : 'agents', type: 'int', range: [0, 5000], description : 'количество агентов'},
    {key : 'speedLimits', type: 'range', range: [0, 30], description : 'скоростной диапазон'},
    {key : 'rotationBorder', type: 'int', range: [0, 180], description : 'максимальный разворот'},
    {key : 'positionBufferSize', type: 'int', range: [0, 1000], description : 'длинна следа'},
    {key : 'worldBorderSize', type: 'point', range: [0, 5000], description : 'размер мира'},
]

function Input({value, setter, type, range, description, key, labelStyle={}}){
    if(type == 'int'){
        return <Box>
                <Typography style={labelStyle}>
                    {description}
                </Typography>
                <Slider
                    key={key} 
                    value={value} 
                    onChange={(e, value) => setter(value)}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={range[0]}
                    max={range[1]}
                />
            </Box>
    }

    if(type == 'range'){
        return <Box>
                <Typography style={labelStyle}>
                    {description}
                </Typography>
                <Slider
                    key={key} 
                    value={value} 
                    onChange={(e, value) => setter(value)}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={range[0]}
                    max={range[1]}
                />
            </Box>
    }

    if(type == 'point'){
        return <Box>
                <Typography style={labelStyle}>
                    {description}
                </Typography>
                x:<Slider
                    key={key} 
                    value={value.x} 
                    onChange={(_, pos) => {
                        value.x = pos
                        setter(value)
                    }}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={range[0]}
                    max={range[1]}
                />
                y:<Slider
                    key={key} 
                    value={value.y} 
                    onChange={(_, pos) => {
                        value.y = pos
                        setter(value)
                    }}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={range[0]}
                    max={range[1]}
                />
            </Box>
    }

    return <Box>
                <Typography style={labelStyle}>
                    {description}
                </Typography>
                <Typography style={labelStyle}>
                    не известный тип
                </Typography>
            </Box>
}

function ConfigInput({configDescription, state, setter, labelStyle={}}){
    return <React.Fragment>
        {configDescription.map(item => 
            <Input 
                key={item.key}
                value={state[item.key]}
                setter={value => setter({key: item.key, value})}
                type={item.type}
                range={item.range} 
                description={item.description}
                labelStyle={labelStyle}
            />
        )}
    </React.Fragment>
}

function ConfigSetter({position={
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 1000,
}}){
    const [dataState, {SET, resetWoldBySettings}] = use$data();
    const [opened, toggleOpened] = useReducer((opened) => !opened, false)
    if(!opened)
        return <Fab style={position} onClick={toggleOpened}>
            <SettingsIcon/>
        </Fab>

    return <div 
        className="card"
        style={{
            ...position,
            opacity: 0.8,
            background: 'gray',
            padding: 5,
            minWidth: 300,
        }}
    >
        <Fab onClick={toggleOpened}>
            <CloseIcon/>
        </Fab>

        <ConfigInput
            configDescription={configs}
            state={dataState}
            setter={SET}
            labelStyle={{
                color: "white"
            }}
        />
        <Button variant="contained"  onClick={resetWoldBySettings} >Применить</Button>
    
    </div>
}

export default function StartPage(){
        const [,{setDefaultSize}] = use$sa();
        const [{builders, worldBorder}, {tick, resetWoldBySettings}] = use$data();
        const [updateKey, forceUpdate] = useReducer(() => new Date(), 0)

        const [tickDuration, setTickDuration] = useState(100)

        useEffect(() => resetWoldBySettings(), [])

        useEffect(() =>{
            const interval = setInterval(() => {
                tick()
                forceUpdate()
                // setTimeout(setDefaultSize, tickDuration / 2)
            }, tickDuration)

            return () => clearInterval(interval)
        }, [tickDuration])

        return <div width="100vw" height="100vh" className='pageRoot' >
                    <ConfigSetter/>
                    <ScrollArea 
                    style={{
                        width: 'calc(100vw - 5px)',
                        height: 'calc(100vh - 5px)'
                    }}
                    zoomAutoOnSiftZ={true}
                    zoomAutoOnLoad={true}
                    >
                        <rect 
                            stroke="white" 
                            fill="transparent"
                            x={worldBorder[0].x} 
                            y={worldBorder[0].y} 
                            width={worldBorder[1].x - worldBorder[0].x} 
                            height={worldBorder[1].y - worldBorder[0].y} 
                            />
                        <g>
                            {builders.map((builder, index) => {
                                return builder.visualizeBuffer({key: index})
                                })
                            }
                        </g>
                        
                        <g>
                            {builders.map((builder, index) => {
                                return builder.visualizeAnt({key: index})
                                })
                            }
                        </g>
                    </ScrollArea>
        </div>
}