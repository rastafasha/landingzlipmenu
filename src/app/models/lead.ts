export class Lead {
    constructor(
        public _id: string,
        public nombreDueno: string,
        public email: string,
        public telefono: string,
        public nombreLocal: string,
        public pais: string,
        public categoriaTexto: string,
        public slugDeseado: string,
        public status: 'pendiente' | 'aprobado' | 'rechazado',
        public createdAt: Date,
        public updatedAt: Date,

    ) { }
}
