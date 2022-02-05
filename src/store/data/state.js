import React from "react";

import Vector from "helpers/vector";

const worldBorder = [new Vector(-1000, -1000), new Vector(1500, 1500)].map(point => point.div(2))

export default {
    agents : 100,
    rotationBorder: 30,
    speedLimits: [4, 10],
    positionBufferSize: 100,
    worldBorderSize: worldBorder[1].copy().sub(worldBorder[0]),

    worldBorder,
    builders: [], 
}