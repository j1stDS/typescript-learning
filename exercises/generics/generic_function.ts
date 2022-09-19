function toString<T> (data: T): string {
    switch (typeof data) {
        case "string":
            return data;
        case "object":
            return JSON.stringify(data);
        case "number":
        case "bigint":
        case "boolean":
        case "symbol":
        case "function":
            return data.toString();
        case "undefined":
            return "undefined";
        default:
            return "unknownType"
    }
}
let typesArr = [
    Symbol("a"),
    'string',
    {a: 1},
    100,
    false,
    function() {
        return 1;
    }, undefined, [1, 2]];

typesArr.forEach(type => console.log(toString(type)));


