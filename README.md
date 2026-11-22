# Data Intelligence Platform

Plataforma que pretende combinar análise de dados, IA e machine learning para insights estratégicos.

> **Estado atual (auditoria de 2026-11-22):** o repositório contém apenas uma página
> React estática que apresenta a proposta e os recursos planejados. ETL, visualizações,
> automação de ML, escalabilidade e colaboração **ainda não estão implementados**.
> Não há backend, banco de dados nem chamadas a APIs externas.

## Stack

React 18 + TypeScript + Vite 6 + Tailwind CSS 3. Testes com Vitest + Testing Library.

## Requisitos

Node.js 20 ou superior (o CI usa Node 22) e npm.

## Instalação e execução

```bash
npm ci
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Qualidade

```bash
npm run lint       # ESLint
npm run typecheck  # tsc -b
npm test           # Vitest
```

O workflow `.github/workflows/ci.yml` roda lint, typecheck, testes, build e `npm audit` a cada push/PR.

## Variáveis de ambiente

Nenhuma. O projeto não lê variáveis de ambiente.

## Recursos planejados

- ETL automatizado
- Visualizações interativas
- Automação de modelos ML
- Escalabilidade
- Colaboração em equipe

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch de feature
3. Faça commit das mudanças
4. Envie a branch e abra um Pull Request

## Licença

O README original indica MIT, mas o repositório não contém um arquivo `LICENSE`.

## Contato

linkedin.com/in/wellington-de-lima-catarina

---
Desenvolvido com ❤️ por Wellington de Lima Catarina
