import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css'
})
export class Ejercicio1 {

  nombre: string = '';
  N1: number = 0;
  N2: number = 0;
  N3: number = 0;
  N4: number = 0;
  suma: number = 0;
  promedio: number = 0;
  estadoAcademico: string = '';
  observacion: string = '';
  mostrarResultados: boolean = false;

  enviarFormulario() {
    this.suma = this.N1 + this.N2 + this.N3 + this.N4;
    this.promedio = parseFloat((this.suma / 4).toFixed(2));
    
    if (this.promedio >= 13) {
      this.estadoAcademico = 'USTED ESTA APROBADO';
    } else {
      this.estadoAcademico = 'USTED ESTA DESAPROBADO';
    }

    if (this.promedio >= 17) {
      this.observacion = 'Excelente, eres todo un Tigre';
    } else if (this.promedio >= 13 && this.promedio < 17) {
      this.observacion = 'Regular, puede mejorar';
    } else {
      this.observacion = 'En riesgo, el otro año sera joven';
    }

    this.mostrarResultados = true;
  }

  limpiarFormulario() {
    this.nombre = '';
    this.N1 = 0;
    this.N2 = 0;
    this.N3 = 0;
    this.N4 = 0;
    this.suma = 0;
    this.promedio = 0;
    this.estadoAcademico = '';
    this.observacion = '';
    this.mostrarResultados = false;
  }

}
