import React from "react";

import Vector from "helpers/vector";

const worldBorder = [new Vector(-1500, -1000), new Vector(1500, 1000)].map(point => point.div(2))

export default {
    agents : 500,
    rotationBorder: 10,
    speedLimits: [1, 5],
    positionBufferSize: 200,
    worldBorderSize: worldBorder[1].copy().sub(worldBorder[0]),

    worldBorder,
    builders: [], 
}