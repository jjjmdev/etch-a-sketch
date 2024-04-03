const gridContainer = document.querySelector("#grid-container");

let n = 16;

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

function randomNumber(number) {
	return Math.floor((Math.random() * number * 10) / 10);
}

function randomColor() {
	return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
		255
	)})`;
}
