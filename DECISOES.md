## T06 — Integração do Bootstrap 5.3

**Versão:** Bootstrap 5.3.8.

**Origem:** https://getbootstrap.com/docs/5.3/getting-started/download/

**Licença:** MIT. Os arquivos oficiais e seus avisos de licença devem ser mantidos na distribuição do projeto.

**Componentes utilizados:**
- Offcanvas para navegação lateral.
- Accordion para apresentar informações adicionais.

**Decisão técnica:** o Bootstrap foi adotado para reutilizar componentes acessíveis e recursos responsivos, reduzindo a quantidade de JavaScript e CSS próprios necessários para comportamentos comuns.

**Comparação com a solução CSS própria:** o layout anterior utiliza Grid, Flexbox e media queries definidos no `styles.css`. O Bootstrap oferece classes responsivas reutilizáveis e componentes com comportamentos prontos. O CSS próprio continua responsável pela identidade visual e por ajustes específicos do projeto.

**Custos e limitações:** os arquivos locais aumentam o tamanho da entrega e precisam ser mantidos atualizados. A integração também exige verificar conflitos entre os estilos do Bootstrap e os estilos existentes. A vantagem é que os recursos funcionam sem depender de uma conexão externa, desde que os arquivos locais estejam presentes.

**Verificações:** testar teclado, foco visível, fechamento do menu, acordeão, larguras de 320 px, 768 px e 1200 px, além de abrir a página sem conexão à internet.


## T08 — Uso de jQuery 4

- **Biblioteca:** jQuery 4.0.0.
- **Licença:** MIT.
- **Origem:** https://jquery.com/download/
- **Interação escolhida:** botão para mostrar ou ocultar a seção “Sobre o portal”.
- **Justificativa:** demonstrar o uso de jQuery em uma interação pequena e isolada, sem substituir funcionalidades que já são simples em JavaScript nativo.
- **Eventos:** o evento utiliza o namespace `click.t08`, permitindo remover especificamente o manipulador da atividade.
- **Alternativa nativa:** `addEventListener`, `textContent` e a propriedade `hidden` poderiam implementar o mesmo comportamento sem biblioteca adicional.
- **Tamanho:** registrar o tamanho real do arquivo `jquery-4.0.0.min.js` no projeto.
- **Manutenção:** acompanhar as versões e informações oficiais do jQuery e manter os avisos de licença.
- **Plano de remoção:** substituir a interação por JavaScript nativo, remover o arquivo `t08.js` e retirar a dependência do jQuery do HTML caso ele não seja mais necessário.
- **Testes:** verificar o botão por mouse, teclado e toque; conferir o estado de `aria-expanded`; garantir que o evento não seja duplicado e que o Console não apresente erros.
