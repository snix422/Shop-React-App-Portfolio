import { render,screen } from "../../../libs/TestUtils";
import { describe,expect,it, vi } from "vitest";
import { User } from "@firebase/auth";
import { logout } from "../../../libs/LogOut";
import BurgerMenu from "../../../components/burger-menu-aside/BurgerMenu";
import React from "react";
import '@testing-library/jest-dom';

const mockUser: Partial<User> = {
    uid: "12345",
    displayName: "John Doe",
    email: "john@example.com",
    getIdTokenResult: vi.fn(() => 
      Promise.resolve({
        token: "mocked-token",
        expirationTime: "mocked-expiration-time",
        authTime: "mocked-auth-time",
        issuedAtTime: "mocked-issued-at-time",
        signInProvider: "mocked-sign-in-provider",
        signInSecondFactor: null,
        claims: {}
      })
    ),
    providerData: [
      {
        providerId: "firebase",
        uid: "12345",
        displayName: "John Doe",
        email: "john@example.com",
        phoneNumber: null,
        photoURL: null
      }
    ]
  };

  vi.mock('../../libs/LogOut', () => ({
    logout: vi.fn(),
  }));

  const mockSetOpen = vi.fn();

describe("BurgerMenu",()=>{
    it("should render links shop in component",()=>{
        render(<BurgerMenu setOpen={mockSetOpen} user={null} />)
        expect(screen.getByText(/Sklep/i)).toBeInTheDocument();
    })
    /*it("should render links register and login when user is not logged",()=>{
        render(<BurgerMenu setOpen={mockSetOpen} user={null} />)
        expect(screen.getByText(/Rejestracja/i)).toBeInTheDocument();
        expect(screen.getByText(/Logowanie/i)).toBeInTheDocument();
    })
    it("should render button logout when user is logged",()=>{
        render(<BurgerMenu setOpen={mockSetOpen} user={mockUser as User}/>)
        expect(screen.getByText(/Wyloguj/i)).toBeInTheDocument();
    })
    it("calls logout when button is clicked", ()=>{
        render(<BurgerMenu setOpen={mockSetOpen} user={mockUser as User} />)
        const btnLogout = screen.getByText(/Wyloguj/i);
        fireEvent.click(btnLogout);
        expect(logout).toHaveBeenCalledTimes(1);
    })*/

})