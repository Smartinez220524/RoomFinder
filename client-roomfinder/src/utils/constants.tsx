import { UniversityData, Roles, MapCoordenada, Folder } from '@/utils/interfaces';

// Iconos
// ...

// Constants - Messages or data
export const messages = {
    roleid: {
        required: "Selecciona un tipo de usuario"
    },
    vchname: {
        required: "Debes introducir un nombre",
        min: "Debe ser mayor a 3 caracteres",
        max: "Debe ser menor a 25 caracteres"
    },
    vchpaternalsurname: {
        required: "Debes introducir el apellido paterno",
        min: "Debe ser mayor a 3 caracteres",
        max: "Debe ser menor a 25 caracteres"
    },
    vchmaternalsurname: {
        required: "Debes introducir el apellido materno",
        min: "Debe ser mayor a 3 caracteres",
        max: "Debe ser menor a 25 caracteres"
    },
    vchemail: {
        required: "Correo electrónico es requerido",
        pattern: "Debes introducir una dirección correcta",
    },
    vchpassword: {
        required: "Contraseña requerida",
        min: "Debe ser mayor a 8 caracteres",
        max: "Debe ser menor a 16 caracteres"
    },
    confirm_password: {
        required: "Confirmar contraseña es requerida",
        min: "Debe ser mayor a 8 caracteres",
        max: "Debe ser menor a 16 caracteres",
        validate: "Las contraseñas no coinciden"
    },
    dtbirthdate: {
        required: "Fecha de nacimiento es requerida",
        age: "Debes ser mayor de edad"
    },
    profilImage: {
        required: "Imagen de perfil es requerida"
    },
    vchimage: {
        required: "Imagen es requerida"
    },
    intcodestudent: {
        required: "Código de estudiante es requerido",
        min: "No es un código de estudiante válido",
        max: "No es un código de estudiante válido"
    },
    vchuniversity: {
        required: "Universad es requerida"
    },
    vchphone: {
        required: "Teléfono es requerido",
    },
    intzip: {
        required: "Código postal es requerido",
        min: "No es un código postal válido",
        max: "No es un código postal válido"
    },
    vchstreet: {
        required: "El campo Calle es requerido",
    },
    vchsuburb: {
        required: "El campo Colonia es requerido",
    },
    vchmunicipality: {
        required: "El campo Municipio es requerido",
    },
    vchstate: {
        required: "El campo Estado es requerido",
    },
    folder: {
        required: "El campo Carpeta es requerido",
    },
    width: {
        required: "El campo Ancho es requerido",
        min: "El ancho debe ser mayor a 0",
        max: "El ancho debe ser menor a 1800"
    },
    height: {
        min: "El ancho debe ser mayor a 0",
        max: "El ancho debe ser menor a 1800"
    },
}

export const images = [
    {
        name: 'portada',
        url: 'https://res.cloudinary.com/dal8aivch/image/upload/v1713586413/resources/up7t5qoheawy9ejra0xy.jpg',
    },
    {
        name: 'portada2',
        url: 'https://res.cloudinary.com/dal8aivch/image/upload/v1713591079/resources/gzd4czbpdy9ksy3tw8fv.jpg',
    },
];

export const patterns = {
    vchemail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    vchpassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
    code_student: /^[0-9]{8}$/,
    uuidv4: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
};

export const role: Roles[] = [
    {
        roleid: 1,
        vchname: "Estudiante",
        vchdescription: "Usuario tipo estudiante",
    },
    {
        roleid: 2,
        vchname: "Arrendador",
        vchdescription: "Usuario tipo Arrendador",
    },
    {
        roleid: 3,
        vchname: "Administrador",
        vchdescription: "Usuario tipo Administrador",
    }
]
// Constants - Data
export const roles: Roles[] = [
    {
        roleid: 1,
        vchname: "Estudiante",
        vchdescription: "Usuario tipo estudiante",
    },
    {
        roleid: 2,
        vchname: "Arrendador",
        vchdescription: "Usuario tipo Arrendador",
    }
]
// Mapeo de roles
export const rolesMapping: Record<number, string> = role.reduce((acc, rol) => {
    acc[rol.roleid] = rol.vchname;
    return acc;
}, {} as Record<number, string>);

