import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInFormType } from "../../../types/SignInFormType";
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import SignInForm from "./SignInForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignInContainer = () => {
    const {register,handleSubmit, formState:{errors},reset} = useForm<SignInFormType>();
    const [loginError, setLoginError] = useState<string | null>(null);
    const navigate = useNavigate();

    const onSubmit : SubmitHandler<SignInFormType> = async (formData) => {
        try {
            await signInWithEmailAndPassword(auth,formData.email,formData.password);
            setLoginError(null)
            toast.success("Zalogowano pomyślnie")
            navigate("/")
            reset();
          } catch (error) {
            if(error instanceof Error){
                setLoginError(error.message);
            }
            else{
                setLoginError("Nieudało się zalogować. Nieoczekiwany błąd")
            }
          }

    }

    return(
        <main className="w-full h-[95vh] bg-blue-600">
            <SignInForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} loginError={loginError}  />
        </main>
    )
} 

export default SignInContainer