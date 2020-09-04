# inkmbt

Format numbers in Twitter like formats, thousands in K, millions in M and Trillions in T.

## Quick start

### Installation

```shell
npm i inkmbt
```

### Usage

1. Use via ES6 import

```javascript
import inkmbt from "inkmbt"

console.log(inkmbt(1000)) // "1k"
console.log(inkmbt(10000)) // "10k"
console.log(inkmbt(100000)) // "100k"
```

2. Use via CommonJs syntax

```javascript
let inkmbt = require("inkmbt")

console.log(inkmbt(1000)) // "1k"
console.log(inkmbt(10000)) // "10k"
console.log(inkmbt(100000)) // "100k"
```

## Author

[Valentine Elum](https://twitter.com/vahlcode)

## License

MIT LICENSE
