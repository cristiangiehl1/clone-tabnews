# CURSO.DEV

- [CURSO.DEV](#cursodev)
  - [Node.js](#nodejs)
    - [Definindo uma version](#definindo-uma-version)
    - [.nvmrc](#nvmrc)
      - [Conmo configurar o arquivo](#conmo-configurar-o-arquivo)
  - [Protocols](#protocols)
  - [TERMINAL - PORTS](#terminal---ports)
  - [Git](#git)
    - [Commandos](#commandos)
    - [Estagios de um arquivo no Git](#estagios-de-um-arquivo-no-git)
    - [Como alterar um commit que ja foi para a origin](#como-alterar-um-commit-que-ja-foi-para-a-origin)
    - [Como pular os hooks de verificacao do `git`](#como-pular-os-hooks-de-verificacao-do-git)
    - [Como recuperar uma branch deletada?](#como-recuperar-uma-branch-deletada)
    - [Rebase](#rebase)
      - [Como alterar o nome de um commit que nao esta no HEAD](#como-alterar-o-nome-de-um-commit-que-nao-esta-no-head)
    - [Outras info do `git`](#outras-info-do-git)
  - [Vercel](#vercel)
  - [DNS (Domain Name System)](#dns-domain-name-system)
    - [Como o computador sabe o IP de uma DNS?](#como-o-computador-sabe-o-ip-de-uma-dns)
    - [Fluxo para acessar um site](#fluxo-para-acessar-um-site)
    - [Usando o `dnsutils`](#usando-o-dnsutils)
    - [Curiosidades](#curiosidades)
    - [Como funciona uma requisição DNS (Domain Name System)](#como-funciona-uma-requisição-dns-domain-name-system)
      - [1. Requisição inicial ao provedor de internet (ISP - Internet Service Provider)](#1-requisição-inicial-ao-provedor-de-internet-isp---internet-service-provider)
      - [2. Consulta aos Root Servers](#2-consulta-aos-root-servers)
      - [3. Resposta com os servidores TLD](#3-resposta-com-os-servidores-tld)
      - [4. Consulta ao servidor TLD](#4-consulta-ao-servidor-tld)
      - [5. Resposta com o Authoritative NameServer](#5-resposta-com-o-authoritative-nameserver)
      - [6. Consulta ao Authoritative NameServer ou Authoritative Server](#6-consulta-ao-authoritative-nameserver-ou-authoritative-server)
      - [🕒 O que é TTL (Time To Live)?](#-o-que-é-ttl-time-to-live)
      - [7. Resposta final ao computador](#7-resposta-final-ao-computador)
      - [🗂️ Resumo da cadeia DNS:](#️-resumo-da-cadeia-dns)
      - [🔁 Cache e performance](#-cache-e-performance)
      - [🔐 DNS e segurança](#-dns-e-segurança)
      - [CURIOSIDADE DIG](#curiosidade-dig)
  - [PoC - Proof of Concept](#poc---proof-of-concept)
    - [Características:](#características)
    - [Exemplo:](#exemplo)
  - [MVP - Minimum Viable Product](#mvp---minimum-viable-product)
    - [Características:](#características-1)
    - [Exemplo:](#exemplo-1)
  - [Proposta de Arquitetura de Pastas](#proposta-de-arquitetura-de-pastas)
  - [Testes](#testes)
    - [✅ 1. Unit Tests (Testes Unitários)](#-1-unit-tests-testes-unitários)
      - [Características:](#características-2)
      - [Exemplo:](#exemplo-2)
    - [Integration Tests](#integration-tests)
      - [Características:](#características-3)
      - [Exemplo](#exemplo-3)
    - [E2E (End-to-End)](#e2e-end-to-end)
      - [Características:](#características-4)
      - [Exemplo](#exemplo-4)
  - [API (Application Programming Interface)](#api-application-programming-interface)
    - [Tipos comuns de API](#tipos-comuns-de-api)
    - [Para que serve uma API](#para-que-serve-uma-api)
  - [Protocol](#protocol)
  - [HTTP (Hypertext Transfer Protocol)](#http-hypertext-transfer-protocol)
    - [Testando requisicoes HTTP com o CURL](#testando-requisicoes-http-com-o-curl)
  - [O que é Virtual Host?](#o-que-é-virtual-host)
    - [Hospedagem na Vercel (alguem pode confirmar essa info?)](#hospedagem-na-vercel-alguem-pode-confirmar-essa-info)
  - [Qual banco de dados escolher?](#qual-banco-de-dados-escolher)
  - [Virtual Machine x Docker](#virtual-machine-x-docker)
    - [Virtual Machine - Surgimento 2007](#virtual-machine---surgimento-2007)
    - [Vagrant - Surgimento 2010](#vagrant---surgimento-2010)
    - [Docker - Surgimento em 2013](#docker---surgimento-em-2013)
  - [CPUs (Central Processing Units) and GPUs (Graphics Processing Units).](#cpus-central-processing-units-and-gpus-graphics-processing-units)
  - [Usando Docker Compose](#usando-docker-compose)
    - [CLI](#cli)
    - [O que quer dizer que uma versao de imagem e Alpine](#o-que-quer-dizer-que-uma-versao-de-imagem-e-alpine)
    - [Imagem do banco de dados](#imagem-do-banco-de-dados)
  - [Instalando o `psql`](#instalando-o-psql)
  - [Jest](#jest)
    - [Rodando o Jest de forma linear](#rodando-o-jest-de-forma-linear)
  - [Como remover dados sensiveis do seu repositorio](#como-remover-dados-sensiveis-do-seu-repositorio)
  - [Atalhos](#atalhos)
  - [MVC - Model Viewl Controller](#mvc---model-viewl-controller)
  - [TDD - Test Driven Development](#tdd---test-driven-development)
    - [Estagios do TDD](#estagios-do-tdd)
  - [Provedores de banco de dados](#provedores-de-banco-de-dados)
    - [Desmembrando a URL de uma DB](#desmembrando-a-url-de-uma-db)
    - [SSL - Secure Sockets Layer](#ssl---secure-sockets-layer)
    - [Self-signed certificate](#self-signed-certificate)
  - [Database Schema Migrations](#database-schema-migrations)
    - [Arquivos de Migracao](#arquivos-de-migracao)
    - [Framework de Migracao](#framework-de-migracao)
    - [`node-pg-migrate`](#node-pg-migrate)
      - [Dry Run](#dry-run)
      - [Live Run](#live-run)
      - [Rollback de banco de dados](#rollback-de-banco-de-dados)
      - [Clearing the database between tests](#clearing-the-database-between-tests)
  - [Next](#next)
    - [SWC (Speedy Web Compiler)](#swc-speedy-web-compiler)
    - [Next + Jest](#next--jest)
  - [Agile is Dead](#agile-is-dead)
  - [Estrategias de Branch](#estrategias-de-branch)
    - [Trunk-based Development](#trunk-based-development)
    - [Feature Branch (Github Flow)](#feature-branch-github-flow)
    - [Git Flow](#git-flow)
  - [Concurrently](#concurrently)
    - [Flags](#flags)
  - [Commits](#commits)
    - [Boas Práticas](#boas-práticas)
    - [Definindo a mensagem de um commit](#definindo-a-mensagem-de-um-commit)
      - [Forma Errada](#forma-errada)
      - [Forma Correta](#forma-correta)
    - [Coventionals Commits](#coventionals-commits)
    - [Commitlint](#commitlint)
      - [Testando](#testando)
  - [Tipos da Licença](#tipos-da-licença)
  - [Semantic Versioning](#semantic-versioning)
    - [npm-check-updates](#npm-check-updates)
  - [](#)
  - [Outro](#outro)
    - [3 formas de escrever uma `query`](#3-formas-de-escrever-uma-query)
    - [PostgreSQL](#postgresql)
    - [Query Sanitization ou Limpeza de Consulta](#query-sanitization-ou-limpeza-de-consulta)
    - [Como usar interpolacao em arquivos `.env`](#como-usar-interpolacao-em-arquivos-env)
    - [Blob - Binary Large Object](#blob---binary-large-object)
    - [Comando interessante para usar no curl](#comando-interessante-para-usar-no-curl)
    - [Comandos do bash](#comandos-do-bash)
      - [Comando de listar os arquivos](#comando-de-listar-os-arquivos)
      - [Comando para ver o valor do ultimo exit code](#comando-para-ver-o-valor-do-ultimo-exit-code)
      - [Tempo de execucao de um comando](#tempo-de-execucao-de-um-comando)
      - [cat - concatenate](#cat---concatenate)
    - [Commitizen](#commitizen)

## Node.js

### Definindo uma version

1. lista a version

```bash
node -v
```

2. lista as versions available

```bash
nvm ls
```

3. instalando uma version

```bash
nvm install [version_name]
```

4. selecionando uma version ja instalada

```bash
nvm use [version_name]
```

### .nvmrc

Usado para especificar uma version do node.js utilizada dentro de um projeto.

**Note:** rc = run command

#### Conmo configurar o arquivo

Simplemente passando a version do node.js do projeto

```.nvmrc
v.20.18.2
```

## Protocols

1. HTTP (HYPERTEXT TRANSFER PROTOCOL)
2. FTP (FILE TRANSFER PROTOCOL)
3. SMTP (SIMPLE MAIL TRANSFER PROTOCOL)

**ASSISTIR:** Vídeo do UDP vs TCP: [UDP vs TCP](https://youtu.be/ZEEBsq3eQmg)

## TERMINAL - PORTS

Permite configurar uma porta pública ou privada.

1. Porta privada:
   Só pode ser acessada pelo próprio VS Code (ou por você dentro do ambiente). Útil para testes locais sem exposição externa.

2. Porta pública:
   Pode ser acessada por qualquer dispositivo conectado à internet (ou à mesma rede, dependendo do caso). Perfeito para testar a aplicação em tempo real em outros aparelhos, como um celular.

## Git

### Commandos

- `git log` - listar os commits do repositório.
- `git log --stat` - listar os commits do repositório com o `diff` entre as versoes.
- `git log --oneline` - listar os commits do repositório de forma compactada.
- `git add` - sobe alterações para a staging area.
- `git commit` - realiza novos commits.
- `git commit --amend` - substitui o commit anterior por um novo, mas aproveita as alterações dele.
- `git diff` - calcula a diferença entre as versões/alterações dos arquivos.

- `git commit -m "mensagem"` - atalho para fazer novos commits.
- `git commit --amend -m "mensagem"` - usando a flag `-m` para poder fazer o amendo com a mensagem.
- `git push` - empurrar alterações locais para o origin.
- `git push --force` - empurrar de forma forçada alterações locais para o origin.
- `git push -f` - a forma comprimida do comando anterior.
- `git branch` - listas as branchs existentes.

- `git mv .env .env.development` - move os dados de um arquivo para outro.

- `git commit -am 'mensagem de commit'` - move todas as alteracoes para staging e commita elas.

### Estagios de um arquivo no Git

1. 🟠 Modified (Modificado)
   O arquivo foi alterado, mas ainda não foi adicionado à staging area.
   O Git detecta que houve uma mudança, mas ela ainda não está pronta para ser commitada.

`git status` - mostra os arquivos que foram modificados mas ainda nao foram para staging em `vermelho` e os que foram modificados e estao em staging em `verde`.

2. 🟢 Staged (Preparado)
   O arquivo foi adicionado à staging area com `git add`.
   Ele está pronto para ser incluído no próximo commit.
   Você usa o comando `git add index.js` para adicionar um arquivo em especifico.

3. ✅ Committed
   A alteração foi registrada no repositório local com `git commit`.
   Agora ela faz parte do histórico oficial do projeto.

```plaintext
[Working Directory]
     ↓ (modifica o arquivo)
  Modified
     ↓ git add
  Staged
     ↓ git commit
  Committed
```

### Como alterar um commit que ja foi para a origin

1 - Fazer as alteracoes que deseja localmente.
2 - Usar o comando `git commit --amend` para substituir o commit anterior por um novo.
3 - O git apenas aceitara o push se usarmos a flag `-f` ou `--force`. **MUITO CUIDADO AO USAR ISSO**

### Como pular os hooks de verificacao do `git`

Simplesmente use o comando abaixo:

```bash
git commit --no-verify
```

OU

```bash
git commit -n
```

### Como recuperar uma branch deletada?

Vamos supor que voce delete uma `branch` que nao deveria, e agora?

```bash
git branch -d test-staging-deployment
```

resposta

```bash
warning: deleting branch 'test-staging-deployment' that has been merged to
         'refs/remotes/origin/test-staging-deployment', but not yet merged to HEAD
Deleted branch test-staging-deployment (was 9de0074). <---- aqui quando ele deleta ele avisa qual foi o ultimo commit da branch
```

O `git` na verdade esta excluindo apenas o ponteiro daquela branch, mas o commit continua intacto. Voce pode pegar o hash daquele ultimo commit e pronto, todas as mudancas feitas nele estarao la.

```bash
git checkout 9de0074
```

O problema e que o commit esta `dangling` (pendurado), nao e possivel chegar nele atraves de uma branch, apenas pelo hash dele. O `git` tem garbage collection que vai deletar todos os commits que estao `dangling` por mais de 14 dias (tempo default).
Para resolver isso basta apontar uma branch para esse commit com o comando normal de criar branch. **Importante criar a branch a partir do commit**.

```bash
git checkout -b test-staging-deployment
```

Pronto, problema resolvido.

E como recuperar o hash do commit quando nao tenho o registro do hash??

```bash
git reflog
```

Assim voce recebe todos os registros de atualizacoes que foram sendo feitas no git.

```bash
9de0074 (HEAD -> test-staging-deployment, origin/test-staging-deployment) HEAD@{0}: checkout: moving from 9de00740e541c0e6e2f93cde0c6e46047a8b7575 to test-staging-deployment
9de0074 (HEAD -> test-staging-deployment, origin/test-staging-deployment) HEAD@{1}: checkout: moving from main to 9de0074
b63f01c (origin/main, main) HEAD@{2}: reset: moving to HEAD
b63f01c (origin/main, main) HEAD@{3}: checkout: moving from test-staging-deployment to main
9de0074 (HEAD -> test-staging-deployment, origin/test-staging-deployment) HEAD@{4}: commit: fix `/migrations` endpoint connection bug
c5761ce HEAD@{5}: commit: test staging deployment
782c09e (origin/fix-migrations-endpoint, fix-migrations-endpoint) HEAD@{6}: checkout: moving from fix-migrations-endpoint to test-staging-deployment
782c09e (origin/fix-migrations-endpoint, fix-migrations-endpoint) HEAD@{7}: commit: fix migrations db connection clycle
b63f01c (origin/main, main) HEAD@{8}: checkout: moving from main to fix-migrations-endpoint
b63f01c (origin/main, main) HEAD@{9}: commit: add `api/vi/migrations` endpoint
49225b6 HEAD@{10}: commit: adds migration scripts
65499b2 HEAD@{11}: commit: adds ssl to database connections
d676357 HEAD@{12}: commit: adds to `database.ts` try-catch block for error handling
2ad6769 HEAD@{13}: reset: moving to HEAD~1
ddc5867 HEAD@{14}: commit: adds production envs
2ad6769 HEAD@{15}: commit: make `database.js` more robust to error and finish `/api/v1/status endpoint
b39130e HEAD@{16}: commit: adds new scripts - `services:up`, `services:stop` and `services:down`
a3e1400 HEAD@{17}: commit: moved `models`, `infra` and `tests` to `src`
277d2ce HEAD@{18}: commit: add `database.js` and `.env.development`
c3bc3aa HEAD@{19}: commit: adds `/api/v1/status` endpoint`
d2a8ede HEAD@{20}: commit: install: `jest` and configure test scipts
55650ef HEAD@{21}: commit (amend): adds `.prettierignore`
d8cae7b HEAD@{22}: commit: adds `.prettierignore`
ca8129b HEAD@{23}: commit: adds scripts `lint:check` and `lint:fix`
458d294 HEAD@{24}: commit: adiciona arquivo `.editorconfig`
7af5384 HEAD@{25}: commit (amend): substituindo a mensagem inicial do commit
908cd70 HEAD@{26}: commit (amend): chore: added git class initial commit
fbf4769 HEAD@{27}: commit (amend): chore: added git class initial commit
f232c81 HEAD@{28}: commit (initial): chore: added git class initial commit
```

Desta forma, voce precisa somente saber a mensagem referente ao commit que voce quer recuperar. Caso nao saiba isso amigao, so lamento. kkkkkkk
Apos pegar o hash do commit e possivel criar uma branch informando o commit que voce quer usar como base.

```bash
git checkout -b test-staging-deployment 9de0074
```

### Rebase

No `rebase` voce deve apontar qual a nova base voce deseja utilizar para a sua branch.
Podemos excluir o `package-lock.json` para resolver o conflito entre versoes no arquivo.

```bash
git rebase main
```

Depois de resolver todos os conflitos devemos executar o comando abaixo:

```bash
git rebase --continue
```

Isso vai abrir uma nova aba no `vscode` caso voce queira mudar a mensagem de commit.

#### Como alterar o nome de um commit que nao esta no HEAD

```bash
git rebase -i HEAD~2
```

Isso vai abrir uma lista contendo os commits que vao ser integrados na branch e uma lista de comandos que podem ser executados neles:

- `pick` usa o commit.
- `reword` usa o commit, mas pode editar a mensagem.

Lembra sempre de usar o `ctrl + s` para salvar as alteracoes.

### Outras info do `git`

**1) Branch**
São ponteiros (endereços) para commits. Podemos visualizar isso no terminal ao usar:

```bash
cat .git/refs/heads/fix-migrations-endpoint
```

**resposta:**

```bash
782c09ed5ec887d2827a0f1a609c9254571f0a50
```

Também é possível ver todas as refs do seu `.git` usando:

```bash
git show-ref
```

**resposta:**

```bash
782c09ed5ec887d2827a0f1a609c9254571f0a50 refs/heads/fix-migrations-endpoint
92cac5a644f771e6e37be231030dcbc64d6b16d4 refs/heads/main
78da3acd2553c1dd121b6a3b896a56759e769557 refs/heads/test-staging-deployment
782c09ed5ec887d2827a0f1a609c9254571f0a50 refs/remotes/origin/fix-migrations-endpoint
92cac5a644f771e6e37be231030dcbc64d6b16d4 refs/remotes/origin/main
78da3acd2553c1dd121b6a3b896a56759e769557 refs/remotes/origin/test-staging-deployment
a70c8e335b5af6ff52422e26edd1de1771ad5be9 refs/stash
```

**observações:**

- `refs/heads/` - branches que existem localmente no seu repositório.
- `refs/remotes/origin` - representa as branches do repositório remoto origin.
- `refs/stash` - ref temporária usada quando você faz `git stash`

**2) Commits**
São objetos que armazenam as seguintes informações:

- ponteiro para uma `tree` => aponta para onde realmente estao os arquivos e diretorios daquele momento da "fotografia" tirada pelo commit.
- `parent` => commit anterior
- `author` => quem escreveu o commit
- `commiter` => nao entendi muito bem a diferenca.

```bash
git cat-file -p 782c09ed5ec887d2827a0f1a609c9254571f0a50
```

**resposta:**

```bash
tree f0d450f3965b791968237bf9e917ea02e377168d
parent 9de00740e541c0e6e2f93cde0c6e46047a8b7575
author cristiangiehl1 <cristiangiehl@gmail.com> 1749164134 -0300
committer cristiangiehl1 <cristiangiehl@gmail.com> 1749164134 -0300
```

**3) Tree**
Estrutura de arquivos e diretorios correspondente a aquele momento do projeto.

```bash
git cat-file -p f0d450f3965b791968237bf9e917ea02e377168d
```

**resposta:**

```bash
<MODO> <TIPO>             <HASH>                           CAMINHO>
100644  blob e3207ea27130e0be4d5bc16b1f9154029c76d3df	.editorconfig
100644  blob 30050453c96b3b7cef50e70763f848ae245dddd7	.gitignore
100644  blob bb1f5c27fc2cac21279ff0f9c2c48ed4a038cbb6	.nvmrc
100644  blob d0d878e4045e48c5ed4ebce37cbba7bbfcebd038	.prettierignore
100644  blob 32415744d762d97d89c44b998c221ebd57b00ccc	README.md
040000  tree cdf820e18dc5ed1007529311e7f99f985dd05983	dist
100644  blob 133adbadd4bfaff47efd560e2d6f12da4d9e6ee3	jest.config.ts
100644  blob 4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4	next-env.d.ts
100644  blob 1b974bb4cd02ee020eef80b940e0cb8a7fe0d413	package-lock.json
100644  blob 6a2f230ecc5dac1698c56681d542d8bc52603061	package.json
040000  tree 490454154ff03d195af9872eb45206afaff6b840	src
100644  blob fbc8e7632de7fde0501314dc90f9e7facf16da85	tsconfig.build.json
100644  blob 8efadfb29e838eb60cfbae72b64784ffab4a4ebc	tsconfig.json
```

**obs:** uma `tree` pode apontar para outras `inner-trees`.

**4) Blob**
Conteúdo dos arquivos. O git armazena esse conteúdo no formato de binarios compactados, mas usando o comando abaixo podemos fazer com que o `git` descompacte e interprete esse conteúdo para te mostrar o conteúdo original do arquivo em texto (ou, se for binário, ele pode mostrar caracteres não legíveis).

```bash
git cat-file -p bb1f5c27fc2cac21279ff0f9c2c48ed4a038cbb6
```

**resposta:**

```bash
v20.18.2
```

## Vercel

https://curso.dev/web/novos-deploys

A Vercel mantem URL's para deploys antigos, bem util para poder observar qual o ultimo commit que estava funcionando antes de subir um bug.

## DNS (Domain Name System)

### Como o computador sabe o IP de uma DNS?

O DNS tem intuito de converter um dominio em um endereco de IP (Internet Protocol).

### Fluxo para acessar um site

| Servidor DNS                                   | Computador (Cliente)                                             | Servidor Final (ex: tabnews.com.br)                      |
| ---------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------- |
|                                                | 1. Solicita o IP de `tabnews.com.br` para o servidor             |                                                          |
| 2. Converte o domínio para IP                  |                                                                  |                                                          |
| 3. Envia o IP correspondente (`103.88.235.44`) | 4. Recebe o IP e estabelece conexão com o servidor               | 4.1. Recebe a requisição HTTP                            |
|                                                |                                                                  | 5. Processa a requisição:                                |
|                                                |                                                                  | - Verifica headers HTTP                                  |
|                                                |                                                                  | - Verifica cookies, tokens, autenticação                 |
|                                                |                                                                  | - Busca os dados solicitados (HTML, JSON, CSS, JS, etc.) |
|                                                | 6. Recebe a resposta com o conteúdo da página                    | - Retornar:                                              |
|                                                |                                                                  | a) HTML inicial (SSR/SSG)                                |
|                                                |                                                                  | b) JS chunks (React + paginas)                           |
|                                                |                                                                  | c) CSS (em arquivos ou inline)                           |
|                                                |                                                                  | d) JSON ccom dados (para navegacao client-side)          |
|                                                | 7. Navegador monta e hidrata a SPA:                              |                                                          |
|                                                | a) Analisa o HTML e constrói o DOM                               |                                                          |
|                                                | b) Detecta `<script>` / `<link>` e baixa os **chunks JS/CSS**    |                                                          |
|                                                | c) Executa o JS; React/Next cria o Virtual DOM                   |                                                          |
|                                                | d) **Hidrata** o DOM já existente ou faz o primeiro render (CSR) |                                                          |
|                                                | e) Anexa event listeners e inicia o roteador de cliente          |                                                          |
|                                                | f) Faz fetchs adicionais se necessário (dados de rotas/API)      |                                                          |

### Usando o `dnsutils`

O `dnsutils` é um pacote de software que contém uma coleção de ferramentas úteis para realizar consultas e operações relacionadas ao DNS (Domain Name System).

Para consultar uma dns digite:

```bash
dig [dns_name]
```

A saída incluirá informações detalhadas sobre a consulta DNS, como o `endereço IP` retornado `ANSWER SECTION` e o tempo gasto na resolução `Query time`.

Você pode especificar um servidor DNS diferente do padrão usando a opção @. Por exemplo, para usar o Google Public DNS 8.8.8.8. Vamos executar:

```bash
dig @8.8.8.8 tabnews.com.br
```

### Curiosidades

Todos os dominios comecam a ser lidos de tras para frente. E neles tem um caracter oculto (.) que marca o `root domain`.

Exemplo:
`tabnews.com.br`

| tabnews | .com | .br | . |
| | | TLD (Top-Level Domain)\* | root domain |

(\*): os TLD's sao divididos em duas sub-categorias: (i) ccTLDs - Country Code Top-Level Domains (domains reservados a paises). Ex: pt - portgual, br - brasil, ca - canada; (ii) gTLDs - Generic Top-Level Domains, Ex: .com, .org, .net, .bradesco.

TTL - Time to Live.

### Como funciona uma requisição DNS (Domain Name System)

Quando você digita um endereço como `www.exemplo.com` no navegador, o processo de resolução do nome para um endereço IP acontece em várias etapas. Abaixo está o passo a passo detalhado:

---

#### 1. Requisição inicial ao provedor de internet (ISP - Internet Service Provider)

O **sistema operacional** do seu computador faz uma requisição DNS ao **servidor recursivo (Recursive Resolver)** do seu provedor de internet (ISP - Internet Service Provider).

> ℹ️ O Recursive Resolver é responsável por encontrar o IP correspondente ao domínio, caso ele não esteja em cache local.

---

#### 2. Consulta aos Root Servers

Se o resolver não tiver a resposta em cache, ele envia uma requisição para um dos **Root Servers** (servidores raiz do DNS).

> 🌐 Existem 13 Root Servers principais (de A a M), espalhados globalmente. Eles não sabem o IP do domínio, mas sabem onde encontrar os servidores responsáveis pelos domínios de nível superior (TLDs).

---

#### 3. Resposta com os servidores TLD

O **Root Server** analisa o domínio de trás para frente (por exemplo, `com`, `org`, `br`) e retorna ao resolver uma lista de **servidores TLD (Top-Level Domain)** responsáveis por aquele sufixo.

Exemplo:

- Para o domínio `www.exemplo.com`, os root servers apontam para os servidores TLD responsáveis pelo `.com`.

---

#### 4. Consulta ao servidor TLD

O **Recursive Resolver** então faz uma nova requisição para um dos **servidores TLD** obtidos, perguntando onde está o endereço IP do domínio completo (`www.exemplo.com`).

---

#### 5. Resposta com o Authoritative NameServer

O **servidor TLD** responde com o endereço do **servidor autoritativo (Authoritative DNS Server)** responsável pelo domínio `exemplo.com`.

---

#### 6. Consulta ao Authoritative NameServer ou Authoritative Server

O **Recursive Resolver** faz uma requisição ao **Authoritative Server**, que possui os **registros DNS (DNS Records)** do domínio, como:

- **A (IPv4)**
- **AAAA (IPv6)**
- **CNAME**
- **MX**
- etc.

Esse servidor responde com o **endereço IP real** do domínio, junto com um **TTL (Time To Live)**.

---

#### 🕒 O que é TTL (Time To Live)?

O **TTL** é um valor (em segundos) que determina **por quanto tempo** a resposta DNS **pode ser armazenada em cache**.

Exemplo:

- Um TTL de `3600` segundos (1 hora) indica que o IP obtido pode ser reutilizado durante esse tempo sem necessidade de nova consulta.

> 🧠 O TTL influencia diretamente a performance e a propagação de mudanças DNS. Um valor alto melhora a performance por reduzir consultas, mas atrasa a propagação de atualizações.

---

#### 7. Resposta final ao computador

O **Recursive Resolver** envia a resposta com o IP e o TTL de volta ao **sistema operacional**, que então permite ao navegador se conectar ao servidor de destino.

> ⚡ Essa resposta pode ser armazenada em cache:
>
> - Pelo sistema operacional
> - Pelo navegador
> - Pelo roteador
> - Pelo próprio Recursive Resolver

---

#### 🗂️ Resumo da cadeia DNS:

1. Usuário digita o domínio no navegador.
2. O sistema consulta o Recursive Resolver.
3. O resolver consulta os Root Servers.
4. Os Root Servers indicam os servidores TLD.
5. O resolver consulta os TLDs.
6. Os TLDs apontam para o Authoritative Server.
7. O resolver consulta o Authoritative Server.
8. O IP (com TTL) é retornado ao usuário.

---

#### 🔁 Cache e performance

O DNS utiliza **caching** em diversos níveis:

- Navegador
- Sistema Operacional
- Roteador
- Servidor DNS do provedor

Graças ao **TTL**, o cache evita requisições repetidas, melhorando a performance da navegação.

---

#### 🔐 DNS e segurança

Hoje em dia, utiliza-se o **DNS over HTTPS (DoH)** ou **DNS over TLS (DoT)** para proteger as requisições DNS contra espionagem ou manipulação.

#### CURIOSIDADE DIG

O `dig` tem um comando onde mostrar o tracing do DNS buscado.

```bash
dig finta.com.br TXT +trace
```

## PoC - Proof of Concept

**Objetivo:**  
Verificar **se uma ideia é tecnicamente viável**.

### Características:

- Foca em testar **se algo é possível de ser feito** (ex: uma tecnologia, uma integração, um algoritmo).
- **Não precisa ser bonito, nem completo.**
- É comum em fases iniciais de projetos inovadores, ou com muita incerteza técnica.
- Pode ser um script, protótipo rápido ou um trecho de código isolado.

### Exemplo:

Você quer criar um app que reconhece vozes e faz reservas em restaurantes.  
Uma **PoC** poderia ser testar se é possível integrar uma API de reconhecimento de voz com o sistema de reservas da Resy.

## MVP - Minimum Viable Product

**Objetivo:**  
Lançar uma **versão básica do produto**, com o **mínimo de funcionalidades necessárias para resolver um problema real** e começar a receber feedback de usuários.

### Características:

- Tem interface mínima e **funciona de verdade**.
- Deve ser usável por clientes reais.
- Ajuda a **validar o interesse do mercado** antes de investir pesado no desenvolvimento completo.
- Pode ser lançado publicamente.

### Exemplo:

Voltando ao app de reservas por voz, o **MVP** seria uma versão simples que:

- Permite o usuário gravar um áudio.
- Converte a fala em texto.
- Mostra horários disponíveis.
- E confirma uma reserva — mesmo que com uma interface bem simples.

## Proposta de Arquitetura de Pastas

| - pages
| - models
| | - user.js
| | - content.js
| | - password.js
| - infra
| | - database.js
| | - migrations
| | - provisioning
| | | - staging
| | | - production
| - tests

## Testes

- Unit Tests
- Integrations Tets
- E2E Tests

### ✅ 1. Unit Tests (Testes Unitários)

**Objetivo:** Testar **componentes isolados** (funções, métodos, classes) de forma independente.

#### Características:

- Testam **uma única unidade de código**.
- Não dependem de banco de dados, rede, arquivos ou outros módulos.
- Rápidos e fáceis de rodar.
- Usam mocks/stubs para dependências externas.

#### Exemplo:

```ts
// soma.ts
export function soma(a: number, b: number): number {
  return a + b;
}
```

```ts
// soma.test.ts
import { soma } from "./soma";

test("soma dois números corretamente", () => {
  expect(soma(2, 3)).toBe(5);
});
```

### Integration Tests

**Objetivo**: How multiple units work together — e.g., a function interacting with a database or external API.

#### Características:

- Verificam se diferentes partes do sistema funcionam juntas.
- Podem envolver banco de dados, filesystem, APIs internas, etc.
- Mais lentos que testes unitários.
- Testam fluxos mais completos, mas ainda não o sistema todo.

#### Exemplo

```ts
// app.ts
import express from "express";
const app = express();
app.use(express.json());
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (name && email) return res.status(201).send();
  return res.status(400).send();
});
export default app;
```

```ts
// app.test.ts
import request from "supertest";
import app from "./app";

describe("POST /users", () => {
  it("deve criar um usuário com dados válidos", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Alice", email: "alice@example.com" });

    expect(res.status).toBe(201);
  });
});
```

### E2E (End-to-End)

**Objetivo**: Testar o sistema como um todo, simulando a interação de um usuário real.
The **entire system** from the **user's perspective** — like a real user interacting with the UI and backend.

#### Características:

- Verifica se todo o sistema funciona de ponta a ponta.
- Pode envolver frontend, backend, banco de dados e serviços externos.
- Mais lentos e complexos.
- Geralmente usam ferramentas como Playwright, Cypress ou Puppeteer.

#### Exemplo

```ts
// cadastro.spec.ts
import { test, expect } from "@playwright/test";

test("usuário pode se cadastrar", async ({ page }) => {
  await page.goto("https://meuapp.com");
  await page.click("text=Registrar");
  await page.fill('input[name="email"]', "usuario@teste.com");
  await page.fill('input[name="senha"]', "123456");
  await page.click('button[type="submit"]');
  await expect(page.locator(".mensagem")).toContainText("Cadastro realizado");
});
```

## API (Application Programming Interface)

API é a sigla para Interface de Programação de Aplicações.
Ela é um conjunto de regras e definições que permite que diferentes sistemas ou programas se comuniquem entre si.
You can think of it as a messenger between two programs. One program sends a request, and the API delivers it to the other system, then returns the response.

### Tipos comuns de API

**APIs Web (HTTP/REST/GraphQL)**: São acessadas pela internet.
**APIs de Bibliotecas:** Chamadas diretamente dentro do código (como funções de um SDK).
**APIs de Sistema Operacional:** Para interagir com o sistema, arquivos, rede, etc.

### Para que serve uma API

A principal utilidade de uma API (Interface de Programação de Aplicações) é facilitar a integração entre sistemas distintos, permitindo que eles se comuniquem sem que seja necessário
entender a lógica interna ou a implementação de cada um. Em vez disso, basta seguir as regras e formatos definidos na documentação da API,
que descrevem como fazer requisições e interpretar as respostas.

## Protocol

A protocol is a system of rules that define how data is exchanged within or between computers. Communications between devices require that the devices agree on the format of the data that is being exchanged. The set of rules that defines a format is called a protocol.

## HTTP (Hypertext Transfer Protocol)

HTTP is a **protocol for fetching resources such as HTML documents**. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is typically constructed from resources such as text content, layout instructions, images, videos, scripts, and more.

**Clients** and **servers** communicate by exchanging individual messages (as opposed to a stream of data). The messages sent by the client are called requests and the messages sent by the server as an answer are called responses.

O HTTP é um protocolo da camada de aplicação desenvolvido para transferir informações entre dispositivos em rede e é executado no topo de outras camadas da pilha de protocolos de rede.
Um fluxo típico de HTTP envolve uma máquina cliente que faz uma solicitação a um servidor, o qual por sua vez, envia uma mensagem de resposta.

### Testando requisicoes HTTP com o CURL

1. Nao vai mostrar todos os detalhes do header da response

```bash
curl http://localhost:3000/api/status
```

1. Mostra os detalhes do protocolo HTTP

```bash
curl http://localhost:3000/api/status -v OU curl http://localhost:3000/api/status --verbose
```

```bash
curl http://localhost:3000/api/status -v
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> GET /api/status HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.5.0
> Accept: */*
>
< HTTP/1.1 200 OK                                             - status
< Content-Type: application/json; charset=utf-8               - headers
< ETag: "yef0diftaa1o"                                        - headers
< Content-Length: 60                                          - headers
< Vary: Accept-Encoding                                       - headers
< Date: Wed, 28 May 2025 21:23:54 GMT                         - headers
< Connection: keep-alive                                      - headers
< Keep-Alive: timeout=5                                       - headers
<
* Connection #0 to host localhost left intact
{"message":"alunos do curso.dev sao pessoas acima da media"}  - body
```

(\*) - mostra **ações internas** que o `curl` está realizando (resolução de DNS, conexão, etc).
(>) - mostra os **dados da requisição** HTTP (`request`) que está sendo enviada.
(<) - mostra os **dados da resposta** HTTP (`response`) que está sendo recebida.

## O que é Virtual Host?

Quando hospedamos múltiplos sites ou aplicações em um único servidor, utilizamos a técnica chamada Virtual Host.
Isso permite que um mesmo servidor responda por diferentes domínios, separando suas configurações e comportamentos.

### Hospedagem na Vercel (alguem pode confirmar essa info?)

A `Vercel` utiliza a técnica de Virtual Host baseada em **nome de domínio**, utilizando apenas **um endereço IP** para todos os domínios no servidor.

Quando fazemos uma solicitação a um domínio hospedado na `Vercel`, ocorre o seguinte:

- A solicitação chega ao servidor, que a envia para o host virtual;
- O servidor verifica o nome do domínio solicitado;
- Após essa verificação, ele consulta a configuração do host correspondente e retorna a resposta com o conteúdo do site adequado.

Podemos visualizar esse comportamento ao passar o Host no header da nossa requisição HTTP:

- Usamos o IP da Vercel - https://76.76.21.21;
- E passamos o domínio do nosso site no header Host: bitbites.com.br

```bash
curl https://76.76.21.21 --verbose --insecure --header 'Host: bitbites.com.br'
```

```bash
*   Trying 76.76.21.21:443...
* Connected to 76.76.21.21 (76.76.21.21) port 443
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_128_GCM_SHA256 / X25519 / RSASSA-PSS
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=no-sni.vercel-infra.com
*  start date: May 18 12:16:04 2025 GMT
*  expire date: Aug 16 12:16:03 2025 GMT
*  issuer: C=US; O=Let's Encrypt; CN=R10
*  SSL certificate verify result: unable to get local issuer certificate (20), continuing anyway.
*   Certificate level 0: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://76.76.21.21/
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: bitbites.com.br]
* [HTTP/2] [1] [:path: /]
* [HTTP/2] [1] [user-agent: curl/8.5.0]
* [HTTP/2] [1] [accept: */*]
> GET / HTTP/2
> Host: bitbites.com.br
> User-Agent: curl/8.5.0
> Accept: */*
>
< HTTP/2 200
< accept-ranges: bytes
< access-control-allow-origin: *
< age: 1639
< cache-control: public, max-age=0, must-revalidate
< content-disposition: inline
< content-type: text/html; charset=utf-8
< date: Thu, 29 May 2025 18:13:34 GMT
< etag: "7f1cef8e85967d59408621da08510d77"
< last-modified: Thu, 29 May 2025 17:46:15 GMT
< server: Vercel
< strict-transport-security: max-age=63072000
< x-matched-path: /
< x-vercel-cache: HIT
< x-vercel-id: gru1::tvwnm-1748542414787-bbe4cde893db
< content-length: 1144
<
<!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><meta name="next-head-count" content="2"/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script><script src="/_next/static/chunks/webpack-4e7214a60fad8e88.js" defer=""></script><script src="/_next/static/chunks/framework-eaa0f3520361d921.js" defer=""></script><script src="/_next/static/chunks/main-a0dca5a2ff5035f1.js" defer=""></script><script src="/_next/static/chunks/pages/_app-df511a3677d160f6.js" defer=""></script><script src="/_next/static/chunks/pages/index-2dd7be254f77007d.js" defer=""></script><script src="/_next/static/en8D9dGBcU1f4V_GUQqy_/_buildManifest.js" defer=""></script><script src="/_next/static/en8D9dGBcU1f4V_GUQqy_/_ssgManifest.js" defer=""></script></head><body><div id="__next"><h1>Mudando a frase</h1></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/","query":{},"buildId":* Connection #0 to host 76.76.21.21 left intact
"en8D9dGBcU1f4V_GUQqy_","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script></body></html>
```

## Qual banco de dados escolher?

Devemos responder 4 perguntas:

**1) Qual o tipo de banco de dados?**

- Relacional;
- Nao relacional;
- Armazenamento de Documentos
- Armazenamento chave-valor
- Serie Temporal - muito usado em dados de monitoria;
- Espacial - muito usado em dados geograficos.

**2) Qual o DBMS - Database Management System (Sistema de Gerenciamento de Banco de Dados)?**
é um sistema de software que permite que as pessoas criem, gerenciem e acessem bases de dados.

**Exemplos:**

- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- MongoDB
- Redis

**3) Utilizar ORM (para bancos relacionais) ou SQL Puro?**
Levando em consideração que a principal utilidade de um `ORM` é abstrair o uso direto de `SQL`, ele facilita a escrita e leitura das consultas ao adotar uma sintaxe mais próxima da linguagem de programação utilizada. Além disso, o `ORM` gerencia a conexão com o banco de dados e realiza a conversão automática dos dados em objetos manipuláveis no código. No entanto, é importante estar ciente de suas limitações:

- Consultas muito complexas ou que envolvem grandes volumes de dados podem apresentar lentidão, tornando-se menos eficientes em termos de performance se comparadas ao uso direto de `SQL`;
- Algumas operações avançadas podem não ser suportadas ou ser difíceis de implementar apenas com o `ORM`, exigindo, em certos casos, o uso de `SQL` puro para maior controle e eficiência.

**SQL (Structured Query Language)**
É uma linguagem de consulta estruturada e uma linguagem de domínio específico, desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados.
It is the standard language used to interact with relational databases.

**With SQL, you can:**

- Create and modify database structures (DDL – Data Definition Language)
- Insert, query, update, and delete data (DML – Data Manipulation Language)
- Control access and manage transactions

**Exemplo Query Pura:**

```sql
SELECT count(*) FROM users;
```

**Exemplo Query com ORM:**

```sql
User.count()
```

**4) Utilizar Migrations?**
Migrations são scripts ou arquivos que descrevem as alterações estruturais no banco de dados de forma controlada e versionada.
Migrations are a way to version and manage changes to a database schema over time, using code.

As migrações ajudam a transicionar o esquema do banco de dados do seu estado atual para um novo estado desejado:

- adicionando tabelas e colunas;
- removendo elementos;
- dividindo campos; ou
- alterando tipos e restrições.

## Virtual Machine x Docker

`Máquinas virtuais` e tecnologias como o `Docker` surgiram para resolver problemas de **incompatibilidade de ambiente** ao hospedar e executar projetos em diferentes hosts. Cada máquina (ou servidor) pode ter configurações únicas, como:

- Hardware distinto;
- Sistemas operacionais variados;
- Patches de segurança em versões diferentes;
- Softwares auxiliares instalados (dependências do sistema);
- Presença de antivírus;
- Idioma do sistema operacional;
- Configurações de fuso horário;

Essas diferenças podem causar comportamentos inesperados, erros ou falhas de execução quando o projeto é movido de um ambiente de desenvolvimento para produção, ou entre diferentes times.
Ao encapsular uma aplicação com todas as suas dependências e configurações necessárias, o `Docker` — e as `máquinas virtuais` em geral — permitem que o software seja executado de forma consistente e previsível, independentemente do ambiente do host.

### Virtual Machine - Surgimento 2007

O principal problema das máquinas virtuais é que elas consomem muitos recursos do sistema, especialmente memória e CPU.
Isso ocorre porque cada VM executa um sistema operacional completo, o que exige mais do hardware.
Entao, imagine um projeto mais complexo onde seria necessario configurar uma VM para:

1. cada camada da aplicacao:
2. banco de dados;
3. servicos de emails; etc.  
   O custo de processamento subiria demais.

┌──────────────────────┬──────────────────────┐
│ Aplicação │ Banco de Dados │
├──────────────────────┼──────────────────────┤
│ Sistema Operacional │ Sistema Operacional │
│ (Guest) │ (Guest) │
├──────────────────────┴──────────────────────┤
├─────────────────────────────────────────────┤
│ Virtualizador │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│ Sistema Operacional (Host) │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│ Hardware (Host) │
└─────────────────────────────────────────────┘

### Vagrant - Surgimento 2010

Foi uma solucao para tornar mais facil a configuracao de uma virtual machine.

### Docker - Surgimento em 2013

Foi uma abstracao do `Namespaces` e `Control Groups` do Linux.
O docker e uma interface programatica que permite a configuracao de containers (o agrupamento de recursos) dentro de um sistema operacional que ja esta rodando,
sem a necessidade de utilizar uma VM.

┌──────────────────────┬──────────────────────┐
│ Aplicação │ Banco de Dados │
├──────────────────────┴──────────────────────┤
├─────────────────────────────────────────────┤
│ Container Engine │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│ Sistema Operacional (Host) │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│ Hardware (Host) │
└─────────────────────────────────────────────┘

## CPUs (Central Processing Units) and GPUs (Graphics Processing Units).

**CPU**
The CPU is often described as the “brain” of the computer because it handles a wide variety of computational tasks necessary for the system to operate.
It executes the instructions of computer programs through a fetch-decode-execute cycle.
These processors manage everything from basic arithmetic and logical operations to system control and input/output management.
Processors like the **Intel Core** series or **AMD Ryzen** series are designed for versatility, efficiently handling diverse workloads.

**GPU**
Initially developed to accelerate the rendering of images, videos, and 3D graphics, the GPU has evolved into a powerful processor optimized
for parallel computation. It is the reason behind the Generate AI boom that the world has seen in the last 3 years. GPUs contain thousands of smaller, specialized cores designed to perform many calculations simultaneously. This massively parallel architecture makes them exceptionally efficient not only for graphic designing but for other tasks involving high computation.
High-performance GPU examples include the **NVIDIA Blackwell B200,** **RTX4090**, and **AMD Radeon RX series** support AI development, gaming, graphic designing, and more

![CPU X GPU](https://cdn.analyticsvidhya.com/wp-content/uploads/2025/05/Info-2.webp)

## Usando Docker Compose

**Dockerfile:** define os comandos que vao formar o ambiente virtual com o servico que queremos consumir. Esse arquivo precisa ser compilado em uma imagem (na pratica e um binario).

### CLI

1. Cria o container

```bash
docker compose up
```

2. Inicia os serviços em segundo plano (modo detached), sem travar o terminal.

```bash
docker compose up --detach
```

OU

```bash
docker compose up -d
```

3. Cria o container especificando o path do `compose.yaml`

```bash
docker compose --file infra/compose.yaml up
```

OU

```bash
docker compose --f infra/compose.yaml up
```

4. Destrui o container docker

```bash
docker compose down
```

1. Recria o container (necessario quando fazemos alguma alteracao no docker compose)

```bash
docker compose up -d --force-recreate
```

### O que quer dizer que uma versao de imagem e Alpine

Quer dizer que a imagem foi gerada usando uma versao da distribuicao do Linux Alpine.
A imagem base do Alpine Linux ocupa menos de 10mb de espaco.

### Imagem do banco de dados

[Postgres Image](https://hub.docker.com/_/postgres)

## Instalando o `psql`

O `psql` é o **cliente de linha de comando oficial do PostgreSQL**.
`psql` é a ferramenta que você usa para se **conectar a um banco de dados PostgreSQL** e **executar comandos SQL** interativos.

```bash
psql --host=localhost --username=postgres --port=5333
```

## Jest

- a flag `--watch` vai rodar somente nos tests que sofrerem alguma mudanca.
- a flag `--watchAll` vai rodar em todos os testes.
- a flag `-- migrations` vai rodar somente os testes daquele folder.

### Rodando o Jest de forma linear

Isso faz o jest rodar os testes `sequencialmente`, o comportamento default dele e rodar em `paralelo`.

```json
"test": "jest --runInBand",
"test:watch": "jest --watchAll --runInBand",
```

## Como remover dados sensiveis do seu repositorio

[Remover dados confidenciais de um repositorio](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

[BFG Repo Cleaner](https://curso.dev/alunos/maion/b0dbda29-d784-4dd2-8ae5-e59eac4cc992)

## Atalhos

1. ctrl + p => possibilita pesquisar os arquivos do nosso projeto pelo nome.

- Mostra uma lista de arquivos com o nome do input.
- Tambem e possivel selecionar um campo dentro do arquivo exemplo: package@scripts

## MVC - Model Viewl Controller

O fluxo básico no padrão MVC é:
Controller → Model → Controller → View

1. Controllers
   O fluxo começa no **controller**, que recebe a **requisição do usuário** (por exemplo, uma requisição HTTP).
   Ele é responsável por **coordenar as operações entre um ou vários models**, e também decidir qual view deve ser renderizada.

O controller **não executa regras de negócio diretamente**, ele apenas **orquestra** a lógica da aplicação usando os models.
The controller does not execute business logic directly; it simply orchestrates the application flow by using the models.

```js
// produtoController.js
const Produto = require("./produtoModel");

function listarProdutos(req, res) {
  const produtos = Produto.listarProdutos();
  res.json(produtos); // responde com os dados para a view (aqui em JSON)
}

module.exports = { listarProdutos };
```

2. Models
   O **model** é responsável por representar a **lógica de negócio** e **interagir** com o **banco de dados**.
   Ele **computa, valida e manipula os dados** da aplicação.

```js
// produtoModel.js
const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Tênis", preco: 200 },
];

function listarProdutos() {
  return produtos;
}

module.exports = { listarProdutos };
```

3. View
   A view é responsável por **apresentar os dados ao usuário**, geralmente em forma de **HTML, JSON** ou outro formato.
   Ela **não contém lógica de negócio**, apenas exibe os dados que foram preparados pelo controller.

```js
// app.js
const express = require("express");
const app = express();
const produtoController = require("./produtoController");

app.get("/produtos", produtoController.listarProdutos);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

## TDD - Test Driven Development

TDD (Desenvolvimento Guiado por Testes) é uma técnica de desenvolvimento de software onde você escreve testes antes do código funcional.

### Estagios do TDD

1. Red
   Write a test that fails (because the code doesn’t exist yet).

2. Green
   Write the minimum code needed to make the test pass.

3. Refactor
   Improve the code without changing behavior, and ensure the test still passes.

## Provedores de banco de dados

**ElephantSQL (descontinuado)**

**mkdb (somente para desenvolvimento)**
(conta mkdb)[https://www.mkdb.sh/dashboard/database/cmbfotfuc000euwe0gtspq7ty/manage]

**Neon (gratuito)**
(conta neon)[https://console.neon.tech/app/projects/fragrant-voice-95124848?database=neondb]

**DigitalOcean (pago)**
(site digital ocean)[https://www.digitalocean.com/]

Precisa configurar um **self-signed certificate** in certificate chain (certificado autoassinado na cadeira de certificados)

### Desmembrando a URL de uma DB

// secretlint-disable
postgres://meuuser:minhasenha@meuhost.sobralnet.com:5432/meubanco

### SSL - Secure Sockets Layer

é um protocolo de segurança que criptografa a comunicação entre um cliente (como um navegador ou app) e um servidor (como um site ou banco de dados).

### Self-signed certificate

O erro que estamos enfrentando acontece porque **nossa aplicação não confia no certificado que a DigitalOcean apresentou** durante a tentativa de conexão com o banco de dados. Isso acontece porque o certificado é **autoassinado** ou não é reconhecido como confiável por padrão.

**Autoridade Certificadora (CA)**
Para resolver isso, **precisamos obter o certificado da DigitalOcean** (ou da autoridade que emitiu o certificado usado por ela). Assim, nossa aplicação poderá:

- Validar a identidade do servidor do banco de dados;
- Estabelecer uma conexão segura e confiável;
- Garantir que apenas a DigitalOcean e nosso servidor consigam interpretar os dados transmitidos.

Com o certificado configurado corretamente, todas as conexões futuras com o banco estarão protegidas contra interceptações e acessos não autorizados.

## Database Schema Migrations

**Migrations** são scripts ou arquivos que descrevem as alterações estruturais no banco de dados de forma controlada e versionada.
**Migrations** are a way to version and manage changes to a database schema over time, using code.

As migrações ajudam a transicionar o esquema do banco de dados do seu estado atual para um novo estado desejado:

- adicionando tabelas e colunas;
- removendo elementos;
- dividindo campos; ou
- alterando tipos e restrições.

### Arquivos de Migracao

Defini a **orderm** das alteracoes que vao ser feitas e as **alteracoes** em si.

### Framework de Migracao

Garantir que os arquivos vao ser lidos e executados na ordem e **um unica vez**.

Vamos utilizar o `node-pg-migrate` como framework.

### `node-pg-migrate`

Se por acaso alguem estiver fazendo o projeto com `typescript` tem como criar os arquivos com a extensao correta `.ts`, basta modificar o seu script de `migration:create`:

```json
"migration:create": "node-pg-migrate --migrations-dir infra/migrations --migration-file-language ts create"
```

Tambem sera necessario alterar os scripts de `migration:up` e `migration:down`, pois precisamos especificar o path do nosso `tsconfig.json`. Sendo assim os dois scripts alterados ficam como:

```json
"migration:up": "node-pg-migrate --migrations-dir src/infra/migrations --envPath .env.development --tsconfig tsconfig.json up",
"migration:down": "node-pg-migrate --migrations-dir src/infra/migrations --envPath .env.development --tsconfig tsconfig.json down"
```

Eu testei aqui e as migrations rodaram normalmente. Caso estejam usando o `pgAdmin4`, após registrarem o banco do `TabNews - Local`, vocês podem observar, dentro do `schema`, que será criada uma nova tabela com o nome de `pgmigrations`, onde ficarão registradas todas as migrations que foram executadas no banco de dados.

Dessa forma, o `node-pg-migrate` consegue controlar e organizar quais migrations já foram executadas e quais ele deve pular, evitando rodá-las em duplicidade.

#### Dry Run

O Uma **simulação** da execução da migration, **sem** aplicar nenhuma mudança real no banco.
Permite que você veja quais comandos SQL seriam executados, ajudando a identificar possíveis problemas antes de modificar o banco de dados de verdade.

#### Live Run

A execução de fato da migration — as alterações são aplicadas no banco de dados.

#### Rollback de banco de dados

https://octopus.com/blog/database-rollbacks-pitfalls

#### Clearing the database between tests

https://calpaterson.com/against-database-teardown.html

## Next

O compilador **Next.js**, escrito em **Rust** usando **SWC**, permite que o Next.js transforme e minimize seu código JavaScript para produção. Isso **substitui** o **Babel** para arquivos individuais e o **Terser** para minimizar pacotes de saída.

A compilação usando o compilador Next.js é 17x mais rápida que o Babel e está habilitada por padrão desde a versão 12 do Next.js. Se você tiver uma configuração Babel existente ou estiver usando recursos não suportados , seu aplicativo desativará o compilador Next.js e continuará usando o Babel.

[doc oficial do next](https://nextjs.org/docs/architecture/nextjs-compiler)

### SWC (Speedy Web Compiler)

SWC is an extensible **Rust-based** platform for the next generation of fast developer tools. It’s used by tools like **Next.js**, Parcel, and Deno, as well as companies like **Vercel**, ByteDance, Tencent, **Shopify**, Trip.com, and more.

SWC can be used for both **compilation** and **bundling**. For compilation, it **takes JavaScript / TypeScript** files using modern JavaScript features and outputs valid code that is supported by all major browsers.

[site oficial](https://swc.rs/)

### Next + Jest

[doc oficial do next](https://nextjs.org/docs/app/guides/testing/jest)
O submodulo que importamos do `Next` para dentro do `Jest` por padrao nao carrega as variaveis de ambientes do `.env.development` em ambiente de test.

## Agile is Dead

https://www.youtube.com/watch?v=a-BOSpxYJ9M

## Estrategias de Branch

1. Trunk-based Development
2. Feature Branch
3. Git Flow

### Trunk-based Development

Sempre usar como base a timeline principal - a branch principal (main). _Maluquice isso aqui porra_

Para tentar organizar o codigo utiliza-se:

- **Feature flags** => desenvolvedores comitam código de uma feature incompleta ou parcialmente funcional, mas escondido por uma flag condicional onde somente algumas pessoas ou o time interno poderao visualizar.
- **Branch by Abstraction** => É uma técnica que permite fazer mudanças significativas no código sem precisar criar uma branch separada, e sem quebrar a aplicação enquanto a mudança está em progresso.
- **Pair programming**
- Bateria de testes automatizados.

### Feature Branch (Github Flow)

Cria uma branch para cada feature do projeto a partir da `main` - por exemplo trocar o banco de dados de postgres para mysql (`feature/db-mysql`). Entende-se que a main vai ser sempre o codigo atualizado, aquele que esta em producao.

### Git Flow

Tudo comeca na branch `main`, a qual contem o codigo no seu estado mais puro e pronto.
As alteracoes sao feitas na branch `develop` que inicialmente herda o estado da branch `main` mas que e modificada atraves do tempo por `feature branches`. Quando a feature e encerrada ela e mergada na `develop`, caso estivessemos falando de um sprint apos todas as features serem feitas e serem mergeadas na develop elas serao passadas para uma branch `release` onde todo o codigo sera revisado, somente apos isso sera feito o merge com a branch `main`.
Caso algum bug critico em producao seja encontrado, cria-se uma nova branch `hotfix` que herda o estado da `main` e depois sao mesclados nela.

**🟢 Branches principais:**

- `main` → produção
- `develop` → preparação para próxima versão

**🟡 Branches auxiliares:**

- `feature/*` → para novas funcionalidades
- `release/*` → fase de congelamento e testes
- `hotfix/*` → correções críticas direto na produção

## Concurrently

Pacote para run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.

### Flags

- `-n` ou `--name` → utilizada para dar nome aos processos no terminal, caso contrario aparece somente valores numericos de acordo com a quantidade de processos rodando.
- `--hide` → esconde os logs de um processo pelo nome.
- `--kill-others` ou `-k` → encerra os processos do concurrently. O problema e que isso retornar um exit code com error signal = 1.
- `--success` ou `-s` + `command-jest` → utilizado para definir qual o comando o concurrently vai observar para definir o seu exit code.

## Commits

### Boas Práticas

- Separe cada mudança lógica em um commit diferente.  
  **Exemplo:** uma melhoria de performance em um componente e a implementação de uma nova funcionalidade devem ser feitos em commits separados.

- Cada commit deve ser justificável por seus próprios méritos.  
  A alteração precisa ter escopo completo: início, meio e fim. Evite criar commits que dependam de mudanças futuras para funcionar corretamente.

Respondendo à pergunta do filipedeschamps, acredito que, se levarmos em consideração a explicação que ele deu sobre deixar em um mesmo commit a implementação de uma nova feature e os testes automatizados dela, podemos seguir o mesmo raciocínio para as alterações na documentação que forem consequência de uma nova implementação ou de um ajuste de bug.

Dessa forma, se mergearmos esse commit e ele causar um novo bug, precisando revertê-lo, a documentação não ficará defasada nem desalinhada com o estado atual da aplicação.

Caso seja necessário reverter esse commit e, por algum motivo, manter o mesmo conteúdo da documentação aplicado nele, é fácil acessar esse commit, copiar o conteúdo e colar no escopo do código do novo commit.

Agora, se for uma implementação e uma alteração da documentação que não têm nenhuma relação entre as partes, a melhor opção seria um commit separado para cada uma, pelo próprio conceito de escopo que o filipedeschamps explicou durante a aula.

### Definindo a mensagem de um commit

Usar o tempo verbal no **imperativo do presente**.

#### Forma Errada

"**Ajustei** o bug de cadastro no backend"
"**Adicionei** um button maior na interface"

#### Forma Correta

"**Ajusta** o bug de cadastro no backend"
"**Adiciona** um button maior na interface"

O proprio `git` usa esse tempo verbal.

### Coventionals Commits

[Conventionals Commits Docs](https://www.conventionalcommits.org/en/v1.0.0/)

### Commitlint

[Commitlint Doc](https://commitlint.js.org/)
[Commitlint CLI](https://www.npmjs.com/package/@commitlint/cli)
[Commitlint conventional commits validation](@commitlint/config-conventional)

#### Testando

O comando `echo` no terminal envia uma string para a **saída padrão (stdout)**, não diretamente para a **entrada padrão (stdin)** de outro programa.

Mas você pode usar o resultado do echo para alimentar o **stdin** de outro comando usando um `pipe` **(|)**,

```bash
echo "teste" | npx commitlint
```

**Resposta**

```bash
⧗   input: teste
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

## Tipos da Licença

- Apache 2.0
- BSD (Berkeley Software Distribution)
- AGPL (Affero General Public License)
- MIT (Massachusetts Institute of Technology)

## Semantic Versioning

[ ].[ ].[ patch ]

- `patch`: quando uma alteração no software **não adiciona nenhum recurso novo** (feature), mas **corrige apenas bugs ou problemas de segurança**.
- `minor`: quando uma alteração no software **adiciona uma nova funcionalidade ou método**, mas **mantém a compatibilidade com versões anteriores** (ou seja, **não introduz mudanças que quebrem o funcionamento do que já existia**).
- `major`: quando uma alteração no software **introduz mudanças que quebram a compatibilidade com versões anteriores** (ou seja, mudanças incompatíveis que podem causar falhas em quem usa versões antigas).

_backwards compatible_: mantém a compatibilidade com versões anteriores.

### npm-check-updates

npm-check-updates upgrades your package.json dependencies to the latest versions, ignoring specified versions.

[doc npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```bash
npx npm-check-updates -i
```

##

## Outro

### 3 formas de escrever uma `query`

- Query sem parametros;
  **Exemplo:**

```ts
const dbVersionResult = await database.query({ text: "SHOW server_version;" });
const dbMaxConnResult = await database.query({ text: "SHOW max_connections" });
```

- Query com parametros fixos; e
  **Exemplo:**

```ts
const totalConnResult = await database.query({
  text: "SELECT * FROM pg_stat_activity WHERE datname = 'local_db';",
});
```

- Query com parametros dinamicos, passivel de SQL Injection.
  **Exemplo:**

Exemplo nao e passivel de SQL Injection.

```ts
const databaseName = process.env.POSTGRES_DB;
const totalConnResult = await database.query({
  text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';`,
});
```

Exemplo com SQL Injection

```ts
fetch(
  "http://localhost:800/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
);

export default async function status(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const updatedAt = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;

  const dbVersionResult = await database.query({
    text: "SHOW server_version;",
  });
  const dbMaxConnResult = await database.query({
    text: "SHOW max_connections;",
  });
  const totalConnResult = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';`,
  });

  const dbVersionValue = dbVersionResult?.rows[0].server_version;
  const dbMaxConnValue = dbMaxConnResult?.rows[0].max_connections;
  const totalConnValue = totalConnResult?.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersionValue,
        max_connections: parseInt(dbMaxConnValue),
        total_connections: totalConnValue,
      },
    },
  });
}
```

### PostgreSQL

- `pg_stat_activity` e `pg_stat_database`: são duas views do banco de dados, ou seja, são tabelas tradicionais que só é possível visualizar e não alterar.
  - A `pg_stat_activity` traz informações em tempo real com nível de detalhe muito maior, como por exemplo o IP de quem está conectado.

**Uma diferença entre o `PostgreSQL` e o `MySQL`:**

- `PostgreSQL`: ao se conectar, a sessão precisa estar vinculada a um banco de dados.
- `MySQL`: ao se conectar, é possível acessar o backend e depois especificar qual banco de dados usar.

### Query Sanitization ou Limpeza de Consulta

https://node-postgres.com/features/queries
Ele está destacando que a interpolação de valores dinâmicos na query está sendo feita da forma correta e segura — ou seja, usando placeholders ($1, $2, etc.) e passando os valores separados por meio do array values.

```ts
database.query({
  text: "SELECT * FROM users WHERE email = $1;",
  values: ["exemplo@email.com"],
});
```

### Como usar interpolacao em arquivos `.env`

Instalando a expansao do dotenv `dotenv-expand`.
Dotenv-expand adds variable expansion on top of dotenv.

```bash
npm install dotenv-expand --save
```

```txt
DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB
```

### Blob - Binary Large Object

É um tipo de dado usado para armazenar grandes quantidades de dados binários — como imagens, vídeos, PDFs, áudios ou qualquer arquivo binário — que não são facilmente representados como texto.

No **JavaScript** (especialmente no front-end), Blob é um objeto que representa dados **binários imutáveis**, geralmente usado para **criar arquivos** dinamicamente ou **manipular imagens, vídeos**, etc. sem precisar de arquivos reais no disco.

### Comando interessante para usar no curl

Adicionando o operador pipe `|` no nosso `curl` apos a url da request podemos redirecionar o output da request para a entrada do comando seguinte. Usando o `python3 -m` nos permite executar modulos do phyton como se fossem scripts e adicionando o `json.tool` ele vai formatar o json.

```bash
curl https://bitbites.com.br/api/v1/status | python3 -m json.tool
```

Da para usar o `jq` tambem que ja vem imbutido no sistema do Linux.

```bash
curl -s https://bitbites.com.br/api/v1/status | jq
{
  "updated_at": "2025-06-05T23:04:29.082Z",
  "dependencies": {
    "database": {
      "version": "16.9",
      "max_connections": 901,
      "total_connections": 1
    }
  }
}
```

Tambem e possivel passar um watch fazendo com que ele fique observando em um intervalo de tempo aquele http.

```bash
watch -n 10 'curl -s https://bitbites.com.br/api/v1/status | jq'
```

### Comandos do bash

#### Comando de listar os arquivos

`ls -l` - lista todos os arquivos na pasta mas de forma vertical.

#### Comando para ver o valor do ultimo exit code

```bash
echo $?
```

**Resposta sera um valor numerico**

```bash
130
```

_130 = SIGINT OU SIGNAL INTERRUPT_ acontece quando tu aperta ctrl + c para encerrar um processo no terminal.

#### Tempo de execucao de um comando

```bash
time npm rum test
```

```bash
real 0m13.115s
user 0m3.610s
sys 0m1.613s
```

#### cat - concatenate

Lê arquivos (ou entrada padrão, stdin) e escreve seu conteúdo na saída padrão (stdout).

```bash
cat package.json
```

**Resposta**

```bash
{
  "name": "curso-dev",
  "version": "1.0.0",
  "description": "",
  "license": "MIT",
  "author": "Cristian Giehl",
  "type": "module",
  "main": "src/pages/index.tsx",
  "scripts": {
    "dev": "npm run services:up && npm run wait-for-postgres && npm run migration:up && next dev",
    "build": "next build",
    "start": "next start",
    "services:up": "docker compose -f src/infra/compose.yaml up -d",
    "services:stop": "docker compose -f src/infra/compose.yaml stop",
    "services:down": "docker compose -f src/infra/compose.yaml down",
    "lint:prettier:check": "prettier --check .",
    "lint:prettier:fix": "prettier --write .",
    "lint:eslint:check": "next lint --dir .",
    "test": "npm run services:up && concurrently -n next,jest --hide next -k -s command-jest \"next dev\" \"jest --runInBand --verbose\"",
    "test:watch": "jest --watchAll --runInBand",
    "migration:create": "node-pg-migrate --migrations-dir src/infra/migrations --migration-file-language ts create",
    "migration:up": "node-pg-migrate --migrations-dir src/infra/migrations --envPath .env.development --tsconfig tsconfig.json up",
    "migration:down": "node-pg-migrate --migrations-dir src/infra/migrations --envPath .env.development --tsconfig tsconfig.json down",
    "migrations:build": "tsc -p tsconfig.build.json",
    "wait-for-postgres": "node --experimental-transform-types src/infra/scripts/wait-for-postgres.ts",
    "prepare": "husky"
  },
  "dependencies": {
    "async-retry": "^1.3.3",
    "dotenv": "^16.5.0",
    "dotenv-expand": "^12.0.2",
    "lucide-react": "^0.511.0",
    "next": "^13.1.6",
    "pg": "^8.11.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.8.1",
    "@commitlint/config-conventional": "^19.8.1",
    "@types/async-retry": "^1.4.9",
    "@types/jest": "^29.5.14",
    "@types/pg": "^8.15.2",
    "@types/react": "19.1.6",
    "concurrently": "^9.1.2",
    "eslint": "^8.57.1",
    "eslint-config-next": "^14.2.4",
    "eslint-config-prettier": "^10.1.5",
    "eslint-plugin-jest": "^28.6.0",
    "husky": "^9.1.7",
    "jest": "^29.6.2",
    "node-pg-migrate": "^8.0.1",
    "prettier": "^3.5.3",
    "ts-jest": "^29.3.4",
    "ts-node": "^10.9.2",
    "typescript": "5.8.3"
  }
}
```

Permite criar um arquivo e editar ele no terminal

```bash
cat > novo.txt
```

### Commitizen

Package para mostrar os types dos commits (ci, feat, docs, etc)
