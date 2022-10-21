export interface Personaje {
  nombre: string,
  foto:string,
  pelicula:Array<string>,
  genero: 'masculino'|'femenino',
  estado:string

}

export interface personajeconID extends Personaje {
  id:string
}

export interface heroeparcial extends Partial<Personaje> {

}
