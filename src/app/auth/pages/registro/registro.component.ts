import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: ['',[Validators.required, this.vs.noPuedeSer]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, ]]
  }, {
    validators: [this.vs.camposIguales('password', 'password2')]
  })

    get emailErrorMsg(): string{
      
      const errors = this.miFormulario.get('email')?.errors;
      if(errors?.['required']){
        return 'Email obligatorio'
        
      }else if(errors?.['pattern']){
        return 'Formato de correo inválido'

      }else if(errors?.['emailTomado']){
        return 'Este email ya está en uso'

      }
   
      return ''
  }

  constructor( 
    private fb: FormBuilder,
    private vs: ValidatorService,
    private ev: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dandaly Morales', 
      email: 'test@test.com',
      username: 'sirdan',
      password: 123456,
      password2: 123456
    })
  }



  campoInvalido(campo: string){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){
    console.log (this.miFormulario.valid);
      this.miFormulario.markAllAsTouched();
  }



}
