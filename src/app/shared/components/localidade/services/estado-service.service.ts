import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UF } from '../interfaces/UF';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private ufs!: UF[];

  constructor(private http: HttpClient) { }

  listaUF(): Observable<UF[]> {
    return this.http
      .get<UF[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
}


