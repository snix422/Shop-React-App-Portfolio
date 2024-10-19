import { render,screen,fireEvent } from "../../../libs/TestUtils";
import { describe,expect,it, vi } from "vitest";
import { User } from "@firebase/auth";
import Menu from "../../../components/header/Menu";
import { logout } from "../../../libs/LogOut";
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

describe("Menu",()=>{
    it("should render links shop",()=>{
        render(<Menu isAuth={null} />)
        expect(screen.getByText(/Sklep/i)).toBeInTheDocument();
        
    })   
})