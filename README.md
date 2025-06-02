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
      - [Extra](#extra)
    - [Estagios de um arquivo no Git](#estagios-de-um-arquivo-no-git)
    - [Como alterar um commit que ja foi para a origin](#como-alterar-um-commit-que-ja-foi-para-a-origin)
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
  - [Como remover dados sensiveis do seu repositorio](#como-remover-dados-sensiveis-do-seu-repositorio)
  - [Atalhos](#atalhos)
  - [MVC - Model Viewl Controller](#mvc---model-viewl-controller)
  - [TDD - Test Driven Development](#tdd---test-driven-development)
    - [Estagios do TDD](#estagios-do-tdd)
  - [Outro](#outro)
    - [3 formas de escrever uma `query`](#3-formas-de-escrever-uma-query)
    - [PostgreSQL](#postgresql)
    - [Query Sanitization ou Limpeza de Consulta](#query-sanitization-ou-limpeza-de-consulta)
  - [Provedores de banco de dados](#provedores-de-banco-de-dados)
    - [Desmembrando a URL de uma DB](#desmembrando-a-url-de-uma-db)

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

#### Extra

`ls -l` - lista todos os arquivos na pasta mas de forma vertical.

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

## Vercel

https://curso.dev/web/novos-deploys

A Vercel mantem URL's para deploys antigos, bem util para poder observar qual o ultimo commit que estava funcionando antes de subir um bug.

## DNS (Domain Name System)


### Como o computador sabe o IP de uma DNS?
O DNS tem intuito de converter um dominio em um endereco de IP (Internet Protocol).


### Fluxo para acessar um site
                             
| Servidor DNS                                       | Computador (Cliente)                                              | Servidor Final (ex: tabnews.com.br)                          |
|----------------------------------------------------|-------------------------------------------------------------------|--------------------------------------------------------------|
|                                                    | 1. Solicita o IP de `tabnews.com.br` para o servidor              |                                                              |
| 2. Converte o domínio para IP                      |                                                                   |                                                              |
| 3. Envia o IP correspondente (`103.88.235.44`)     | 4. Recebe o IP e estabelece conexão com o servidor                | 4.1. Recebe a requisição HTTP                                |
|                                                    |                                                                   | 5. Processa a requisição:                                    |
|                                                    |                                                                   | - Verifica headers HTTP                                      |
|                                                    |                                                                   | - Verifica cookies, tokens, autenticação                     |
|                                                    |                                                                   | - Busca os dados solicitados (HTML, JSON, CSS, JS, etc.)     |
|                                                    | 6. Recebe a resposta com o conteúdo da página                     | - Retornar:                                                  |
|                                                    |                                                                   | a) HTML inicial (SSR/SSG)                                    |
|                                                    |                                                                   | b) JS chunks (React + paginas)                               |
|                                                    |                                                                   | c) CSS (em arquivos ou inline)                               |
|                                                    |                                                                   | d) JSON ccom dados (para navegacao client-side)              |
|                                                    | 7. Navegador monta e hidrata a SPA:                               |                                                              |
|                                                    | a)  Analisa o HTML e constrói o DOM                               |                                                              |
|                                                    | b) Detecta `<script>` / `<link>` e baixa os **chunks JS/CSS**     |                                                              |
|                                                    | c) Executa o JS; React/Next cria o Virtual DOM                    |                                                              |
|                                                    | d) **Hidrata** o DOM já existente ou faz o primeiro render (CSR)  |                                                              |
|                                                    | e) Anexa event listeners e inicia o roteador de cliente           |                                                              |
|                                                    | f) Faz fetchs adicionais se necessário (dados de rotas/API)       |                                                              |




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

| tabnews  |  .com  |           .br             |        .        |
|          |        |  TLD (Top-Level Domain)*  |   root domain   |


(*): os TLD's sao divididos em duas sub-categorias: (i) ccTLDs - Country Code Top-Level Domains (domains reservados a paises). Ex: pt - portgual, br - brasil, ca - canada; (ii) gTLDs - Generic Top-Level Domains, Ex: .com, .org, .net, .bradesco.


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
|   - pages
|   - models
|   | - user.js
|   | - content.js
|   | - password.js 
|   - infra
|   | - database.js
|   | - migrations
|   | - provisioning
|   | | - staging
|   | | - production
|   - tests   


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
import { soma } from './soma';

test('soma dois números corretamente', () => {
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
import express from 'express';
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (name && email) return res.status(201).send();
  return res.status(400).send();
});
export default app;
```

```ts
// app.test.ts
import request from 'supertest';
import app from './app';

describe('POST /users', () => {
  it('deve criar um usuário com dados válidos', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Alice', email: 'alice@example.com' });

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
import { test, expect } from '@playwright/test';

test('usuário pode se cadastrar', async ({ page }) => {
  await page.goto('https://meuapp.com');
  await page.click('text=Registrar');
  await page.fill('input[name="email"]', 'usuario@teste.com');
  await page.fill('input[name="senha"]', '123456');
  await page.click('button[type="submit"]');
  await expect(page.locator('.mensagem')).toContainText('Cadastro realizado');
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

1) Nao vai mostrar todos os detalhes do header da response
```bash
curl http://localhost:3000/api/status
```

1) Mostra os detalhes do protocolo HTTP

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
(*) - mostra **ações internas** que o `curl` está realizando (resolução de DNS, conexão, etc).
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
1) cada camada da aplicacao: 
2) banco de dados; 
3) servicos de emails; etc.  
O custo de processamento subiria demais.

┌──────────────────────┬──────────────────────┐
│     Aplicação        │    Banco de Dados    │
├──────────────────────┼──────────────────────┤
│  Sistema Operacional │  Sistema Operacional │
│     (Guest)          │     (Guest)          │
├──────────────────────┴──────────────────────┤
├─────────────────────────────────────────────┤
│               Virtualizador                 │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│         Sistema Operacional (Host)          │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│              Hardware (Host)                │
└─────────────────────────────────────────────┘


### Vagrant - Surgimento 2010
Foi uma solucao para tornar mais facil a configuracao de uma virtual machine. 


### Docker - Surgimento em 2013
Foi uma abstracao do `Namespaces` e `Control Groups` do Linux.
O docker e uma interface programatica que permite a configuracao de containers (o agrupamento de recursos) dentro de um sistema operacional que ja esta rodando,
sem a necessidade de utilizar uma VM.

┌──────────────────────┬──────────────────────┐
│     Aplicação        │    Banco de Dados    │
├──────────────────────┴──────────────────────┤
├─────────────────────────────────────────────┤
│              Container Engine               │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│         Sistema Operacional (Host)          │
├─────────────────────────────────────────────┤
├─────────────────────────────────────────────┤
│              Hardware (Host)                │
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
1) Cria o container
```bash
docker compose up
```

2) Inicia os serviços em segundo plano (modo detached), sem travar o terminal.
```bash
docker compose up --detach 
```

OU

```bash
docker compose up -d 
```

3) Cria o container especificando o path do `compose.yaml`
```bash
docker compose --file infra/compose.yaml up
```

OU 

```bash
docker compose --f infra/compose.yaml up
```

4) Destrui o container docker
```bash
docker compose down
```

