// import{Injectable} from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { AuthenticationService } from './services/User/authentication.service';
// import{Observable} from 'rxjs/operators'

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor{
//     constructor(private authenticationService:AuthenticationService){}
//     intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(catchError(err => {
//             if (err.status === 401) {
//                 // auto logout if 401 response returned from api
//                 this.authenticationService.logout();
//                 location.reload(true);
// }