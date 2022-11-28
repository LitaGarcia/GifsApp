import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private api_key: string = 'qeaKU5vAqOakhKnfGYCsSSa7dyMxrViB';
  private _historial: string[] = [];
  public resultados: any[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  public buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0, 10); //limitar a 10 el historial
    console.log(this._historial);
    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=qeaKU5vAqOakhKnfGYCsSSa7dyMxrViB&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        this.resultados = resp.data;
      });
  }
}
