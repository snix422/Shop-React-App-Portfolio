import { fireEvent, render,screen } from "@testing-library/react";
import { describe,expect,it, vi } from "vitest";
import React from "react";
import '@testing-library/jest-dom';
import SignUpForm from "../../../components/auth/signUp/SignUpForm";

const mockOnSubmit = vi.fn();
const mockRegister = vi.fn();

describe("SignUpForm",()=>{
    it("should render inputs in component",()=>{
        const {container} = render(<SignUpForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} registrationError={null}  />)
        const inputElements = container.querySelectorAll("input")
        expect(inputElements).toHaveLength(6);
    })
    it("should render button sign in ",()=>{
        render(<SignUpForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} registrationError={null}/>)
        expect(screen.getByText(/Zarejestruj/i)).toBeInTheDocument();
    })
    it("should render error email and passowrd", ()=>{
        render(<SignUpForm onSubmit={mockOnSubmit} register={mockRegister} errors={{email:{message:"Test error email",type:"email"},password:{message:"Test error password",type:"password"}}} registrationError={null}/>)
        expect(screen.getByText(/Test error email/i)).toBeInTheDocument();
        expect(screen.getByText(/Test error password/i)).toBeInTheDocument();
    })
    it("should calls onSubmit when button is clicked",()=>{
        render(<SignUpForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} registrationError={null}/>)
        const btnRegister = screen.getByRole("button");
        fireEvent.click(btnRegister);
        expect(mockOnSubmit).toHaveBeenCalled();
    })
    it("shouldnt render errors when didnt have erros", () => {
        render(<SignUpForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} registrationError={null} />);
        expect(screen.queryByText(/Test error email/i)).toBeNull();
        expect(screen.queryByText(/Test error password/i)).toBeNull();
    });
    it("should update input fields when user types",()=>{
        render(<SignUpForm onSubmit={mockOnSubmit} register={mockRegister} errors={null} registrationError={null} />)
        const emailInput = screen.getByPlaceholderText(/E-mail/i);
        const passwordInput = screen.getByPlaceholderText("Hasło");
        fireEvent.change(emailInput,{target:{value:"test@gmail.com"}})
        fireEvent.change(passwordInput,{target:{value:"test123"}})
        expect(emailInput).toHaveValue("test@gmail.com");
        expect(passwordInput).toHaveValue("test123");
    })
})