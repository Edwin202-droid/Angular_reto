import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public loginService: LoginService,
              public router: Router) {}

  canActivate() {
    
    if(this.loginService.estaLogueado()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}
