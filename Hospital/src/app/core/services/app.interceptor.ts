import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';


@Injectable()
export class AppInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.getToken()
        let clon = req.clone({headers: req.headers.append("authorization", `bearer ${token}`)})

        return next.handle(clon)
    }

    constructor(private auth: AuthServiceService) {

    }

    
}