import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url: string = 'http://localhost:8080/snf/produto'

  constructor(private http: HttpClient) { }

  cadastra( produto: Produto ): Observable<any>{
    return this.http.post<Produto>(`${this.url}` ,produto);
  }

  lista(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  deleta(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  modifica(id: number, produtoModificado: Produto): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, produtoModificado);
  }
}
