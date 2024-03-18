import validateCPF from "./cpfValidate";

export const validCPF = (cpf: string): boolean => {
  return validateCPF(cpf);
};

export const validateName = (name: string): boolean => {
  return name.length >= 3;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\d{2}\s?\d{4,5}\s?\d{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};
