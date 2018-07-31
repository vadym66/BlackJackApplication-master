import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Router } from "@angular/router";

@Injectable()
export class RoundGuardService implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert('invalid Id');
            this.router.navigate(['start'])
            return false;
        };
        return true;
    }
}