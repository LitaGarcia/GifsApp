import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}
  get historial() {
    return this.gifsService.historial;
  }
  buscar(item: string) {
    this.gifsService.buscarGifs(item);
  }
  cleanData() {
    this.gifsService.cleanData();
  }
  public searchRandom() {
    this.gifsService.searchRandom();
    
  }
}
