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
                precio: 0,
                items: [
                    { id: 1, nombre: 'ESP32 Dev Module 30 pines', precio: 35, imagen: '/productos/esp32.jpeg' },
                    { id: 2, nombre: 'Arduino Nano Ch340', precio: 19, imagen: '/productos/arduino-nano.jpeg' },
                    { id: 3, nombre: 'Arduino Uno Dev Module Ch340', precio: 35, imagen: '/productos/arduino-uno.jpeg' }
                ]
            }),
            new Producto({
                id: 2,
                nombre: 'Sensores y Módulos',
                descripcion: 'Sensores de temperatura, ultrasonido, movimiento, ritmo cardíaco (ECG), humedad, gas y más.',
                imagen: '/productos/sensores.jpeg',
                precio: 0,
                items: []
            }),
            new Producto({
                id: 3,
                nombre: 'Componentes Pasivos e Integrados',
                descripcion: 'Resistencias de precisión, capacitores, transistores, diodos, amplificadores operacionales, optocopladores y compuertas lógicas.',
                imagen: '/productos/componentes.jpeg',
                precio: 0,
                items: []
            }),
            new Producto({
                id: 4,
                nombre: 'Prototipado y Herramientas',
                descripcion: 'Protoboards, cables jumper (M-M, M-H, H-H), fuentes para protoboard, kits de soldadura y multímetros.',
                imagen: '/productos/prototipado.jpeg',
                precio: 0,
                items: []
            })
        ]
    }

    obtenerServicios() {
        return [
            new Servicio({
                id: 1,
                titulo: 'Asesoría Técnica y Simulación',
                descripcion: 'Revisamos tus diagramas y esquemáticos en software de simulación antes del montaje físico, evitando que dañes componentes.',
                imagen: '/servicios/asesoria-tecnica.jpeg',
                encargado: {
                    nombre: 'León Gómez, Deybi',
                    rolContacto: 'Contactar al encargado de Hardware',
                    linkedin: 'https://www.linkedin.com/in/deybi-leon-380137298?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                    whatsapp: 'https://wa.me/qr/VS2FZZF2LI72D1'
                }
            }),
            new Servicio({
                id: 2,
                titulo: 'Programación de Microcontroladores',
                descripcion: 'Soporte y optimización de código en C/C++, Python y VHDL para tus sistemas embebidos y proyectos de control.',
                imagen: '/servicios/programacion.jpeg',
                encargado: {
                    nombre: 'Blancas Chávez, José',
                    rolContacto: 'Contactar con el programador',
                    linkedin: 'https://www.linkedin.com/in/jose-blancas-elec',
                    whatsapp: 'https://wa.me/qr/4ZRRITR2PFC5M1'
                }
            })
        ]
    }

obtenerMiembros() {
        return [
            new Miembro({
                id: 1,
                nombre: 'León Gómez, Deybi',
                rol: 'Liderazgo de Operaciones y Hardware',
                linkedin: 'https://www.linkedin.com/in/deybi-leon-380137298?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                whatsapp: 'https://wa.me/qr/VS2FZZF2LI72D1'
            }),
            new Miembro({
                id: 2,
                nombre: 'Becerra Masías, Harol',
                rol: 'Desarrollo de Proyectos y Soporte Técnico',
                linkedin: null, // TODO: agregar cuando Harol pase su link de LinkedIn
                whatsapp: null  // TODO: agregar cuando Harol pase su link de WhatsApp
            }),
            new Miembro({
                id: 3,
                nombre: 'Blancas Chávez, José',
                rol: 'Gestión Comercial y Canales Digitales',
                linkedin: 'https://www.linkedin.com/in/jose-blancas-elec',
                whatsapp: 'https://wa.me/qr/4ZRRITR2PFC5M1'
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
