import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user";
import { UserAuthService } from "../services/user-auth";
import { firstValueFrom } from "rxjs";

export const loginAuthGuard: CanActivateFn = async (route, state) => {
    const _userService = inject(UserService);
    const _userAuthService = inject(UserAuthService);
    const _router = inject(Router);

    const token = _userAuthService.getUserToken();
    if (!token) return true;

    try {
        await firstValueFrom(_userService.validateUser());

        return _router.navigate(['/products']);
    } catch {
        _userAuthService.clearUserToken();
        return true;
    }
};
