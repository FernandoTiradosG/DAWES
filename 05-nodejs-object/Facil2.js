function keysAndValues(obj) {
	const separate = [Object.keys(obj), Object.values(obj)];
	return separate;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}))
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}))
console.log(keysAndValues({key1: true, key2: false, key3: undefined}))
console.log(keysAndValues({1: null, 2: null, 3: null}))
console.log(keysAndValues({key1: "cat", key2: "dog", key3: null}))