import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  get historial() {
    return [...this._historial];
  }
  public buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0, 10); //limitar a 10 el historial
    console.log(this._historial);
  }
}
