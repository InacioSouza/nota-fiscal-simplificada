import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private urlItem: string = 'http://localhost:8080/snf/item'
  private urlNota: string = 'http://localhost:8080/snf/nota'
  constructor(private http: HttpClient) { }

  cadastraItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.urlItem, item);
  }
}
