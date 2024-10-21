import {useForm, SubmitHandler} from 'react-hook-form'
import { SignUpType } from '../../../types/SignUpFormType';
import { useState } from 'react';
import { auth} from '../../../firebase/firebase';
import { createUserWithEmailAndPassword, getIdToken } from '@firebase/auth';
import SignUpForm from './SignUpForm';
import React from 'react';

const SignUpContainer = () => {
    const {register,handleSubmit, formState:{errors},reset} = useForm<SignUpType>();
    const [registrationError, setRegistrationError] = useState<string | null>(null);

    const onSubmit : SubmitHandler<SignUpType> = async (formData) => {
        try {
            console.log("test rejestracja")
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const token = await getIdToken(userCredential.user);
            reset();
          } catch (error) {
            if(error instanceof Error){
                setRegistrationError(error.message);
            }
            else{
                setRegistrationError("Nieudało się zarejestrować. Nieoczekiwany błąd")
            }
          }

    }
    return(
        <main>
            <SignUpForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} registrationError={registrationError} />
        </main>

    )
}

export default SignUpContainer

