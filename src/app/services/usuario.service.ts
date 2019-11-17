import { DOE_MAIS_API } from './doemaisapi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Classe responsavel por acessar os servicos de usuario
 */
@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {

    constructor(private http: HttpClient) {}

    //Metodo responsavel por salvar um usuario
    salvar(usuario){
        return this.http.post(`${DOE_MAIS_API}/usuarios`,usuario);
    }
}

