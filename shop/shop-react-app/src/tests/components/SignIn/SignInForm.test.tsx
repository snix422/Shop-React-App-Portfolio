import { render,screen,fireEvent } from "../../../libs/TestUtils";
import { describe,expect,it, vi } from "vitest";
import SignInForm from "../../../components/auth/signIn/SignInForm";
import React from "react";
import '@testing-library/jest-dom';


const mockOnSubmit = vi.fn();
const mockRegister = vi.fn();

describe("SignInForm",()=>{
    it("should render inputs email and password",()=>{
        render(<SignInForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} loginError={null}  />)
        expect(screen.getByTestId("email")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
    })
    it("should render button sign in ",()=>{
        render(<SignInForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} loginError={null}/>)
        expect(screen.getByText(/Zaloguj/i)).toBeInTheDocument();
    })
    it("should render error email and passowrd", ()=>{
        render(<SignInForm onSubmit={mockOnSubmit} register={mockRegister} loginError={null} errors={{email:{message:"Test error email",type:"email"},password:{message:"Test error password",type:"password"}}}/>)
        expect(screen.getByText(/Test error email/i)).toBeInTheDocument();
        expect(screen.getByText(/Test error password/i)).toBeInTheDocument();
    })
    it("should calls onSubmit when button is clicked",()=>{
        render(<SignInForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} loginError={null}/>)
        const btnLogIn = screen.getByTestId("submit-button");
        fireEvent.click(btnLogIn);
        expect(mockOnSubmit).toHaveBeenCalled();
    })
    it("shouldnt render errors when didnt have erros", () => {
        render(<SignInForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} loginError={null} />);
        expect(screen.queryByText(/Test error email/i)).toBeNull();
        expect(screen.queryByText(/Test error password/i)).toBeNull();
    });
    it("should update input fields when user types",()=>{
        render(<SignInForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} loginError={null} />)
        const emailInput = screen.getByTestId("email");
        const passwordInput = screen.getByTestId("password");
        fireEvent.change(emailInput,{target:{value:"test@gmail.com"}})
        fireEvent.change(passwordInput,{target:{value:"test123"}})
        expect(emailInput).toHaveValue("test@gmail.com");
        expect(passwordInput).toHaveValue("test123");
    })
})