export const folders: Folder[] = [
    {
        name: "Estudiante",
        path: "students",
    },
    {
        name: "Arrendador",
        path: "lessors",
    },
    {
        name: "Propiedades",
        path: "properties",
    },
    {
        name: "Recursos",
        path: "resources",
    },
]

// Pruebas Universities
export const universities: UniversityData[] = [
    {
        name: "Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)",
        geocode: [20.655080, -103.325448],
        popUp: "Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)",
        description: "El CUCEI se especializa en las áreas de ciencias exactas e ingenierías, ofreciendo programas académicos de alta calidad en física, matemáticas, química, ingeniería y más.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717298042/resources/jbfy37uv95ufwmxqtz3a.jpg",
        website: "https://www.cucei.udg.mx/"
    },
    {
        name: "Centro Universitario de Arte, Arquitectura y Diseño (CUAAD)",
        geocode: [20.738857, -103.311808],
        popUp: "Centro Universitario de Arte, Arquitectura y Diseño (CUAAD)",
        description: "El CUAAD es el principal centro universitario en artes, arquitectura y diseño. Ofrece programas innovadores y cuenta con instalaciones de vanguardia.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717298769/resources/zftbxg14q7wasjcaorcp.jpg",
        website: "https://www.cuaad.udg.mx/"
    },
    {
        name: "Centro Universitario de Ciencias Biológicas y Agropecuarias (CUCBA)",
        geocode: [20.746758, -103.513747],
        popUp: "Centro Universitario de Ciencias Biológicas y Agropecuarias (CUCBA)",
        description: "El CUCBA se dedica a la formación y desarrollo en ciencias biológicas y agropecuarias, con investigaciones que contribuyen al desarrollo sostenible.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717295441/resources/e9zujzehbh1go1dso14t.jpg",
        website: "https://www.cucba.udg.mx/"
    },
    {
        name: "Centro Universitario de Ciencias Económico Administrativas (CUCEA)",
        geocode: [20.739602, -103.381788],
        popUp: "Centro Universitario de Ciencias Económico Administrativas (CUCEA)",
        description: "El CUCEA es reconocido por su excelencia en las ciencias económicas y administrativas, ofreciendo programas educativos que preparan a líderes en negocios y finanzas.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717299202/resources/ocsvevpup1d0wxr7awqg.jpg",
        website: "https://www.cucea.udg.mx/"
    },
    {
        name: "Centro Universitario de Ciencias de la Salud (CUCS)",
        geocode: [20.686401, -103.331540],
        popUp: "Centro Universitario de Ciencias de la Salud (CUCS)",
        description: "El CUCS es un centro de referencia en ciencias de la salud, con programas educativos en medicina, enfermería, odontología, y más.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717299812/resources/rvvrzuz4gie9jrevzfhb.jpg",
        website: "https://www.cucs.udg.mx/"
    },
    {
        name: "Centro Universitario de Ciencias Sociales y Humanidades (CUCSH)",
        geocode: [20.693131, -103.349932],
        popUp: "Centro Universitario de Ciencias Sociales y Humanidades (CUCSH)",
        description: "El CUCSH se especializa en las ciencias sociales y humanidades, ofreciendo programas en áreas como derecho, sociología, historia y más.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717299889/resources/cn2o7cfvlbv5mkzriznu.jpg",
        website: "https://www.cucsh.udg.mx/"
    },
    {
        name: "Centro Universitario de la Ciénega (CUCIÉNEGA)",
        geocode: [20.370837, -102.768468],
        popUp: "Centro Universitario de la Ciénega (CUCIÉNEGA)",
        description: "El CUCIÉNEGA ofrece programas educativos enfocados en el desarrollo regional, ciencias naturales y humanidades.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300203/resources/ipozv6we3jsdk2ibnuny.jpg",
        website: "https://www.cucienega.udg.mx/"
    },
    {
        name: "Centro Universitario de la Costa (CUCOSTA)",
        geocode: [20.706166, -105.220636],
        popUp: "Centro Universitario de la Costa (CUCOSTA)",
        description: "El CUCOSTA es un centro educativo ubicado en la costa del Pacífico, con programas en turismo, biología marina, y desarrollo sustentable.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300356/resources/n9wubz2sfkdndnt26t95.jpg",
        website: "https://www.cucosta.udg.mx/"
    }, 
    {
        name: "Centro Universitario de la Costa Sur (CUCSUR)",
        geocode: [19.774326, -104.357906],
        popUp: "Centro Universitario de la Costa Sur (CUCSUR)",
        description: "El CUCSUR se enfoca en la investigación y formación en áreas como la agroecología, gestión ambiental y desarrollo rural.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300468/resources/mltjqiw8o81ir40osdd5.jpg",
        website: "https://www.cucsur.udg.mx/"
    },
    {
        name: "Centro Universitario de los Lagos (CULAGOS)",
        geocode: [21.356874, -101.951558],
        popUp: "Centro Universitario de los Lagos (CULAGOS)",
        description: "El CULAGOS ofrece programas en ingeniería, ciencias sociales y humanidades, con un enfoque en el desarrollo local y regional.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300616/resources/k0lsuwdpfrohxebxyv3u.jpg",
        website: "https://www.lagos.udg.mx/"
    },
    {
        name: "Centro Universitario del Norte (CUNORTE)",
        geocode: [22.136822, -103.243725],
        popUp: "Centro Universitario del Norte (CUNORTE)",
        description: "El CUNORTE se dedica a la formación en áreas como la administración, educación y ciencias sociales, promoviendo el desarrollo del norte de Jalisco.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300743/resources/tgrouwdqe6qzrar3z6b7.jpg",
        website: "https://www.cunorte.udg.mx/"
    },
    {
        name: "Centro Universitario del Sur (CUSUR)",
        geocode: [19.723689, -103.462188],
        popUp: "Centro Universitario del Sur (CUSUR)",
        description: "El CUSUR ofrece programas académicos en áreas como la salud, ciencias sociales y económicas, con un fuerte compromiso con la investigación.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300822/resources/y8lwjucfjhki0zepgcnv.jpg",
        website: "https://www.cusur.udg.mx/"
    },
    {
        name: "Centro Universitario de Tonalá (CUTONALÁ)",
        geocode: [20.566657, -103.225693],
        popUp: "Centro Universitario de Tonalá (CUTONALÁ)",
        description: "El CUTONALÁ se enfoca en la formación profesional en áreas como la ingeniería, ciencias sociales y humanidades, con una visión integral del desarrollo.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717300953/resources/dihvulkmx5uvxfdngwyv.jpg",
        website: "https://www.cutonalá.udg.mx/"
    },
    {
        name: "Centro Universitario de los Valles (CUVALLES)",
        geocode: [20.534568, -103.967400],
        popUp: "Centro Universitario de los Valles (CUVALLES)",
        description: "El CUVALLES se dedica a la enseñanza en áreas como la administración, agronomía y ciencias sociales, apoyando el desarrollo de la región de los Valles.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717301045/resources/andg8kljwz0dwxlg7hcz.jpg",
        website: "https://www.cuvalles.udg.mx/"
    }
];
// Pruebas Properties
export const properties: MapCoordenada[] = [
    {
        geocode: [20.656114, -103.331217],
        popUp: "Propiedad Número 1"
    },
    {
        geocode: [20.651617, -103.324075],
        popUp: "Propiedad Número 2"
    },
    {
        geocode: [20.657007, -103.316989],
        popUp: "Propiedad Número 3"
    },
    {
        geocode: [20.659820, -103.328892],
        popUp: "Propiedad Número 4"
    },
    {
        geocode: [20.650588, -103.329476],
        popUp: "Propiedad Número 5"
    },
    {
        geocode: [20.653525, -103.319747],
        popUp: "Propiedad Número 6"
    }
];

// Properties - Home
export const propertiesHome = [
    {
        id: 1,
        title: "Casa en renta",
        description: "Hermosa casa en la playa con vista al mar.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1713591079/resources/gzd4czbpdy9ksy3tw8fv.jpg",
    },
    {
        id: 2,
        title: "Departamento en renta",
        description: "Departamento en el centro de la ciudad.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1713586413/resources/up7t5qoheawy9ejra0xy.jpg",
    },
    {
        id: 3,
        title: "Casa en la montaña",
        description: "Casa en la montaña con vista a la ciudad.",
        imageUrl: "https://res.cloudinary.com/dal8aivch/image/upload/v1717565639/resources/osuacongqcobj2hdx8oc.jpg",
    }
]