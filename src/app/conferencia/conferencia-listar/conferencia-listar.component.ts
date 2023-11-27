import { Component, OnInit } from '@angular/core';
import { ConferenciaService } from '../conferencia.service';
import { ConferenciaDetail } from '../conferencia-detail';

@Component({
  selector: 'app-conferencia-listar',
  templateUrl: './conferencia-listar.component.html',
  styleUrls: ['./conferencia-listar.component.css']
})
export class ConferenciaListarComponent implements OnInit {
  selectedConferencia!: ConferenciaDetail;
  selected: Boolean = false;
  conferencias: Array<ConferenciaDetail> = [];
  upcomingConfrences: string = '';
  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias(): void {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
    });
  }

  onSelected(conferencia: ConferenciaDetail) {
    if (conferencia != this.selectedConferencia ){
      this.selected = true;
      this.selectedConferencia = conferencia;
    }else{
      if(this.selected){
        this.selected = false;
        let nulle!: ConferenciaDetail
        this.selectedConferencia! = nulle;
      }else{
        this.selected = true;
        this.selectedConferencia = conferencia;
      }
    }
  }

  ngOnInit() {
    this.getConferencias();
  }

}
