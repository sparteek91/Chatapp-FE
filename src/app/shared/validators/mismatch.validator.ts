import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('cpassword')?.value;
    console.log(pass, confirmPass);
    return pass === confirmPass ? null : { mismatch: true }
}