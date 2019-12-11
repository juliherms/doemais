import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//habilita requisicoes
    FormsModule, //habilita formularios
    ReactiveFormsModule, //habilita formularios reativos
    AppRoutingModule
  ],
  providers: [
    HttpClient,//habilita requisicoes
    UsuarioService], //habilita integracao com servicos
  bootstrap: [AppComponent]
})
export class AppModule { }
