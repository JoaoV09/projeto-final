import { environment } from './../../../environments/environment';
import { Component, inject, OnInit } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signInWithRedirect, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public env = environment;
  private auth: Auth = inject(Auth);
  //authState$ = authState(this.auth);
  // authStateSubscription: Subscription;


  constructor() {
    // this.authStateSubscription = this.authState$.subscribe((aUser: User | null) => {
    //   if (aUser !== null) location.href = '/home';
    // })
   }

  ngOnInit() {
  }

  login() {
    //abre um popups para fazer o login
    signInWithPopup(this.auth, new GoogleAuthProvider())
    //redireciona para uma pagina de login
    //signInWithRedirect(this.auth, new GoogleAuthProvider())
    .then((a) => {
      console.log(a);
      location.href = '/home';
    })
    .catch((error) => {
      console.error(error.code, error.message, error.customData.email);
      alert("Oooops! Ocorreram erros ao fazer login.");
    })

  }
}
