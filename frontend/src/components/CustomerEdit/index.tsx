import React, { useState } from "react";
import { Customer } from "../../interface/customer.interface";
import { requestUpdate } from "../../api";

const CustomerEdit = ({ customer }: { customer: Customer }) => {
  const [editedCustomer, setEditedCustomer] = useState<Customer>(customer);
  const id = customer.id;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setEditedCustomer({ ...editedCustomer, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestUpdate(`/customer/${id}`,editedCustomer)
      .then((res) => {
        console.log(res);
        setEditedCustomer(res);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedCustomer.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedCustomer.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={editedCustomer.cpf}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={editedCustomer.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={editedCustomer.status}
          onChange={handleInputChange}
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="aguardando_ativacao">Aguardando Ativação</option>
          <option value="desativado">Desativado</option>
        </select>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CustomerEdit;
