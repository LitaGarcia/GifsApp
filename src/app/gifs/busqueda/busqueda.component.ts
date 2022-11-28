import { Component, ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}
  public buscar() {
    const valueInput = this.txtBuscar.nativeElement.value;
    if (valueInput.trim().length === 0) {
      return;
    } //no add espacios blancos 
    this.gifsService.buscarGifs(valueInput);
    this.txtBuscar.nativeElement.value = '';
  }
}
