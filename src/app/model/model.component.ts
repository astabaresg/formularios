import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  /**
   * Propiedades que obtienen los inputs 
   * valid --- invalid
   * pristine (aun no se ha escrito) --- dirty(ya se escribio algo)
   * untouched --- touched
   */

  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl(''),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      dni: new FormControl(''),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      email: new FormControl('', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ])
    })
  }

  ngOnInit(): void {
    //Sirve para recuperar cuando el campo cambia de valor  
    const emailControl = this.formulario.controls.email;
    emailControl.valueChanges.subscribe(value=>{
      console.log(value);
    });
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

  edadValidator(formControl:any){
    const value = formControl.value;
    
    const max = 65;
    const min = 18;

    if(value >= min && value<=65){
      return null;
    }else{
      return { edadValidator: {max,min}};
    }
  }
}
