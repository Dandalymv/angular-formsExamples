import { Directive, Input } from "@angular/core";
import { FormControl, NgModel, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validators{

    @Input() minimo!: number;

    constructor(){
        
    }

    validate(constrol: FormControl){
        const inputValue = constrol.value;
        return (inputValue < this.minimo) 
            ? {'customMin': true}
            : null;
    }

}