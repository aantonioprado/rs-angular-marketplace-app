import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user";
import { firstValueFrom } from "rxjs";

export const authGuard: CanActivateFn = async (route, state) => {
    const _userService = inject(UserService);
    const _router = inject(Router);

    try {
        await firstValueFrom(_userService.validateUser());

        return true;
    } catch (error) {
        return _router.navigate(['/login']);
    }
};