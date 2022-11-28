import { Component, ElementRef, ViewChild } from '@angular/core';
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
    this.gifsService.buscarGifs(valueInput);
    this.txtBuscar.nativeElement.value = '';
  }
}
