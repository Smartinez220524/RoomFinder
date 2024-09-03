import Image from "next/image";
import Inmueble from "./Inmueble";

export default function Inmuebles (){

    /* Obtener inmuebles del arrendador */

    /* por el momento */
    const inmuebles = [
        {
            imagenes: [
                {url: '/inmueble.jpg', id:1},
                {url : '/background/interior1.jpg', id:2},
                {url : '/background/interior2.jpg', id:3},
                {url : '/background/interior3.jpg', id:4},
                {url : '/background/interior4.jpg', id:5},
            ],
            tipo:'Casa',
            dormitorios: 2,
            banos: 5,
            ocupantes: 6,
            costo: 1200,
            descripcion: 'Casa acogedora ubicada en un vecindario tranquilo, cerca de la universidad y con buenos servicios. ¡Ideal para estudiantes!'
        },

        {
            imagenes: [
                {url: '/inmueble2.jpg', id:1},
                {url : '/background/interior1.jpg', id:2},
                {url : '/background/interior2.jpg', id:3},
                {url : '/background/interior3.jpg', id:4},
                {url : '/background/interior4.jpg', id:5},
            ],
            tipo:'Departamento',
            dormitorios: 1,
            banos: 1,
            ocupantes: 2,
            costo: 3500,
            descripcion: 'Casa acogedora ubicada en un vecindario tranquilo, cerca de la universidad y con buenos servicios. ¡Ideal para estudiantes!'
        },

        {
            imagenes: [
                {url: '/inmueble3.jpg', id:1},
                {url : '/background/interior1.jpg', id:2},
                {url : '/background/interior2.jpg', id:3},
                {url : '/background/interior3.jpg', id:4},
                {url : '/background/interior4.jpg', id:5},
            ],
            tipo:'Cuarto',
            dormitorios: 1,
            banos: 1,
            ocupantes: 6,
            costo: 2200,
            descripcion: 'Casa acogedora ubicada en un vecindario tranquilo, cerca de la universidad y con buenos servicios. ¡Ideal para estudiantes!'}
    ]

    return(
        <>
            <section className="relative h-72">
                <Image
                    src={'/background/fondo-6.jpg'}
                    alt='RoomFinder background image'
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="font-semibold text-white text-4xl">Mis Inmuebles en Renta</h1>
                </div>
            </section>
            {/* momentaneo */}
            <section className="my-12">
                <div className="w-[95%] mx-auto grid grid-cols-3 gap-6"> {/* contenedor de propiedades */}
                    <Inmueble inmueble={inmuebles[0]}/>
                    <Inmueble inmueble={inmuebles[1]}/>
                    <Inmueble inmueble={inmuebles[2]}/>
                    <Inmueble inmueble={inmuebles[0]}/>
                    <Inmueble inmueble={inmuebles[1]}/>
                    <Inmueble inmueble={inmuebles[2]}/>
                </div>
            </section>
        </>
    );
}