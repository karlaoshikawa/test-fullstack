export interface Customer {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: ('ativo' | 'inativo' | 'aguardando_ativacao' | 'desativado') | undefined; 
}

export type CreateCustomer = Omit<Customer, "id">;


