import React from 'react'

import Vector from 'helpers/vector'

export default {
    mul : 1,
    shift : new Vector(0, 0),
    anchor: null,
    contentRef: React.createRef(),
    bgRef: React.createRef(),
    dragHandler : null,
}