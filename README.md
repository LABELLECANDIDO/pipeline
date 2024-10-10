# Meu Primeiro Pipeline

Este repositório contém um exemplo de um pipeline do GitLab que executa testes e análise de código usando Jest e ESLint.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- `dog.js`: Módulo que exporta uma função que simula o som de um cachorro.
- `dog.test.js`: Testes unitários para o módulo `dog.js`.
- `package.json`: Gerenciador de pacotes que contém as dependências e scripts do projeto.
- `.gitlab-ci.yml`: Configuração do pipeline do GitLab CI/CD.

## Módulo do Cachorro

O arquivo `dog.js` contém o seguinte código:

```javascript
module.exports = {
    bark: () => 'Au au',
};
```
## Testes do Módulo

O arquivo `dog.test.js` contém testes para verificar se o método `bark` retorna o som correto do cachorro.

```javascript
/* globals describe, test, expect */
const { bark } = require("./dog");

describe("dog test suite", () => {
    test("dog barks", () => {
        const result = bark();
        expect(result).toBe("Au au");
    });
});

```

## Configuração do Projeto

Para configurar o projeto, siga os passos abaixo:

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Execute o comando para instalar as dependências:

   ```bash
   npm install 
   ```
  

## Scripts

O `package.json` contém os seguintes scripts:

- `test`: Executa os testes usando Jest.
- `lint`: Executa a análise de código usando ESLint.

## CI/CD com GitLab

O arquivo `.gitlab-ci.yml` define as etapas do pipeline:

```yaml
image: node:latest

stages:
  - build
  - test
  - analyse

run-build:
  stage: build
  script:
    - npm install
  artifacts:
    paths:
      - node_modules

run-test:
  stage: test
  script:
    - npm run test
  artifacts:
    paths:
      - node_modules/

run-analyse:
  stage: analyse
  script:
    - npm run lint
```
    
## Estágios do Pipeline

- **Build**: Instala as dependências do projeto.
- **Test**: Executa os testes unitários.
- **Analyse**: Executa a análise de código.