1) Recria o container (necessario quando fazemos alguma alteracao no docker compose)
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

## Como remover dados sensiveis do seu repositorio
[Remover dados confidenciais de um repositorio](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

[BFG Repo Cleaner](https://curso.dev/alunos/maion/b0dbda29-d784-4dd2-8ae5-e59eac4cc992)


## Atalhos

1) ctrl + p => possibilita pesquisar os arquivos do nosso projeto pelo nome.
- Mostra uma lista de arquivos com o nome do input.
- Tambem e possivel selecionar um campo dentro do arquivo exemplo: package@scripts

## MVC - Model Viewl Controller
O fluxo básico no padrão MVC é:
Controller → Model → Controller → View

1) Controllers 
O fluxo começa no **controller**, que recebe a **requisição do usuário** (por exemplo, uma requisição HTTP).
Ele é responsável por **coordenar as operações entre um ou vários models**, e também decidir qual view deve ser renderizada.

O controller **não executa regras de negócio diretamente**, ele apenas **orquestra** a lógica da aplicação usando os models.
The controller does not execute business logic directly; it simply orchestrates the application flow by using the models.

```js
// produtoController.js
const Produto = require('./produtoModel');

function listarProdutos(req, res) {
  const produtos = Produto.listarProdutos();
  res.json(produtos); // responde com os dados para a view (aqui em JSON)
}

module.exports = { listarProdutos };
```

