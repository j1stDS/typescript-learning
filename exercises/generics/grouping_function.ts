type groupReturnType<T> = Partial<Record<string, Array<T>>>;


function group<T extends Record<string, string | number>>(data: Array<T>, groupBy: keyof T) : groupReturnType<T> {
    let result: groupReturnType<T> = {};
    data.forEach((record) => {
        if (result.hasOwnProperty(record[groupBy].toString())) {
            result[record[groupBy].toString()]!.push(record);
        } else {
            result[record[groupBy].toString()] = [record];
        }
    });

    return result;
}

const groupData = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

console.log(group(groupData, "group"));