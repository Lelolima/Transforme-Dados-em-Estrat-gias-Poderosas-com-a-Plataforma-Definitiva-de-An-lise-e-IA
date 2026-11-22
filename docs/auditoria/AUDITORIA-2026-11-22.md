# Auditoria 2026-11-22 — Data Intelligence Platform

## Diagnóstico (estado anterior)

| # | Problema | Severidade | Evidência |
|---|----------|-----------|-----------|
| 1 | Build quebrado: não existe `src/`; `index.html` importa `/src/main.tsx` | P0 (não executa) | `npm run build` → `Rollup failed to resolve import "/src/main.tsx"` |
| 2 | 24 vulnerabilidades em dependências (16 altas, 6 moderadas, 2 baixas), incluindo esbuild (dev server lê respostas de qualquer origem), react-router, brace-expansion, minimatch | P0 | `npm audit` |
| 3 | README descreve ETL, ML, visualizações etc. que não existem no código | P1 (informação falsa) | O repositório tinha apenas arquivos de configuração do template Vite |
| 4 | Sem CI e sem testes | P2 | `gh run list` vazio; sem script `test` |
| 5 | `index.html` com título do template e favicon `/vite.svg` inexistente | P3 | `index.html` |

Segredos: busca por padrões de chave/token/senha em todo o histórico (`git log -p --all`) — nada encontrado. gitleaks não está instalado nesta máquina; a busca foi manual por regex.

## Mudanças

- Página React mínima e honesta (`src/`) que apresenta a proposta e diz explicitamente que os recursos são planejados, não implementados. Não foi inventada funcionalidade.
- Dependências: vite 5 → 6.4, @vitejs/plugin-react 4.7, eslint 9.39, typescript-eslint 8.x, react-router-dom 6 → 7.18 (não é usado em nenhum código, então a troca de major não quebra nada), `npm audit fix` no restante.
- Testes com Vitest + Testing Library (3 testes) e script `typecheck`.
- CI `.github/workflows/ci.yml`: lint, typecheck, testes, build, `npm audit --audit-level=high`; `permissions: contents: read`; actions fixadas por SHA; sem deploy.
- README reescrito conforme a implementação; `.gitignore` ignora `*.tsbuildinfo`.

## Testes executados (localmente, Windows, Node do sistema)

- `npm run lint` → sem erros
- `npx tsc -b` → sem erros
- `npm test` → 3 passed (3)
- `npm run build` → ✓ built
- `npm audit` → found 0 vulnerabilities

## Riscos residuais e decisões do dono

- A plataforma descrita não existe; a página é apenas uma vitrine. Implementar os recursos é decisão de produto.
- `framer-motion`, `lucide-react` e `react-router-dom` continuam nas dependências sem uso; mantidos para não remover algo que o dono planeje usar.
- Não há arquivo `LICENSE` (README cita MIT). Não foi adicionado, pois licença é decisão do dono.
