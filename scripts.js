const heading = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const changeSize = document.querySelector("#change-size");
const gridContainer = document.querySelector("#grid-container");

let n = 16; // as default

const makeGrid = (n) => {
	heading.textContent = `${n}x${n} GRID`;
	gridContainer.replaceChildren();

	for (let j = 1; j <= n; j++) {
		const row = document.createElement("div");

		for (let i = 1; i <= n; i++) {
			const item = document.createElement("div");
			item.classList.add("item");

			item.addEventListener("mouseenter", () => {
				if (!item.style.backgroundColor) {
					item.style.backgroundColor = randomColor();
				}
			});
			row.appendChild(item);
		}

		row.classList.add("row");
		gridContainer.appendChild(row);
	}
};

function randomNumber(number) {
	return Math.floor((Math.random() * number * 10) / 10);
}

function randomColor() {
	return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
		255
	)})`;
}

resetButton.addEventListener("click", () => makeGrid(n));
changeSize.addEventListener("click", () => {
	const value = +prompt("Change grid size, 1-100");
	console.log(value);
	if (value > 100) {
		alert("Invalid input");
	} else {
		n = value;
		makeGrid(n);
	}
});

makeGrid(n);
