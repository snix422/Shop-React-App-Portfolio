import { render,screen } from "../../../libs/TestUtils";
import { describe,expect,it } from "vitest";
import Heading from "../../../components/Headings/Heading";
import React from "react";
import '@testing-library/jest-dom';

describe("Heading", ()=>{
    it("should render heading with text",()=>{
        render(<Heading level={1} className="text-base">Test</Heading>)
        expect(screen.getByText(/Test/i)).toBeInTheDocument();
    })
})