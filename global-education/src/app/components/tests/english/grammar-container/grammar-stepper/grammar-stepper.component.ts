import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grammar-stepper',
  standalone: true,
  imports: [MatStepperModule, MatRadioModule, RouterLink, MatIconModule, FormsModule,MatProgressSpinnerModule],
  templateUrl: './grammar-stepper.component.html',
  styleUrl: './grammar-stepper.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }],
})
export class GrammarStepperComponent {
  respuestasUsuario: string[] = new Array(5).fill('');
  respuestasCorrectas:string[]= ['resp_2','resp_1','resp_3','resp_2','resp_1',]
  valorSpinner:number=0;

  constructor() { }
  onSubmit() {
    if(this.comprobarRespuestas()){
      console.log("Todas son correctas")
    }else{
      console.log("Has fallado en alguna")
    }

    this.animarProgressBar()
  }

  comprobarRespuestas():boolean{
    return this.respuestasUsuario.every((respuesta, posicion) => respuesta === this.respuestasCorrectas[posicion]);
  }

  numeroCorrectas():number{
    let numRespuestasCorrectas:number =0;
    this.respuestasUsuario.forEach((respuesta,posicion) =>{
      if(respuesta == this.respuestasCorrectas[posicion]){
        numRespuestasCorrectas++
      }
    })
    return numRespuestasCorrectas
  }

  porcentajeCorrectas(numeroCorrectas:number){
    return (numeroCorrectas/this.respuestasCorrectas.length)*100
  }

  animarProgressBar(){
    const porcentajeFinal = this.porcentajeCorrectas(this.numeroCorrectas());
    const incremento = porcentajeFinal / 100;
    const interval = setInterval(() => {
      if (this.valorSpinner < porcentajeFinal) {
        this.valorSpinner += incremento;
      } else {
        this.valorSpinner = porcentajeFinal;
        clearInterval(interval);
      }
    }, 10);
  }
}
