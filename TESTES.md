
# T05 — Matriz de testes responsivos

## Ambiente de teste

- Navegador: Chrome ou Edge atualizado.
- Dispositivo principal: computador com Windows.
- Método: ferramentas de desenvolvedor e, quando possível, celular real.
- Página: `prototipo/index.html`.

## Matriz de dimensões

| Largura CSS | Condição | Resultado esperado |
|---|---|---|
| 320 px | Antes do breakpoint de 384 px | Conteúdo sem rolagem horizontal da página |
| 384 px | No breakpoint de 384 px | Espaçamentos e navegação ajustados |
| 385 px | Depois do breakpoint de 384 px | Layout continua legível |
| 767 px | Antes do breakpoint de 768 px | Uma coluna principal |
| 768 px | No breakpoint de 768 px | Layout de duas colunas onde definido |
| 769 px | Depois do breakpoint de 768 px | Colunas sem sobreposição |
| 1199 px | Antes do breakpoint de 1200 px | Conteúdo dentro do limite de largura |
| 1200 px | No breakpoint de 1200 px | Largura máxima aplicada |
| 1201 px | Depois do breakpoint de 1200 px | Conteúdo centralizado |

## Testes funcionais e de acessibilidade

| Teste | Condição | Resultado esperado |
|---|---|---|
| Zoom | Ampliar para 200% | Conteúdo e controles continuam acessíveis |
| Orientação | Retrato e paisagem | Nenhum conteúdo essencial desaparece |
| Texto longo | Inserir palavra extensa | Texto quebra sem alargar a página |
| Conteúdo vazio | Deixar seção sem texto temporariamente | Layout permanece estável |
| Conteúdo repetido | Duplicar um artigo temporariamente | Espaçamento permanece consistente |
| Teclado | Navegar usando Tab e Enter | Foco visível e ordem coerente |
| Celular real | Abrir a página no celular | Conteúdo utilizável sem overflow |
| Imagens | Quando forem adicionadas | Dimensões e alternativas textuais adequadas |

## Registro dos resultados

Preencher após executar cada teste:

- Data:
- Navegador e versão:
- Dimensão testada:
- Resultado: aprovado / reprovado / não executado
- Evidência:
- Problema encontrado e correção:

**Nota:** os resultados devem refletir testes realmente executados.
Não marcar como aprovado um teste apenas porque existe uma regra CSS.
