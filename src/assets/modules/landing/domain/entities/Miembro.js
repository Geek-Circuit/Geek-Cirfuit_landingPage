export class Miembro {
    constructor({ id, nombre, rol, linkedin, whatsapp }) {
        this.id = id
        this.nombre = nombre
        this.rol = rol
        this.linkedin = linkedin || null
        this.whatsapp = whatsapp || null
    }
}
