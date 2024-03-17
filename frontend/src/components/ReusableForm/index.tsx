import { CreateCustomer } from "@/interface/customer.interface";
import { KeyboardEvent, ClipboardEvent } from "react";
import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import {
  validCPF,
  validateName,
  validateEmail,
  validatePhone,
} from "../../utils/validations";
import useFormErrors from "@/utils/useFormErrors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

type ReusableFormProps = {
  data?: CreateCustomer;
  handleSubmit: (customer: CreateCustomer) => void;
};

const emptyUserData: CreateCustomer = {
  name: "",
  cpf: "",
  email: "",
  phone: "",
  status: undefined,
};

export default function ReusableForm({
  data,
  handleSubmit,
}: ReusableFormProps) {
  const router = useRouter();
  const notify = () => toast("Wow so easy !");
  const { errors, setError, clearError } = useFormErrors({});
  const [userData, setUserData] = useState<CreateCustomer>(emptyUserData);
  const [userCpf, setUserCpf] = useState<string>(userData.cpf);

  useEffect(() => {
    setUserData(data ?? emptyUserData);
    setUserCpf(userData.cpf);
  }, [data]);

  const handleDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.key;
    if (!/^\d$/.test(input) && input !== " " && input !== "Backspace") {
      event.preventDefault();
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData?.getData("text");
    if (!/^\d+$/.test(pastedText?.replace(/\s/g, ""))) {
      event.preventDefault();
    }
  };

  const handleCpfChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserCpf((prevUserCpf) => {
      const updatedCpf = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setUserData({ ...userData, [name]: updatedCpf });
      return updatedCpf;
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const { cpf, name, email, phone } = userData;

    const validateAndHandleSubmit = async () => {
      const cpfError = !validCPF(cpf) ? "CPF inválido" : null;
      const nameError = !validateName(name)
        ? "O nome deve ter pelo menos 3 caracteres"
        : null;
      const emailError = !validateEmail(email) ? "E-mail inválido" : null;
      const phoneError = !validatePhone(phone)
        ? "Número de telefone inválido"
        : null;
      const statusError = userData.status === undefined
        ? "Escolha um status"
        : null;

      setError("cpf", cpfError as string);
      setError("name", nameError as string);
      setError("email", emailError as string);
      setError("phone", phoneError as string);
      setError("status", statusError as string);

      const hasErrors =
        !!cpfError || !!nameError || !!emailError || !!phoneError || !!statusError;
      if (!hasErrors) {
        handleSubmit(userData);
        setUserData(emptyUserData);
        setUserCpf("");
      } else {
        notify;
        console.log("não salvo");
      }
    };

    await validateAndHandleSubmit();
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="Nome"
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleDataChange}
            required
          />
          {errors.name && <h6>{errors.name}</h6>}
        </div>
        <div>
          <input
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleDataChange}
            required
          />
          {errors.email && <h6>{errors.email}</h6>}
        </div>
        <div>
          <input
            placeholder="CPF"
            type="text"
            id="cpf"
            name="cpf"
            value={userCpf}
            onChange={handleCpfChange}
            maxLength={14}
            required
          />
          {errors.cpf && <h6>{errors.cpf}</h6>}
        </div>
        <div>
          <input
            placeholder="Telefone"
            type="text"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleDataChange}
            onKeyDown={handleKeyPress}
            onPaste={handlePaste}
            required
          />
          {errors.phone && <h6>{errors.phone}</h6>}
        </div>
        <div>
          <select
            id="status"
            name="status"
            value={userData.status}
            onChange={handleDataChange}
            required
          >
            <option  selected={userData.status ? false : true} hidden>
              Status
            </option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="aguardando_ativacao">Aguardando Ativação</option>
            <option value="desativado">Desativado</option>
          </select>
        </div>
        {errors.status && <h6>{errors.status}</h6>}
        <button type="submit">Salvar</button>
      </form>
      <h4 onClick={() => router.push("/")}>Voltar</h4>
    </div>
  );
}
