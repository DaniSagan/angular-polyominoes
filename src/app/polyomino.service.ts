import { Injectable } from '@angular/core';
import { Polyomino } from './model/polyomino'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolyominoType } from './model/polyomino-type';

@Injectable({
  providedIn: 'root'
})
export class PolyominoService {

  private _url: string = "./assets/data/polyomino-data.json";
  constructor(private http: HttpClient) { }

  getPolyominoes(): Observable<PolyominoType[]> {
    return this.http.get<PolyominoType[]>(this._url);
  }
}
