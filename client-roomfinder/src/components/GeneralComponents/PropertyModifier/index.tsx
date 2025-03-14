'use client';

import { useFormulario } from "@/components/Form/FormularioContext";
import clsx from 'clsx';
import { Minus, Plus } from "lucide-react";

const estBtn = 'absolute flex justify-center items-center w-[35px] h-[35px] rounded-full border border-solid border-gray-500 text-gray-500';

export default function PropertyModifier({ content, min, max }: { content: string, min: number, max: number }) {

    const { inmueble, setInmueble } = useFormulario();

    const incrementar = () => {
        const propiedad = obtenerPropiedad(content);
        let valorActual = inmueble[propiedad];
        setInmueble({ [propiedad]: valorActual < max ? valorActual + 1 : valorActual });
    }

    const decrementar = () => {
        const propiedad = obtenerPropiedad(content);
        let valorActual = inmueble[propiedad];
        setInmueble({ [propiedad]: valorActual > min ? valorActual - 1 : valorActual });
    }

    const obtenerPropiedad = (campo: string) => {
        const campos: Record<string, string> = {
            'Recámaras': 'numRecamaras',
            'Camas': 'numCamas',
            'Baños': 'numBanos',
            'Huéspedes (capacidad)': 'numHuespedes',
            'Capacidad del estacionamiento': 'capEstacionamiento'
        }

        return campos[campo];
    }

    const propiedad = obtenerPropiedad(content);

    return (
        <div className="flex items-center justify-between border-b-1 py-3 border-gray-300 w-full mx-auto">
            <p className="text-sm md:text-base text-neutral-900 dark:text-gray-200">
                {content}
            </p>
            <div className="relative grid grid-cols-3 gap-3 md:gap-8 items-center w-32">
                <button
                    onClick={decrementar}
                    className={clsx(
                        'absolute flex justify-center items-center w-[35px] h-[35px] rounded-full border border-solid border-gray-500 text-gray-500 dark:border-gray-200 dark:text-gray-200',
                        {
                            'hover:cursor-not-allowed border-zinc-300 text-zinc-300': inmueble[propiedad] === min
                        }
                    )}
                >
                    <Minus size={20} />
                </button>

                <p className="absolute left-[60px] text-neutral-900 dark:text-gray-200">
                    {inmueble[propiedad]}
                </p>
                <button
                    onClick={incrementar}
                    className={clsx(
                        `${estBtn} right-0 border border-solid border-gray-500 text-gray-500 dark:border-gray-200 dark:text-gray-200`,
                        {
                            'hover:cursor-not-allowed border-zinc-300 text-zinc-300': inmueble[propiedad] === max
                        }
                    )}
                >
                    <Plus size={20} />
                </button>
            </div>
        </div>
    );
}