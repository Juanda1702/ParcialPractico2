import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaListarComponent } from './conferencia-listar/conferencia-listar.component';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciaListarComponent],
  declarations: [ConferenciaListarComponent, ConferenciaDetailComponent]
})
export class ConferenciaModule { }
