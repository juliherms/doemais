import { UsuarioService } from './services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import toastr from "toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doemais';

  cadastroForm: FormGroup;


  constructor(private fb: FormBuilder,
              private usuarioService:UsuarioService) { }


  ngOnInit() {

    //Configura o formulario de cadastro
    this.cadastroForm = this.fb.group({
      login: ['',Validators.required],
      nome: ['',Validators.required],
      email:['',Validators.required],
      senha: ['',Validators.required],
      perfis: ['',Validators.required],
      dataCadastro : ['',Validators.required],
    });



    //captura a data atual.    
    let d = new Date();
    let dataCadastro = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);

    //seta a data de cadastro
    this.cadastroForm.controls['dataCadastro'].patchValue(dataCadastro);
    //seta o perfil cadastrado
    this.cadastroForm.controls['perfis'].patchValue('2'); //doador/voluntario
  }

  //Metodo resonsavel por salvar os dados do formulario
  salvar(){

    let usuario = this.cadastroForm.value;
    this.usuarioService.salvar(usuario).subscribe(res => {
    //exibe uma mensagem na tela
    toastr.success("Solicitação processada com sucesso!");
    
    }, err => {
      toastr.error("Ocorreu um erro ao processar a sua solicitação!");
      
    });
  }
}
