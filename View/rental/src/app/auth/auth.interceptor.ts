import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../_service/auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private Authservice: AuthService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone())
        }

        const token = this.Authservice.getToken();
        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if (err.status === 401) {
                        this.router.navigate(['login'])
                    } else if (err.status === 403) {
                        this.router.navigate(['forbidden'])
                    }
                    return throwError("Some Thing is Wrong");
                }
            )
        )
    }

    private addToken(req: HttpRequest<any>, token: any) {
        return req.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }



}