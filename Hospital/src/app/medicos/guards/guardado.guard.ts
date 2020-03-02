import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';


export interface ICanDeactivate {
	guardado: () => boolean
}

@Injectable({
	providedIn: 'root'
})
export class GuardadoGuard implements CanDeactivate<ICanDeactivate>{
    canDeactivate(component: ICanDeactivate) : boolean {
        const estado : boolean = component.guardado()

        if(estado){
            if(confirm("Hay datos no guardados, ¿Desea guardarlos?")){
                return false
            }else{
                return true
            }
        }
        return true
    }
}

