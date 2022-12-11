import { Component, OnInit } from '@angular/core';
import { CvmartinArcosService } from '../services/cvmartinArcos.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvmartinArcosService) { }

  ngOnInit(): void {
  }

}
