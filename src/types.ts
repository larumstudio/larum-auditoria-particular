export interface AuditDataParticular {
  meta: {
    numeroInforme: string;
    fecha: string;
    tipo: string;
  };
  propietario: {
    nombre: string;
    email: string;
  };
  caso: {
    titulo: string;
    ubicacion: string;
    precio: number;
    precioFormato: string;
    superficie: string;
    terreno: string;
    dormitorios: number;
    banos: number;
    cocheras: number;
    descripcionPublicada: string;
  };
  situacion: {
    diasMercado: number;
    bajadaPrecio: number;
    precioOriginal: number;
    costeMensualOportunidad: number;
    costoMensualOportunidadFormato: string;
  };
  conLarum: {
    diasEstimados: number;
    diasAhorrados: number;
    estado: string;
  };
  financiero: {
    comisionAgencia: number;
    inversionLarum: number;
    ahorroNeto: number;
    costoOportunidadTotal: number;
  };
  ecosistema: Array<{
    numero: string;
    titulo: string;
    descripcion: string;
  }>;
  narrativaActual: {
    titulo: string;
    descripcion: string;
    problemas: string[];
  };
  imagenes: {
    hero: string;
    antes: string[];
    despues: string[];
  };
  cta: {
    titulo: string;
    descripcion: string;
    garantias: string[];
  };
}
