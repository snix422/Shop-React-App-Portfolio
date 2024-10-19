import { describe,expect,it } from "vitest";
import { render,screen,waitFor,fireEvent } from "../../../libs/TestUtils";
import { signInWithEmailAndPassword } from "@firebase/auth";
import SignInContainer from "../../../components/auth/signIn/SignInContainer";
import React from "react";
import '@testing-library/jest-dom';

describe("SignInContainer", () => {
    it("should render form",()=>{
        render(<SignInContainer />)

        expect(screen.getByTestId("form")).toBeInTheDocument();
    }) 
})