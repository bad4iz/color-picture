# get average color by image
[demo](https://bad4iz.github.io/demo-color-picture/)

--- 
install

```
yarn add color-picture

// or

npm i --save color-picture

```

use
```javascript
import getAverageRGBA from "color-picture";


const img = document.querySelector('img');
const backgr = getAverageRGBA(img);
document.body.style.backgroundColor = backgr;
```
[demo](https://bad4iz.github.io/demo-color-picture/)  
[source demo](https://github.com/bad4iz/demo-color-picture)
