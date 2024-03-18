import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ReusableForm from "../src/components/ReusableForm";
import userEvent from "@testing-library/user-event";

describe("ReusableForm", () => {
  it("renders the form correctly", () => {
    render(<ReusableForm buttonType="Submit" handleSubmit={() => {}} />);

    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("CPF")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Telefone")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  // it("submits form with valid data", async () => {
  //   const mockHandleSubmit = jest.fn();

  //   render(
  //     <ReusableForm buttonType="Submit" handleSubmit={mockHandleSubmit} />
  //   );

  //   // Fill out the form with valid data
  //   fireEvent.change(screen.getByPlaceholderText("Nome"), {
  //     target: { value: "John Doe" },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText("E-mail"), {
  //     target: { value: "john@example.com" },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText("CPF"), {
  //     target: { value: "123.456.789-00" },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText("Telefone"), {
  //     target: { value: "1234567890" },
  //   });
  //   fireEvent.change(screen.getByText("Status"), {
  //     target: { value: "ativo" },
  //   });

  //   fireEvent.click(screen.getByText("Submit"));

  //   await waitFor(() => {
  //     expect(mockHandleSubmit).toHaveBeenCalledWith({
  //       name: "John Doe",
  //       email: "john@example.com",
  //       cpf: "123.456.789-00",
  //       phone: "1234567890",
  //       status: "ativo",
  //     });
  //   });
  // });

it("displays error messages for invalid data", async () => {
  render(<ReusableForm buttonType="Submit" handleSubmit={() => {}} />);

  userEvent.type(screen.getByPlaceholderText("Nome"), "J");
  userEvent.type(screen.getByPlaceholderText("E-mail"), "john@examplecom");
  userEvent.type(screen.getByPlaceholderText("CPF"), "123.456.789");
  userEvent.type(screen.getByPlaceholderText("Telefone"), "123");
  userEvent.selectOptions(
    screen.getByRole("combobox", { name: /Status/i }),
    "ativo"
  ); // Seleciona uma das opções reais disponíveis

  // Submit form
  userEvent.click(screen.getByText("Submit"));

  // Verify that error messages are displayed for the invalid input
  await waitFor(() => {
    expect(
      screen.queryByText("O nome deve ter pelo menos 3 caracteres")
    ).toBeInTheDocument();
    expect(screen.queryByText("E-mail inválido")).toBeInTheDocument();
    expect(screen.queryByText("CPF inválido")).toBeInTheDocument();
    expect(
      screen.queryByText("Número de telefone inválido")
    ).toBeInTheDocument();
    expect(screen.queryByText("Escolha um status")).toBeInTheDocument();
  });
});


});
