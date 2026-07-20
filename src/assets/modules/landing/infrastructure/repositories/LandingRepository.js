import { Producto } from '../../domain/entities/Producto.js'
import { Servicio } from '../../domain/entities/Servicio.js'
import { Miembro } from '../../domain/entities/Miembro.js'
import { Convenio } from '../../domain/entities/Convenio.js'

export class LandingRepository {
    obtenerProductos() {
        return [
            new Producto({
                id: 1,
                nombre: 'Microcontroladores y Desarrollo',
                descripcion: 'Placas Arduino (Uno, Nano, Mega), módulos ESP32, Raspberry Pi y accesorios de expansión.',
                imagen: '/productos/microcontroladores.jpeg',
                precio: 0
            }),
            new Producto({
                id: 2,
                nombre: 'Sensores y Módulos',
                descripcion: 'Sensores de temperatura, ultrasonido, movimiento, ritmo cardíaco (ECG), humedad, gas y más.',
                imagen: '/productos/sensores.jpeg',
                precio: 0
            }),
            new Producto({
                id: 3,
                nombre: 'Componentes Pasivos e Integrados',
                descripcion: 'Resistencias de precisión, capacitores, transistores, diodos, amplificadores operacionales, optocopladores y compuertas lógicas.',
                imagen: '/productos/componentes.jpeg',
                precio: 0
            }),
            new Producto({
                id: 4,
                nombre: 'Prototipado y Herramientas',
                descripcion: 'Protoboards, cables jumper (M-M, M-H, H-H), fuentes para protoboard, kits de soldadura y multímetros.',
                imagen: '/productos/prototipado.jpeg',
                precio: 0
            })
        ]
    }

    obtenerServicios() {
        return [
            new Servicio({
                id: 1,
                titulo: 'Asesoría Técnica y Simulación',
                descripcion: 'Revisamos tus diagramas y esquemáticos en software de simulación antes del montaje físico, evitando que dañes componentes.',
                imagen: '/servicios/asesoria-tecnica.jpeg'
            }),
            new Servicio({
                id: 2,
                titulo: 'Programación de Microcontroladores',
                descripcion: 'Soporte y optimización de código en C/C++, Python y VHDL para tus sistemas embebidos y proyectos de control.',
                imagen: '/servicios/programacion.jpeg'
            })
        ]
    }

    obtenerMiembros() {
        return [
            new Miembro({
                id: 1,
                nombre: 'León Gómez, Deybi',
                rol: 'Liderazgo de Operaciones y Hardware',
            }),
            new Miembro({
                id: 2,
                nombre: 'Becerra Masías, Harol',
                rol: 'Desarrollo de Proyectos y Soporte Técnico',
            }),
            new Miembro({
                id: 3,
                nombre: 'Blancas Chávez, José',
                rol: 'Gestión Comercial y Canales Digitales',
            })
        ]
    }

    obtenerConvenios() {
        return [
            new Convenio({
                id: 1,
                titulo: 'Alianzas Académicas y Agrupaciones Estudiantiles',
                descripcion: 'Trabajamos con ramas estudiantiles (IEEE, asociaciones de robótica y clubes de mecatrónica) ofreciendo descuentos exclusivos en materiales para talleres y competencias.',
                imagen: '/convenios/ieee.jpeg'
            })

        ]
    }
}