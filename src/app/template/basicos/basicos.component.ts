import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls["producto"]?.invalid
            && this.miFormulario?.controls["producto"]?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls["precio"]?.invalid
    && this.miFormulario?.controls["precio"]?.touched;
  }

  guardar(){
    // console.log(this.miFormulario)
    console.log('Posteo correcto')
    this.miFormulario.resetForm({
      precio: 0,
      stock: 0,
      producto: 'Algo'
    });
  }

}
