import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = "";
  peso = 0;
  altura = 0;
  imc = 0;
  composicion = "";
  validacion = "";
  mensaje = "";
  etiquetaPeso = "Peso"
  etiquetaAltura = "altura"

  eligeValidacion(): boolean {
    return(this.validacion !="")
  }

  verComposicion() {
    if (this.imc < 18.5) {
      return this.composicion = " tiene un peso inferior al normal";
    } else if (this.imc >= 18.5 && this.imc <= 24.9) {
      return this.composicion = "tiene un peso normal";
    } else if (this.imc >= 25 && this.imc <= 29.9) {
      return this.composicion = "tiene sobrepeso"
    } else if (this.imc >= 30) {
      return this.composicion = "ta gordisimo hijo de puta";
    } else {
      return "error";
    }
  }
  
  calcularImc() {
    if (this.validacion == "metrico") {
      this.imc = Number(this.peso) / Number(this.altura ** 2);
      return this.imc;
    } else if (this.validacion == "ingles") {
      this.imc = (Number(this.peso) / Number(this.altura ** 2)) * 703;
      return this.imc;
    } else {
      return "error";
    }
  }

  muestra() {
    if (this.eligeValidacion()) {
      return this.mensaje = `hola ${this.nombre}, su sistema de medida es
      ${this.validacion}, tiene de peso: ${this.peso} y de altura
      ${this.altura}, un IMC de ${this.calcularImc()} y por tanto usted  ${this.verComposicion()}`;
    }
    else {
      return this.mensaje = "elige una validacion"
    }
  }


}

