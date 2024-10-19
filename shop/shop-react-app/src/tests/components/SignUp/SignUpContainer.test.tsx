import { describe,expect,it } from "vitest";
import { fireEvent, render,screen, waitFor } from "@testing-library/react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import SignInContainer from "../../../components/auth/signIn/SignInContainer";
import React from "react";
import '@testing-library/jest-dom';
import SignUpContainer from "../../../components/auth/signUp/SignUpContainer";

describe("SignUpContainer", () => {
    it("should render form",()=>{
        render(<SignUpContainer />)
        expect(screen.getByTestId("form")).toBeInTheDocument();
    })

})