class Producto {
    idproducto = 0;
    imgproducto = "";

    getIdProducto() {
        return this.idproducto;
    }
    setIdProducto(x) {
        this.idproducto = x;
    }
    getImgProducto() {
        return this.imgproducto;
    }
    setImgProducto(x) {
        this.imgproducto = x;
    }
    constructor(idproducto, imgproducto) {
        this.setIdProducto(idproducto);
        this.setImgProducto(imgproducto);

    }
}
module.exports = { Producto };