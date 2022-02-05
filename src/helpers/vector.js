//да да опять снова новая версия
function Vector(x=0,y=0) 
{	
	this.set(x,y)
}

Vector.prototype.toString = function()
{
	return 'Vector(' + this.x + ', ' + this.y +')'
}

Vector.prototype.copy = function()
{
	return new Vector(this.x,this.y)
}
Vector.prototype.set = function(x=0, y=0){
	this.x = x
	this.y = y
	return this
}
Vector.prototype.add = function(vect)
{
	this.x += vect.x
	this.y += vect.y
	return this
}

Vector.prototype.sub = function(vect)
{
	this.x -= vect.x
	this.y -= vect.y
	return this
}

Vector.prototype.mul = function(num)
{
	this.x *= num
	this.y *= num
	return this
}


Vector.prototype.div = function(num)
{
	this.x /= num
	this.y /= num
	return this
}

Vector.prototype.rot = function(angle)
{
	this.angle += angle
	return this
}




Vector.prototype.fromAngle = function(angle,len)
{
	this.x = Math.cos(angle) * len
	this.y = Math.sin(angle) * len	
	return this
}

Vector.prototype.setLength = function(length)
{
	return this.fromAngle(this.angle, length)
}

Vector.prototype.setAngle = function(angle)
{
	return this.fromAngle(angle, this.length)
}

Vector.sum = function(v1,v2)
{
  return new Vector( v1.x + v2.x
                   , v1.y + v2.y)
}

Vector.prototype.squarePos = function(w, h){
	this.x = Math.trunc(this.x / w)
	this.y = Math.trunc(this.y / h)
	return this
}

Vector.prototype.toString = function() {
	return `Vector(${this.x},${this.y})`
}

Object.defineProperty(Vector.prototype,'length',
	{
		get: function()
				{
					return Math.sqrt(this.x * this.x + this.y * this.y)
				}
	,	set: Vector.prototype.setLength
	})
Object.defineProperty(Vector.prototype,'angle',
	{
		get: function()
				{
						return Math.atan2(this.y, this.x)
				}
	,	set: Vector.prototype.setAngle
	})


export default Vector