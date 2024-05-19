import { Component } from '@angular/core';
import { login } from '../Repense/login';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  logi:login= new login();

constructor(private auths:AuthService,private router:Router){}

goToEtudiant( id:number){
  this.router.navigate(['etudiants/',id])
}
 id:number=0;
userLogin() {
  console.log(this.logi);
  this.auths.loginUser(this.logi).subscribe(
    data => {
      console.log(data);
      this.goToEtudiant(data) ;
      this.id=data;
      console.log(this.id);
      alert("Authentification effectuée avec succés");

       },
    error => {
      alert("Invalid Email or password");
    }
  );
}
getUser(){return this.id;}
ngOnInit():void{}
}


