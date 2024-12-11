import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/pages/nota/interfaces/Item';
import { NotaForm } from 'src/app/pages/nota/interfaces/NotaForm';
import { Nota } from '../model/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {


  private urlItem: string = 'http://localhost:8080/snf/item'
  private urlNota: string = 'http://localhost:8080/snf/nota'
  constructor(private http: HttpClient) { }

  cadastraItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.urlItem, item);
  }

  cadastraNota(nota: NotaForm): Observable<any> {
    return this.http.post<any>(this.urlNota, nota);
  }

  removeNota(id: number): Observable<void> {
    return this.http.delete<void>(this.urlNota + `/${id}`);
  }

  lista(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.urlNota);
  }
}
