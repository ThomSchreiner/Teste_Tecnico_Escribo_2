# Teste_Tecnico_Escribo_2

## Primeiros passos

Para clonar e executar este repositório, você precisará do [Git](https://git-scm.com), do [Node.js](https://nodejs.org/pt-br/download/), do [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) e do [PostgreSQL](https://www.postgresql.org/download/) instalados em seu computador. \
Na sua linha de comando:

```bash
# Clone este repositório
git clone git@github.com:ThomSchreiner/Teste_Tecnico_Escribo_2.git
# Intale as dependências
yarn
```

Crie um arquivo chamado **.env** na raiz do projeto, copiando o formato do arquivo **.env.example**. \
Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database.

```bash
# Intancie o banco de dados
yarn typeorm migration:run -d ./src/data-source.ts
# Execute a api
yarn dev
```

Após executar a aplicação clique [aqui](http://localhost:8000) e a veja funcionando.

---

## Endpoints

| Método | Rota   | Descrição                                |
| ------ | ------ | ---------------------------------------- |
| POST   | /users | Criação de um usuário.                   |
| GET    | /users | Listar um usiário usando o Bearer token. |
| POST   | /login | Autentica o usuário e devolve o token.   |

---

### **Criação de Usuário**

### `POST/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:8000
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:

```json
{
  "name": "user",
  "email": "user@mail.com",
  "password": "Teste1234%",
  "confirm_password": "Teste1234%",
  "phone_numbers": [{ "ddd": "54", "number": "123456789" }]
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "6755c1d8-9113-486e-81e4-f6832847de23",
  "created_at": "2023-11-23T17:02:59.948Z",
  "updated_at": "2023-11-23T17:02:59.948Z",
  "last_login": null,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA3NTg5ODAsImV4cCI6MTcwMDc2MDc4MCwic3ViIjoiNjc1NWMxZDgtOTExMy00ODZlLTgxZTQtZjY4MzI4NDdkZTIzIn0.0qypfY-INZnqrjA_UEZKH8Z0_Es8Ed2zcvxN-sxR3bY"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                                                                              |
| --------------- | -------------------------------------------------------------------------------------- |
| 409 Conflict    | This email already used.                                                               |
| 400 Bad Request | "name", "email", "confirm_password", "password", "phone_numbers" are a required fields |

---

### **Listando Usuário**

### `GET/users`

### Exemplo de Request:

```
GET/users
Host: http://localhost:8000
Authorization: Bearer token
Content-type: None
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "6755c1d8-9113-486e-81e4-f6832847de23",
  "name": "user",
  "email": "user@mail.com",
  "created_at": "2023-11-23T17:02:59.948Z",
  "updated_at": "2023-11-23T17:34:53.754Z",
  "last_login": "2023-11-23T17:34:53.745Z",
  "phone_numbers": [{ "number": "123456789", "ddd": "54" }]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |
| 401 Unauthorized | Token expired. |

---

## **Login**

### `POST/login`

### Exemplo de Request:

```
POST/login
Host: http://localhost:8000
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:

```json
{
  "email": "user@mail.com",
  "password": "Teste1234%"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  "id": "6755c1d8-9113-486e-81e4-f6832847de23",
  "created_at": "2023-11-23T17:02:59.948Z",
  "updated_at": "2023-11-23T17:03:11.877Z",
  "last_login": "2023-11-23T17:03:11.871Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA3NjA4OTMsImV4cCI6MTcwMDc2MjY5Mywic3ViIjoiNjc1NWMxZDgtOTExMy00ODZlLTgxZTQtZjY4MzI4NDdkZTIzIn0.eS4LHHBmL-9-ImUC496YaX3Tjj31ySaGSF22zHGBfqc"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                  |
| ---------------- | -------------------------- |
| 401 Unauthorized | Email or password invalid. |
