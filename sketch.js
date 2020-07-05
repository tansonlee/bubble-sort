let list = []
let i = 0
let elements = 400
let frame_rate = 100

function fillList(list, num_elements, high) {
	for (let i = num_elements; i >= 1; i--) {
		list.push(i);
	}
}

function swap(list, i1, i2) {
	let temp = list[i1];
	list[i1] = list[i2];
	list[i2] = temp;
}

function bubbleSort() {
	for (let i = 0; i < list.length; i++) {
		if (list[i] > list[i+1]) {
			swap(list, i, i+1);
		}
	}
}

function setup() {
  	createCanvas(400, 400);
  	fillList(list, elements, height);
	fill(51);
	noStroke();
	frameRate(frame_rate);
}

function draw() {
	background(255);

	for (let j = 0; j < list.length; j++) {
		rect(j*(width/list.length), height - list[j], width/list.length, list[j]);
	}
	bubbleSort();
}

function mousePressed() {
	console.log("pressed")
	Sort();
}