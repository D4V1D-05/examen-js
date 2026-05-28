import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css',
})
export class Ejercicio2 {

  nombre: string = '';
  correo: string = '';
  peso: number = 0;
  altura: number = 0;
  imc: number | null= null;
  categoria: string = '';
  mostrarResultados: boolean = false;

  enviarFormulario() {
    if (this.altura > 0) {
      this.imc = parseFloat((this.peso / (this.altura * this.altura)).toFixed(2));
      
      if (this.imc < 18.5) {
        this.categoria = 'Bajo peso';
      } else if (this.imc >= 18.5 && this.imc <= 24.99) {
        this.categoria = 'Peso saludable';
      } else if (this.imc >= 25.0 && this.imc <= 29.99) {
        this.categoria = 'Sobrepeso';
      } else {
        this.categoria = 'Obesidad';
      }
      
      this.mostrarResultados = true;
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.correo = '';
    this.peso = 0;
    this.altura = 0;
    this.imc = null;
    this.categoria = '';
    this.mostrarResultados = false;
  }

}
