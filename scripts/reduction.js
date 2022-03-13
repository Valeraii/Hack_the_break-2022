const list = ["apple", "banana", "pear", "orange", "strawberry", "grape", "lemon"];

function reduce(list, numOptions) {
	const reduction = [];
	while (reduction.length < numOptions) {
		let item = list[Math.floor(Math.random()*list.length)];
		if (!reduction.includes(item)) {
  		reduction.push(item);
  		}
	}
  return reduction;
}

const reduced = reduce(sessionStoreage.getItem("top3"), 5);
console.log(reduced);

document.getElementById("option1").innerHTML = reduced[0];
document.getElementById("option2").innerHTML = reduced[1];
document.getElementById("option3").innerHTML = reduced[2];
document.getElementById("option4").innerHTML = reduced[3];
document.getElementById("option5").innerHTML = reduced[4];