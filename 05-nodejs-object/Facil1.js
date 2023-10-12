function toArray(obj) {
	return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ foo: 33, bar: 45, baz: 67 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))