import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvmartinArcosService {

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    console.log('Test cargando Json');
  }

  private CargarProfesional() {
    this.http.get('https://cvmartinarcos-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
      });
  }

  private CargarEducacion() {
    this.http.get('https://cvmartinarcos-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any[]) => {
        this.educacion = resp;
        console.log(resp);
      });
  }

  private CargarTestimonio() {
    this.http.get('https://cvmartinarcos-default-rtdb.firebaseio.com/Testimonio.json')
      .subscribe((resp: any[]) => {
        this.testimonio = resp;
        console.log(resp);
      });
  }

  private CargarExperiencia() {
    this.http.get('https://cvmartinarcos-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any[]) => {
        this.experiencia = resp;
        console.log(resp);
      });
  }

}
