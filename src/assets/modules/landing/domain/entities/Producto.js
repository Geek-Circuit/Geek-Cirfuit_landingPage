export class Producto {
    constructor({ id, nombre, descripcion, imagen, precio, items }) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.precio = precio
        this.items = items || [] // productos individuales de esta categoría
    }
}
