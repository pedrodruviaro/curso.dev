# curso.dev

## Dia 01

- Welcomes and welcomes

## Dia 02

- Git e github

- Configurando um mbiente dev windows: https://curso.dev/web/ambiente-de-desenvolvimento-windows

## Dia 03

Configurando o projeto

```
nvm install lts/hydrogen
```

- `nvm install` roda o .nvmrc do projeto

## Dia 04

- Protocolos: acordo/combinado de regras

## Dia 05

- Git

## Dia 06

- Git, git e mais git

## Dia 07

- Client e server
- Hospedagem e Deploy

## Dia 08

- Programação "orgânica" vs "impressora 3D"

## Dia 09

- O "segredo" para organização de tarefas
- [Milestones](https://github.com/pedrodruviaro/curso.dev/milestones) e [Issues](https://github.com/pedrodruviaro/curso.dev/issues)

```
> Início
> Progresso
> Conclusão
```

## Dia 10

- configurando `.editorconfig` e instalando a extensão
- configurando o prettier

## Dia 11

- Teoria sobre DNS e internet

## Dia 12

- Registrando um domínio novo `.com.br`
- Alterando servidores DNS
- usando `dig`

## Dia 13

- criação da página "Em construção 🚧"
- encerrando milestone 0
- Status Pages dos serviços

  - Vercel: https://www.vercel-status.com/
  - AWS: https://health.aws.amazon.com/health/status
  - GitHub: https://www.githubstatus.com/

## Dia 14

- Fundação
- Arquitetura de arquivos e pastas
- PoC e MVC

## Dia 15

- Testes com Jest
- Instalando Jest na versão 29.6.2
- TDD

## Dia 16

- Testes de unidade _vs_ integração _vs_ E2E
- API
- HTTP e curl
- _curl https://76.76.21.21 --insecure --verbose --header 'Host: fintab.com.br'_

## Dia 17

- DBMS - Database Management System
  - PostgreSQL
- Docker

  - Subindo um banco de dados local
  - criando o `compose.yaml`
    - `docker compose up` cria a imagem com base no compose
    - `docker compose up --detached` ou `-d` cria a imagem com base no compose e roda em background
    - `docker compose up -d --force-recreate` recria a imagem
    - movendo o `compose.yaml` para uma pasta separada: `docker compose -f infra/compose.yaml up`
  - `dockerfile` -> imagem (binário) -> container

- [Docker hub](https://hub.docker.com)

## Dia 18

- Inslalando o pacote `pg`
- Fazendo o jest olhar tudo (não só commits) com `"test:watch": "jest --watchAll"`
- Injetando variáveis de ambiente (fyi `MY_ENV=teste npm run dev`, 'teste' fica disponível ao processo)

## Dia 19
