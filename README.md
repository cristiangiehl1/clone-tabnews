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
  - [Testes - TDD (Test Driven Development)](#testes---tdd-test-driven-development)
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
  - [HTTP (Hypertext Transfer Protocol)](#http-hypertext-transfer-protocol)
    - [Testando requisicoes HTTP com o CURL](#testando-requisicoes-http-com-o-curl)
  - [O que é Virtual Host?](#o-que-é-virtual-host)
    - [Hospedagem na Vercel (alguem pode confirmar essa info?)](#hospedagem-na-vercel-alguem-pode-confirmar-essa-info)

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


## Testes - TDD (Test Driven Development)

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
**Objetivo**: Testar a integração entre múltiplos componentes do sistema.

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

### Tipos comuns de API
**APIs Web (HTTP/REST/GraphQL)**: São acessadas pela internet.
**APIs de Bibliotecas:** Chamadas diretamente dentro do código (como funções de um SDK).
**APIs de Sistema Operacional:** Para interagir com o sistema, arquivos, rede, etc.

### Para que serve uma API
A principal utilidade de uma API (Interface de Programação de Aplicações) é facilitar a integração entre sistemas distintos, permitindo que eles se comuniquem sem que seja necessário 
entender a lógica interna ou a implementação de cada um. Em vez disso, basta seguir as regras e formatos definidos na documentação da API, 
que descrevem como fazer requisições e interpretar as respostas.


## HTTP (Hypertext Transfer Protocol)
The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links.
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
A Vercel utiliza a técnica de Virtual Host baseada em nome de domínio, utilizando apenas um endereço IP para todos os domínios no servidor.

Quando fazemos uma solicitação a um domínio hospedado na Vercel, ocorre o seguinte:
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

