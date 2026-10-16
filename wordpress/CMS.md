# CMS — Quadra Aberta

## 1. Objetivo

Documentar a preparação e o processo de migração do portal esportivo Quadra Aberta para WordPress, conforme os requisitos da tarefa T10.

## 2. Estado atual

- Repositório do projeto: https://github.com/luisabieniek/uc15-portal-esportivo
- Protótipo original: pasta `prototipo/`.
- Arquivos iniciais de tema: pasta `wordpress/`.
- Ambiente WordPress: ainda precisa ser validado para instalação de temas personalizados.
- Publicação em produção: pendente.
- Testes de migração: pendentes.

## 3. Estrutura de temas

- `tema-pai/`: contém os arquivos iniciais do tema base.
- `tema-filho/`: contém o CSS do tema filho, o arquivo `functions.php` e o CSS personalizado.
- O tema filho deverá herdar do tema pai sem modificar diretamente os arquivos do tema base.

## 4. Ambiente

Antes da publicação, registrar:

- Provedor e endereço do ambiente.
- Versão do WordPress e do PHP.
- Banco de dados utilizado.
- Certificado HTTPS.
- Diferenças entre desenvolvimento, homologação e produção.

Não registrar senhas, tokens ou outras credenciais neste documento.

## 5. Banco de dados e arquivos

Antes de qualquer migração, criar backup do banco de dados e dos arquivos enviados, incluindo imagens e outros uploads.

Documentar o local seguro dos backups, a data de criação, o responsável e o procedimento de restauração.

A restauração deverá ser testada em ambiente separado antes de ser considerada confiável.

## 6. Usuários e permissões

Criar usuários de teste com apenas as permissões necessárias para cada atividade.

Não compartilhar contas administrativas. Acesso administrativo deverá ser limitado às pessoas responsáveis pela manutenção.

## 7. Plugins

Os plugins deverão ser escolhidos somente quando houver uma necessidade identificada.

Para cada plugin, documentar:
- Requisito atendido.
- Dados acessados ou armazenados.
- Impacto no desempenho e na segurança.
- Procedimento para desativar ou reverter a instalação.

Plugins instalados: ainda não definidos.

## 8. Homologação e publicação

1. Confirmar que o ambiente permite instalar o tema necessário.
2. Preparar um ambiente de homologação.
3. Fazer backup antes da migração.
4. Migrar e testar páginas, links, formulários e imagens.
5. Corrigir URLs quando necessário, usando uma ferramenta apropriada.
6. Validar HTTPS, responsividade, acessibilidade e console do navegador.
7. Publicar somente após a aprovação dos testes.

## 9. Plano de rollback

Se a publicação apresentar falhas críticas:

1. Interromper novas alterações.
2. Restaurar a versão anterior do código.
3. Restaurar o backup do banco de dados e dos uploads, se necessário.
4. Verificar páginas e fluxos essenciais.
5. Registrar o incidente e a correção aplicada.

## 10. Pendências

- [ ] Confirmar o plano e os recursos disponíveis no WordPress.
- [ ] Validar os arquivos de tema em uma instalação compatível.
- [ ] Definir os ambientes de homologação e produção.
- [ ] Executar e registrar backup e restauração.
- [ ] Documentar plugins e usuários efetivamente configurados.
- [ ] Realizar os testes antes de publicar.
- [ ] Registrar a URL publicada e o procedimento de rollback.
