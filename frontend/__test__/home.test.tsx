import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomerList from "../src/components/CustomerList";
import { requestData } from "../src/api";
import mockRouter from "next-router-mock";
import MeuComponente from "../src/app/Home";

jest.mock("../src/api", () => ({
  requestData: jest.fn((url) => {
    console.log("Chamada requestData com URL:", url);
    return Promise.resolve([]);
  }),
}));

// const push = jest.fn();

const mockCustomerList = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    cpf: "123.456.789-00",
    phone: "1234567890",
    status: "ativo",
  },
];

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));


describe("CustomerList", () => {
  it('deve renderizar "Loading..." quando não houver clientes', async () => {
    (requestData as jest.Mock).mockResolvedValueOnce([]);

    const { getByText } = render(<CustomerList />);
    console.log(getByText("Loading..."));

    expect(getByText("Loading...")).toBeInTheDocument();
    expect(requestData).toHaveBeenCalledWith("/customer");
  });

  it("deve renderizar a lista de clientes corretamente", async () => {
    (requestData as jest.Mock).mockResolvedValueOnce(mockCustomerList);

    const { getByText } = render(<CustomerList />);

    await waitFor(() => {
      expect(getByText("John Doe")).toBeInTheDocument();
    });

    expect(getByText("Exibindo 1 clientes")).toBeInTheDocument();
    expect(requestData).toHaveBeenCalledWith("/customer");
  });

  // it('deve navegar para a página de edição quando o botão "Editar" é clicado', async () => {
  //   (requestData as jest.Mock).mockResolvedValueOnce(mockCustomerList);

  //   const { getByTestId, getByText } = render(<MeuComponente />);

  //   await waitFor(() => {
  //     expect(getByText("John Doe")).toBeInTheDocument();
  //   });

  //   const rota = getByTestId("edit-button-1");
  //   await waitFor(async () => {
  //     await userEvent.click(rota);
  //   });
  //   console.log({ windowurl: window.location.pathname });

  //   expect(push).toHaveBeenCalled();
  // });
});
