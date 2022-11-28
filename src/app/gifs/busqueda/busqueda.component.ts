import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  public buscar() {
    const valueInput = this.txtBuscar.nativeElement.value;
    console.log(valueInput);
    this.txtBuscar.nativeElement.value = '';
  }
}
