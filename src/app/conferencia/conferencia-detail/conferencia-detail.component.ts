import { Component, Input, OnInit } from '@angular/core';
import { ConferenciaDetail } from '../conferencia-detail';
import { ConferenciaService } from '../conferencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  conferenciaId!: string;
  @Input() conferenciaDetail!: ConferenciaDetail;

  constructor(private route: ActivatedRoute,
    private conferenciaService: ConferenciaService
    ) { }

  getConferencia(){
    this.conferenciaService.getConferencia(this.conferenciaId).subscribe(conferencia=>{
      this.conferenciaDetail = conferencia;
    })
  }
  ngOnInit() {
    if(this.conferenciaDetail === undefined){
      this.conferenciaId = this.route.snapshot.paramMap.get('id')!
      if (this.conferenciaId) {
        this.getConferencia();
      }

    }
  }

}
