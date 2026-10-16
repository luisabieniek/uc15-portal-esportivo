# Relatório Final — T09
## Auditoria de acessibilidade, SEO e desempenho

### 1. Objetivo

Auditar o portal esportivo quanto à acessibilidade, às boas práticas, ao SEO e ao desempenho, utilizando o Lighthouse no Google Chrome.

### 2. Ambiente de teste

- **Ferramenta:** Lighthouse, no Google Chrome.
- **Ambiente:** execução local por HTTP (`127.0.0.1:8000`).
- **Dispositivo simulado:** computador (Desktop).
- **Tipo de medição:** laboratório, realizada durante o carregamento da página.
- **Observação:** os resultados podem variar conforme o ambiente e as condições de execução.

### 3. Resultados antes e depois

| Categoria | Antes | Depois |
|---|---:|---:|
| Desempenho | 87 | 99 |
| Acessibilidade | 100 | 100 |
| Práticas recomendadas | 100 | 100 |
| SEO | 100 | 100 |

O desempenho aumentou 12 pontos após a otimização da imagem de destaque. As outras categorias mantiveram a pontuação máxima nas duas execuções.

### 4. Problemas identificados e correções

**4.1. Imagem de destaque muito pesada**

- **Evidência:** `destaque-futebol.png` tinha aproximadamente 2.280 KB.
- **Impacto:** contribuía para o volume de dados transferidos e poderia prejudicar o carregamento do conteúdo principal.
- **Correção:** conversão para WebP, com qualidade 82.
- **Resultado:** `destaque-futebol.webp` passou a ocupar aproximadamente 169,6 KB, redução de cerca de 92,6%.
- **Validação:** após a substituição da referência no HTML e uma nova auditoria, o desempenho passou de 87 para 99.

**4.2. CSS não utilizado**

- **Evidência:** o Lighthouse estimou 214 KiB de economia potencial.
- **Impacto:** estilos não utilizados podem aumentar o volume de recursos carregados.
- **Ação:** registrar como oportunidade de melhoria; não remover estilos sem verificar sua utilização.

**4.3. JavaScript não utilizado**

- **Evidência:** economia estimada de 157 KiB.
- **Impacto:** código desnecessário pode aumentar o processamento e o volume transferido.
- **Ação:** manter os recursos necessários às funcionalidades do portal e avaliar futuras otimizações.

**4.4. Minificação de CSS e JavaScript**

- **Evidência:** economia estimada de 6 KiB em CSS e 2 KiB em JavaScript.
- **Impacto:** possibilidade de reduzir o tamanho dos arquivos.
- **Ação:** registrar como melhoria futura, considerando a economia estimada e a necessidade de manter o código-fonte legível para desenvolvimento.

**4.5. Cache de navegação**

- **Evidência:** o Lighthouse informou dois motivos que impediam a restauração da página pelo cache de voltar/avançar.
- **Impacto:** o retorno à página anterior pode ficar mais lento.
- **Ação:** investigar os motivos específicos apresentados pelo relatório antes de alterar o código.

**4.6. Volume total transferido**

- **Evidência:** o Lighthouse registrou 2.701 KiB.
- **Impacto:** um volume elevado de recursos pode aumentar o tempo de carregamento, especialmente em conexões lentas.
- **Correção aplicada:** otimização da imagem de destaque.
- **Resultado:** desempenho final de 99; o volume total deverá ser conferido novamente na aba Rede.

### 5. Acessibilidade e SEO

O Lighthouse apresentou pontuação 100 para acessibilidade e SEO nas duas execuções. Esse resultado é positivo, mas não comprova sozinho conformidade integral com WCAG 2.2 nem garante posicionamento nos mecanismos de busca.

A validação manual deve incluir navegação somente por teclado, foco visível, nomes acessíveis, estrutura semântica e funcionamento dos formulários. Também devem ser verificados o título, a descrição, a URL canônica, a configuração para robôs e a equivalência do conteúdo em telas menores.

**Evidências manuais:** registrar os testes efetivamente realizados antes de considerar esses itens concluídos.

### 6. Métricas de desempenho

Na primeira execução, foram observados:

- FCP: 0,4 s.
- LCP: 2,5 s.
- TBT: 0 ms.
- CLS: 0.

A pontuação de desempenho passou de 87 para 99 após a otimização da imagem. Os valores finais de LCP, FCP, TBT e CLS devem ser registrados a partir do relatório posterior à correção.

O INP não foi registrado nesta auditoria de laboratório. Para avaliar a experiência real dos usuários, são necessários dados de campo quando disponíveis.

### 7. Limitações

As pontuações do Lighthouse representam uma execução específica e podem variar. Ferramentas automáticas não identificam todos os problemas de acessibilidade e não garantem resultados de SEO ou ganhos universais de desempenho.

### 8. Conclusão

A auditoria identificou oportunidades de otimização, principalmente no tamanho da imagem de destaque. A conversão para WebP reduziu significativamente o tamanho desse recurso e foi seguida por um aumento de 87 para 99 na pontuação de desempenho.

As pontuações de acessibilidade, práticas recomendadas e SEO permaneceram em 100. As verificações manuais e as métricas finais que ainda não foram registradas devem ser completadas antes do encerramento definitivo da auditoria.