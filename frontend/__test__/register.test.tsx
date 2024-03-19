import React from "react";
import { render, screen } from "@testing-library/react";
import ReusableForm from "../src/components/ReusableForm";

describe("ReusableForm", () => {
  it("renders the form correctly", () => {
    render(<ReusableForm buttonType="Submit" handleSubmit={() => {}} />);

    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("CPF")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Telefone")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});
