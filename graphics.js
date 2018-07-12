var lines = (Math.random() * 4 + 1);
var colors = ["#46535B", "#818A8F", "#D5D6D3", "#F0801A", "#E75420", "#991A39", "#6AA998", "#258998", "#98B8BF"];
var shift = [];
var speed = [];
var amplitude = [];
var wavelength = [];
var color = [];
for(var i = 0; i < 5; i++){
	shift.push(Math.random() * window.innerWidth * 0.1);
	speed.push(Math.random() * 10 + 2);
	color.push(colors[Math.floor(Math.random() * colors.length)]);
	amplitude.push((Math.random() * (window.innerHeight * 0.49 - window.innerHeight * 0.2)) + window.innerHeight * 0.2);
	wavelength.push((Math.random() * (window.innerWidth * 0.3 - window.innerWidth * 0.02)) + window.innerWidth * 0.02);
}
move();
function move() {
	document.getElementById("sine").innerHTML = "";
	for(var i = 0; i < lines; i++){
		createWave(amplitude[i], wavelength[i], shift[i], color[i]);
		shift[i] = shift[i] + speed[i];
	}
	setTimeout(move, 200);
}
function createWave (amplitude, wavelength, shift, color){
	var i = 0;
	var step = wavelength / 5;
	do{
		line(
			i - step,
			(Math.sin((i - step - shift) / wavelength) * amplitude) + (window.innerHeight / 2),
			i,
			(Math.sin((i - shift) / wavelength) * amplitude) + (window.innerHeight / 2),
			color
		);
		i = i + step;
	}while((i - step) < window.innerWidth)
}
function line(x1, y1, x2, y2, color) {
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line'); //Create a path in SVG's namespace
	newElement.setAttribute("x1", x1);
	newElement.setAttribute("y1", y1);
	newElement.setAttribute("x2", x2);
	newElement.setAttribute("y2", y2);
	newElement.style.stroke = color; //Set stroke colour
	newElement.style.strokeWidth = window.innerHeight * 0.006; //Set stroke width
	document.getElementById("sine").appendChild(newElement);
}