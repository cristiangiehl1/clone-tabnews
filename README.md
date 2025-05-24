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
  - [CI (Continuous Integration)](#ci-continuous-integration)

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

## CI (Continuous Integration)
