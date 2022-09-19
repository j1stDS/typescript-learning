function sortById<T extends Array<{id: number}>>(initialArray: T, sortDir : "inc" | "dec" = "inc"): T {
    return initialArray.sort((a, b) => {
		if (sortDir === "inc") {
			if (a.id < b.id) {
				return -1;
			} else {
				return 1;
			}
		} else {
			if (b.id < a.id) {
				return -1;
			} else {
				return 1;
			}
		}
	});
}


const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

const data2 = [
	{ id: 2, type: 'Петя', hobby: "sleep" },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

console.log(sortById(data));

console.log(sortById(data2, "dec"));