2) Models
O **model** é responsável por representar a **lógica de negócio** e **interagir** com o **banco de dados**.
Ele **computa, valida e manipula os dados** da aplicação.

```js
// produtoModel.js
const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Tênis', preco: 200 },
];

function listarProdutos() {
  return produtos;
}

module.exports = { listarProdutos };
```

3) View
A view é responsável por **apresentar os dados ao usuário**, geralmente em forma de **HTML, JSON** ou outro formato.
Ela **não contém lógica de negócio**, apenas exibe os dados que foram preparados pelo controller.

```js
// app.js
const express = require('express');
const app = express();
const produtoController = require('./produtoController');

app.get('/produtos', produtoController.listarProdutos);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
```


## TDD - Test Driven Development
TDD (Desenvolvimento Guiado por Testes) é uma técnica de desenvolvimento de software onde você escreve testes antes do código funcional.


### Estagios do TDD

1) Red
Write a test that fails (because the code doesn’t exist yet).

2) Green
Write the minimum code needed to make the test pass.

3) Refactor
Improve the code without changing behavior, and ensure the test still passes.


## Outro

### 3 formas de escrever uma `query`

- Query sem parametros;
**Exemplo:**
```ts
const dbVersionResult = await database.query({ text: 'SHOW server_version;' });
const dbMaxConnResult = await database.query({ text: 'SHOW max_connections' });
```

- Query com parametros fixos; e
**Exemplo:**
```ts
  const totalConnResult = await database.query({ text: "SELECT * FROM pg_stat_activity WHERE datname = 'local_db';" });
```

- Query com parametros dinamicos, passivel de SQL Injection.
**Exemplo:**

Exemplo nao e passivel de SQL Injection.
```ts
  const databaseName = process.env.POSTGRES_DB
  const totalConnResult = await database.query({ text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';` });
```

Exemplo com SQL Injection
```ts
fetch("http://localhost:800/api/v1/status?databaseName='; SELECT pg_sleep(4); --")

export default async function status(request: NextApiRequest, response: NextApiResponse) {
  const updatedAt = new Date().toISOString()
  const databaseName = process.env.POSTGRES_DB
  
  const dbVersionResult = await database.query({ text: 'SHOW server_version;' });
  const dbMaxConnResult = await database.query({ text: 'SHOW max_connections;' });
  const totalConnResult = await database.query({ text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';` });

  const dbVersionValue = dbVersionResult?.rows[0].server_version
  const dbMaxConnValue = dbMaxConnResult?.rows[0].max_connections
  const totalConnValue = totalConnResult?.rows[0].count
  
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersionValue,
        max_connections: parseInt(dbMaxConnValue),
        total_connections: totalConnValue,
      }
    }
  })
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


## Provedores de banco de dados

**ElephantSQL (descontinuado)**

**mkdb (somente para desenvolvimento)**
(conta mkdb)[https://www.mkdb.sh/dashboard/database/cmbfotfuc000euwe0gtspq7ty/manage]

**Neon (gratuito)**

**DigitalOcean (pago)**

### Desmembrando a URL de uma DB
postgres://meuuser:minhasenha@meuhost.sobralnet.com:5432/meubanco