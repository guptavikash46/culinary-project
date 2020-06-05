import { HttpInterceptor } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class RequestInterceptor implements HttpInterceptor{
    
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        
        return next.handle(req).pipe(
            tap(event => {
                console.log(event);
            })
        );
    }
    
}