import { UsuarioService } from './services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    //seta a data de cadastro
    this.cadastroForm.controls['dataCadastro'].patchValue('20191116');
    //seta o perfil cadastrado
    this.cadastroForm.controls['perfis'].patchValue('2'); //doador/voluntario
  }

  //Metodo resonsavel por salvar os dados do formulario
  salvar(){

    let usuario = this.cadastroForm.value;
    this.usuarioService.salvar(usuario).subscribe(res => {
      console.log("sucesso");
    
    }, err => {
      console.log("erro->" + err);
    });
  }
}
