import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private api_key: string = 'qeaKU5vAqOakhKnfGYCsSSa7dyMxrViB';
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

    fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=qeaKU5vAqOakhKnfGYCsSSa7dyMxrViB&q=dragon ball z&limit=10'
    ).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
      });
    });
  }
}
