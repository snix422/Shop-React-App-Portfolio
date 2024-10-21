import { Alert } from "@mui/material"
import Heading from "../../Headings/Heading"
import styles from "./SignInForm.module.css"
import { ValidateOptionsSignIn } from "../../../libs/ValidateOptionsSignIn"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { SignInFormType } from "../../../types/SignInFormType"
import React from "react"

type SignInProps = {
    onSubmit: (e?:React.BaseSyntheticEvent) => void,
    register: UseFormRegister<SignInFormType>,
    errors: FieldErrors<SignInFormType> | null,
    loginError:string | null
}

const SignInForm : React.FC<SignInProps> = ({onSubmit,register,errors,loginError}) => {
    return(
        <form data-testid="form" onSubmit={onSubmit} className={`${styles.container} h-[95vh] flex flex-col justify-center items-center gap-4`}>
            <Heading level={1} className="text-3xl text-white">Logowanie</Heading>
            <div className="w-[100%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">E-mail</label>
            <input data-testid="email" className={`${styles.input} w-1/4 max-lg:w-2/4 max-md:w-3/4 `} type="text" {...register("email",ValidateOptionsSignIn.email)} />
            {errors?.email?.message ? <Alert severity="error">{errors?.email.message}</Alert>:null}
            </div>
            <div className="w-[100%] flex flex-col items-center gap-4">
            <label className="text-xl text-white">Hasło</label>
            <input data-testid="password" className={`${styles.input} w-1/4 max-lg:w-2/4 max-md:w-3/4`} type="password" {...register("password",ValidateOptionsSignIn.password)} />
            {errors?.password?.message ? <Alert severity="error">{errors?.password.message}</Alert>:null}
            </div>
            <button data-testid="submit-button" type="submit" className={`${styles.button}`}>Zaloguj się</button>
            {loginError && <Alert severity="error">Nieprawidłowe dane logowania</Alert>}
        </form>
    )
}

export default SignInForm