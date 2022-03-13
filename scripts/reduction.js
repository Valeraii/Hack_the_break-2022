const list = ["apple", "banana", "pear", "orange", "strawberry", "grape", "lemon"];

function reduce(list) {
	let index = Math.floor(Math.random() * 3);
  	console.log(list[index]);
	sessionStorage.setItem("final", list[index]);
}
