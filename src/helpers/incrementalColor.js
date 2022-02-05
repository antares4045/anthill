export default function incrementalColor(i, clr_shift=0)
{
	return arrToClr(hsvToRgb(incrementalAngle(i, clr_shift) ,100,100))
}

export function incrementalAngle(i, baseAngle=0){
    var curr = i
	var currAngle = baseAngle
	var incAngle = 180
	while(curr)
	{
		if(curr & 1)
			currAngle += incAngle
		incAngle /= 2
		curr = curr >> 1
	}
    return currAngle % 360
}


export function arrToClr(arr)
{
	var buff
	var res = "#"
	for(var k in arr)
	{
		buff = (Math.round(arr[k]) % 256).toString(16)
		if(buff.length != 2)
			buff ='0' + buff
		res += buff
	}
	return res
}

export function hsvToRgb(H,S,V)
{
	
	while(H < 0) 
		H += 360
	while(H >= 360)
		H -= 360
	//алгоритм с википедии дословно
	var Hi = Math.trunc(((H / 60) % 6))
	var Vmin = (100 - S) * V / 100
	var a = (V - Vmin) * (H % 60) / 60
	var Vinc = Vmin + a
	var Vdec = V - a
	var R,G,B
	switch(Hi)
	{
		case 0:
			R = V
			G = Vinc
			B = Vmin
		break;
		case 1:
			R = Vdec
			G = V
			B = Vmin
		break;
		case 2:
			R = Vmin
			G = V
			B = Vinc
		break;
		case 3:
			R = Vmin
			G = Vdec
			B = V
		break;
		case 4:
			R = Vinc
			G = Vmin
			B = V
		break;
		case 5:
			R = V
			G = Vmin
			B = Vdec
		break;
	}
	return [R * 255 / 100,
			G * 255 / 100,
			B * 255 / 100]
}