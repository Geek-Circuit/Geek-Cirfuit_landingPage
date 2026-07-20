import { LandingRepository } from '../../infrastructure/repositories/LandingRepository.js'

export class LandingService {
    constructor() {
        this.repository = new LandingRepository()
    }

    getProductos() {
        return this.repository.obtenerProductos()
    }

    getServicios() {
        return this.repository.obtenerServicios()
    }

    getMiembros() {
        return this.repository.obtenerMiembros()
    }

    getConvenios() {
        return this.repository.obtenerConvenios()
    }
}