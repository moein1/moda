import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from 'app/services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router : Router, private authServie : AuthService) {}

    canActivate = () => {
        if (this.authServie.loggedIn()) {
            return true;
        } else {
            this
                .router
                .navigate(['/login']);
            return false;
        }
    }
}