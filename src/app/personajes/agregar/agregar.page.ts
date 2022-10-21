import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiPersonajeService } from '../servicio/api-personaje.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  public formulario: FormGroup;
  public pelicula: Array<string> = [
    'Star Wars',
    'Harry Potter',
    'Como entrenar a tu dragon',
    'El señor de los anillos',

  ];
  constructor(
    private fb: FormBuilder,
    private apipersonaje: ApiPersonajeService,
  ) {
    this.crearfomulario();
   }

  ngOnInit() {
  }
public crearfomulario(){
this.formulario = this.fb.group({
  nombre: new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  foto: new FormControl ('',Validators.required),
  pelicula: ['',Validators.required],
  genero: ['',Validators.required],
  estado: ['',Validators.required],
})
}
}
