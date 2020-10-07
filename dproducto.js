const connection  = require('./dbsqlserver')
const Producto = require('./product')

async function getProducts() {
    querylist = "select * from Producto"
    try {
        const pool = await connection.poolPromise
        const result = await pool.request()
            .query(querylist)
        let arrayp = [];
        for (var x of result.recordset) {
            product = new Producto.Producto(x.IdProducto, x.ImgProducto);
            arrayp.push(product);
        }
        return arrayp;

    } catch (error) {

        return error.message;
    }
}
async function getProduct(id) {
    querysearch = "select * from producto where IdProducto=@idp"
    try {
        const pool = await connection.poolPromise
        const result = await pool.request()
            .input('idp', connection.sql.Int, id)
            .query(querysearch)
        product = new Producto.Producto(result.recordset[0].IdProducto, result.recordset[0].ImgProducto);
        return product;

    } catch (error) {

        return error.message;
    }
}
async function insertProduct(product) {
    queryinsert = "insert into Producto values (@img)"
    try {
        const pool = await connection.poolPromise
        const result = await pool.request()
            .input('img', connection.sql.VarChar, product.imgproducto)
            .query(queryinsert)
        if (result.rowsAffected == 0)
        {
            return "The product could not be inserted, the data may have been entered incorrectly";
        }
        return "The product was inserted successfully";

    } catch (error) {

        return error.message;
    }
}
async function updateProduct(product) {
    queryupdate = "Update Producto Set ImgProducto=@img where IdProducto=@id"
    try {
        const pool = await connection.poolPromise
        const result = await pool.request()
            .input('img', connection.sql.VarChar, product.imgproducto)
            .input('id', connection.sql.Int,product.idproducto)
            .query(queryupdate)
        if (result.rowsAffected == 0) {
            return "The product could not be updated, the data may have been entered incorrectly";
        }
        return "The product was updated successfully";

    } catch (error) {

        return error.message;
    }
}
async function deleteProduct(product) {
    querydelete = "delete from Producto where IdProducto=@id"
    try {
        const pool = await connection.poolPromise
        const result = await pool.request()
            .input('id', connection.sql.Int, product.idproducto)
            .query(querydelete)
        if (result.rowsAffected == 0) {
            return "The product could not be deleted, the data may have been entered incorrectly";
        }
        return "The product was delete successfully";

    } catch (error) {

        return error.message;
    }
}
module.exports = { getProducts,getProduct,insertProduct,updateProduct,deleteProduct };
//var producto = new Producto.Producto(15, 'dsg.jpg')

//insertProduct(producto).then(data => {
//    console.log(data)
//})
//updateProduct(producto).then(data => {
//    console.log(data)
//})
//deleteProduct(producto).then(data => {
//    console.log(data)
//})
//getProducts().then(data => {
//    console.log(data)
//})
//getProduct(5).then(data => {
//    console.log(data)
//})
////}
