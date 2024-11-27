import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url: string = 'http://localhost:8080/snf/produto'

  constructor(private http: HttpClient) { }

  cadastra( produto: Produto ): Observable<any>{
    return this.http.post<Produto>(`${this.url}` ,produto);
  }
}
