import Vector from 'helpers/vector'


function Builder(color, 
    {angle=null, 
    speed=null, 
    position=new Vector(), 
    speedLimits=[1, 5], 
    positionBufferSize=30,
    rotationBorder=Math.PI/180 * 2}={},
    ){
    if(angle === null){
        angle = Math.random() * 2 * Math.PI;
    }
    if(speed === null){
        speed = Math.random() * (speedLimits[1] - speedLimits[0]) + speedLimits[0];
    }

    this.speed = new Vector().fromAngle(angle, speed);
    this.position = position.copy();
    this.color = color;
    
    this.positionsBuffer = new Array(positionBufferSize).fill(position.copy())
    this.rotationBorder = rotationBorder
}

Builder.prototype.move = function(){

    this.speed.rot(Math.random() * 2 * this.rotationBorder - this.rotationBorder)
    this.position.add(this.speed)

    this.positionsBuffer.shift();
    this.positionsBuffer.push(this.position.copy());
}


Builder.prototype.visualizeBuffer = function({key}){
    return <path 
            key={key}
            style={{filter: "blur(3px)"}}  
            stroke={this.color}
            strokeWidth={1}
            d={"M" + this.positionsBuffer.map(p => p.x+' '+p.y).join("L")}
            fill="none"
        />
}

Builder.prototype.visualizeAnt = function({key}){
    return  <circle  
        key={key} 
        r={2} 
        fill={this.color} 
        cx={this.position.x} 
        cy={this.position.y} 
        />
   
}


export {Builder}