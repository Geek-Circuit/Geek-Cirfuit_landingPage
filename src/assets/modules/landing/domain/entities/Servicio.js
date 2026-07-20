export class Servicio {
    constructor({ id, titulo, descripcion, icono, imagen, encargado }) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.icono = icono
        this.imagen = imagen
        this.encargado = encargado || null
    }
}
