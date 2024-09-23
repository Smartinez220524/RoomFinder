import React, { createContext, useContext, useState } from 'react';

// Define la interfaz para el estado del formulario

export interface InterfaceUbicacion {
    pais:string;
    direccion:string;
    estado:string;
    codigoPostal:number;
    ciudad_municipio:string;
    numExt?:number;
    numInt?:number;
}

export interface Inmueble {
    tipoInmueble: string;
    servicios: string[];
    amenidades: string[];
    numRecamaras: number;
    numCamas: number;
    numBanos: number;
    numHuespedes: number;
    capEstacionamiento: number,
    fotos: File[];
    ubicacion: InterfaceUbicacion;
    descripcion: string;
    reglas: string;
    costo: number;
    [key : string]: any
}

// valores por defecto para el inmueble
const valoresDefectoUbicacion : InterfaceUbicacion = {
    pais: '',
    direccion: '',
    estado: '',
    codigoPostal: -1,
    ciudad_municipio: '',
    numExt: -1,
    numInt: -1
}

const valoresDefectoInmueble : Inmueble = {
    tipoInmueble: '',
    servicios: [],
    amenidades: [],
    numRecamaras: 1,
    numCamas: 1,
    numBanos: 1,
    numHuespedes: 1,
    capEstacionamiento: 1,
    fotos: [],
    ubicacion: valoresDefectoUbicacion,
    descripcion: '',
    reglas: '',
    costo: 0,
}

// Interfaz para el contexto
interface FormularioContextProps {
    inmueble: Inmueble;
    setInmueble: (data: Partial<Inmueble>) => void;  // Función para actualizar el inmueble
    reiniciarValores: () => void // función para reiniciar los valores actuales a valores por defecto
}

// Crear el contexto
const FormularioContext = createContext<FormularioContextProps | undefined>(undefined);

// Proveedor del contexto
export const FormularioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Definir el estado inicial del inmueble
    const [inmueble, setInmuebleState] = useState<Inmueble>(valoresDefectoInmueble);

    // Función para actualizar el estado del inmueble
    const setInmueble = (data: Partial<Inmueble>) => {
        setInmuebleState((prev) => ({ ...prev, ...data }));
    };

    // función para reiniciar los valores del inmueble
    const reiniciarValores = () => {
        setInmuebleState(valoresDefectoInmueble);
    }

    return (
        <FormularioContext.Provider value={{ inmueble, setInmueble, reiniciarValores }}>
            {children}
        </FormularioContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useFormulario = () => {
    const context = useContext(FormularioContext);
    if (!context) {
        throw new Error('useFormulario debe ser usado dentro de un FormularioProvider');
    }
    return context;
};
