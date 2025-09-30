import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router"
import { UserService } from "../services/user";
import { UserAuthService } from "../services/user-auth";
import { firstValueFrom } from "rxjs";

export const authGuard: CanActivateFn = async (route, state) => {
    const _userService = inject(UserService);
    const _router = inject(Router);

    try {
        await firstValueFrom(_userService.validateUser());

        if(state.url === '/login') {
            return _router.navigate(['/products']);
        }

        return true;
    } catch (error) {
        return _router.navigate(['/login']);
    }

    return true;
};