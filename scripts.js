const gridContainer = document.querySelector("#grid-container");

let n = 16;

for (let j = 1; j <= n; j++) {
	const row = document.createElement("div");

	for (let i = 1; i <= n; i++) {
		const item = document.createElement("div");
		item.classList.add("item");

		item.addEventListener("mouseenter", () => {
			item.style.backgroundColor = "black";
		});
		row.appendChild(item);
	}

	row.classList.add("row");
	gridContainer.appendChild(row);
}
