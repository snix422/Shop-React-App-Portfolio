import Alert from '@mui/material/Alert';
import Heading from "../../Headings/Heading";
import styles from "./SignUpForm.module.css"
import { validateOptionsSignUp } from "../../../libs/ValidateOptionsSignUp";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignUpType } from "../../../types/SignUpFormType";
import React from 'react';

type SignUpProps = {
    onSubmit: (e?:React.BaseSyntheticEvent) => void,
    register: UseFormRegister<SignUpType>,
    errors: FieldErrors<SignUpType> | null,
    registrationError: string | null
}

const SignUpForm : React.FC<SignUpProps> = ({onSubmit,register,errors,registrationError}) => {
    return (
        <form data-testid="form" onSubmit={onSubmit} className={`${styles.container} min-h-[95vh] flex flex-col items-center gap-4`}>
            <Heading level={1} className="text-3xl text-white mt-8">Rejestracja</Heading>
            <div className="w-[50%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">E-mail</label>
            <input className={`${styles.input} w-2/4`} placeholder="E-mail" {...register("email",validateOptionsSignUp.email)}  />
            {errors?.email?.message ? <Alert severity="error">{errors.email.message}</Alert> : null}
            </div>
            <div className="w-[50%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">Hasło</label>
            <input type='password' className={`${styles.input} w-2/4`} placeholder="Hasło" {...register("password",validateOptionsSignUp.password)}  />
            {errors?.password?.message ? <Alert severity="error">{errors.password.message}</Alert> : null}
            </div>
            <div className="w-[50%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">Potwierdź hasło</label>
            <input type='password' className={`${styles.input} w-2/4`} placeholder="Potwierdź hasło" {...register("confirmPassword",validateOptionsSignUp.confirmPassword)}  />
            {errors?.confirmPassword?.message ? <Alert severity="error">{errors.confirmPassword.message}</Alert> : null}
            </div>
            <div className="w-[50%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">Imię</label>
            <input className={`${styles.input} w-2/4`} placeholder="Imie" {...register("name",validateOptionsSignUp.name)} />
            {errors?.name?.message ? <Alert severity="error">{errors.name.message}</Alert> : null}
            </div>
            <div className="w-[50%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">Nazwisko</label>
            <input className={`${styles.input} w-2/4`} placeholder="Nazwisko" {...register("surname",validateOptionsSignUp.surname)} />
            {errors?.surname?.message ? <Alert severity="error">{errors.surname.message}</Alert> : null}
            </div>
            <div className="w-[50%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">Nr.telefonu</label>
            <input className={`${styles.input} w-2/4`} placeholder="Nr. telefonu" {...register("phone",validateOptionsSignUp.phone)} />
            {errors?.phone?.message ? <Alert severity="error">{errors.phone.message}</Alert> : null}
            </div>
            <button type="submit" className={`${styles.button}`}>Zarejestruj się</button>
            {registrationError && registrationError.includes("auth/email-already-in-use") ? <Alert severity="error">E-mail jest już zajęty</Alert> : null}
            {registrationError && !registrationError.includes("auth/email-already-in-use") ? <Alert>{registrationError}</Alert> : null}
        </form>
    )

}

export default SignUpForm