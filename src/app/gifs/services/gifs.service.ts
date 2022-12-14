import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';
import { SearchGifsResponse } from '../interfaces/gifs.interfaces';
import { SearchGifsRandom } from '../interfaces/gifsRandom.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'qeaKU5vAqOakhKnfGYCsSSa7dyMxrViB';
  public Url: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  public cleanData() {
    this._historial = [];
    this.resultados = [];
  }

  public searchRandom() {
    const params = new HttpParams().set('apiKey', this.apiKey);
    this.http
      .get<SearchGifsRandom>(`${this.Url}/random`, { params: params })
      .subscribe((resp: SearchGifsRandom) => {
        this.resultados = [];
        this.resultados.push(resp.data);
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }

  public buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    this._historial = this._historial.splice(0, 10);
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    this.http
      .get<SearchGifsResponse>(`${this.Url}/search`, { params: params })
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
