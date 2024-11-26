import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  cadastra(cliente: Cliente): Observable<any> {

    return this.http.post<Cliente>('http://localhost:8080/snf/cliente', cliente);
  }

  lista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/snf/cliente');
  }

  modifica(id: number, clienteModificado: Cliente): Observable<any> {
    return this.http.put(`http://localhost:8080/snf/cliente/${id}`, clienteModificado);
  }

  deleta(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/snf/cliente/${id}`);
  }
}
