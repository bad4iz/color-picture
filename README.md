# get average color by image

![](https://travis-ci.org/bad4iz/color-picture.svg?branch=master)
![](https://img.shields.io/npm/v/color-picture.svg)
![](https://img.shields.io/npm/dt/color-picture.svg)

[demo](https://bad4iz.github.io/demo-color-picture/)  
[npm package](https://www.npmjs.com/package/color-picture)

--- 
install

```
yarn add color-picture

// or

npm i --save color-picture

```

use
```javascript
import { getAverageRGBA } from "color-picture";


const img = document.querySelector('img');
const backgr = getAverageRGBA(img);
document.body.style.backgroundColor = backgr;
```
[demo](https://bad4iz.github.io/demo-color-picture/)  
[source demo](https://github.com/bad4iz/demo-color-picture)
