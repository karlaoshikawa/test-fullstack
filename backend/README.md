# Teste Fullstack UOL - Backend

Este projeto tem como objetivo atender aos requisitos especificados para a parte de backend do Teste Fullstack UOL. Ele fornece uma API com endpoints para gerenciar dados de clientes de forma eficaz.

### Requisitos

O backend deve fornecer as seguintes funcionalidades:

1. **Listar Clientes:** Obter uma lista de clientes cadastrados.
2. **Cadastrar Cliente:** Adicionar um novo cliente com informações válidas.
3. **Atualizar Cliente:** Atualizar informações de um cliente existente.
4. **Persistência:** Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.

### Endpoints

Os seguintes endpoints estão disponíveis:

- **GET /clients**: Recupera uma lista de todos os clientes registrados.
- **POST /clients**: Registra um novo cliente. Requer informações válidas do cliente no corpo da solicitação.
- **Pach /clients/:id**: Atualiza informações para o cliente com o ID especificado. Requer informações válidas do cliente no corpo da solicitação.

### Tecnologias Utilizadas

- **NestJS**: Um framework Node.js progressivo para construir aplicativos eficientes e escaláveis no lado do servidor.
- **SQLite**: Um motor de banco de dados SQL leve e baseado em arquivo, adequado para desenvolvimento e aplicativos de pequena escala.
- **Prisma**: Um kit de ferramentas de banco de dados moderno para TypeScript e Node.js, usado aqui para ORM e gerenciamento de banco de dados.
- **Jest**: Um framework de teste JavaScript agradável para testes unitários e de integração.
- **TypeScript**: Um superset do JavaScript que adiciona tipos estáticos e outras funcionalidades à linguagem.

### Inicialização

#### Servidor
- npm run start:dev

#### Vizualizar o banco de dados
- npx prisma studio

#### Testes
- npm test

---

Por Karla Oshikawa
