import { CreateCustomer } from "@/interface/customer.interface";
import { ChangeEvent, useEffect, useState, FormEvent } from "react";

type ReusableFormProps = {
  data?: CreateCustomer;
  handleSubmit: (customer: CreateCustomer) => void;
};

const emptyUserData: CreateCustomer = {
  name: "",
  cpf: "",
  email: "",
  phone: "",
  status: "ativo",
};

export default function ReusableForm({
  data,
  handleSubmit,
}: ReusableFormProps) {
  const [userData, setUserData] = useState<CreateCustomer>(emptyUserData);

  useEffect(() => {
    setUserData(data ?? emptyUserData);
  }, [data]);

  const handleDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>)=> {
    event?.preventDefault();
    handleSubmit(userData);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={userData.cpf}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={userData.status}
            onChange={handleDataChange}
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="aguardando_ativacao">Aguardando Ativação</option>
            <option value="desativado">Desativado</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
