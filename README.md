# Crud Product Javascript


This package contains a crud of a Product entity with id (int) and image url (string) attributes

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install DataProduct.

```bash
npm install DataProduct
```

## Usage

```Javascript
var express = require('express');
var router = express.Router();
const managep = require('crudproductimagesqlserver/dproducto');

router.get('/listproduct', async function (req, res) {
    var dataproduct = await managep.getProducts();
    console.log(dataproduct);
    res.send(dataproduct);
});



```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)


