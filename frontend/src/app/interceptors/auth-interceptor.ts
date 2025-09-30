import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { UserAuthService } from "../services/user-auth";
import { inject } from "@angular/core";

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const _userAuthService = inject(UserAuthService);
    const token = _userAuthService.getUserToken();

    if (token) {
        const newReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })

        return next(newReq);
    }

    return next(req);
}