# Reconstrução fiel do protótipo mobile FishinGO

## Objetivo
Substituir a experiência atual por um protótipo mobile clicável do FishinGO, reconstruído a partir das 41 páginas do PDF anexado. As telas serão reproduzidas no formato original de aproximadamente 402×874 px, com textos, estados, cores, proporções e hierarquia visual guiados pelas capturas.

## Estrutura visual compartilhada
- Criar uma moldura mobile centralizada no navegador, mantendo largura máxima próxima de 402 px e comportamento natural de rolagem vertical em telas extensas.
- Reproduzir barra de status, cabeçalhos, ondas em SVG, gradientes azuis e dourados, fundos frios/quentes, cartões, botões, campos, badges e barra inferior conforme as referências.
- Extrair do PDF as imagens e elementos visuais reutilizáveis quando possível; usar equivalentes apenas para fotos que não puderem ser isoladas.
- Criar componentes comuns apenas onde as telas realmente repetem o mesmo padrão: status bar, cabeçalho, botão, campo, etapa, mapa, modal, card de lote e navegação inferior.
- Implementar o controle de audiodescrição visto na página 10 nos pontos em que ele aparece, sem inventar novas funções.

## Rotas e telas
- Entrada: `/` redireciona para `/splash`; criar `/splash`, `/bem-vindo`, `/login` e `/escolha-perfil`.
- Cadastro do pescador: três etapas e confirmação, respeitando as páginas 6–9.
- Cadastro da peixaria: três etapas e confirmação, respeitando as páginas 12–15.
- Peixaria: home, mapa em seus estados, perfil real da página 20, detalhe do lote, confirmação e pedidos das páginas 16–23.
- Pescador: home, aviso de defesos, cadastro de pescado em quatro etapas, confirmação, perfil, pedidos em estados aceito/recusado, mapa em estados e perfil expandido da peixaria, conforme páginas 24–41.
- Usar a navegação nativa do projeto para obter o mesmo comportamento solicitado com rotas React, sem trocar a base técnica existente.

## Interações e estado local
- Criar um contexto único com dados mockados para sessão, perfil escolhido, novo lote, pedido e estados de mapa/modal.
- Login permitirá escolher ou inferir o fluxo de demonstração e seguirá para a home correspondente.
- O cadastro de pescado exigirá espécie, permitirá alterar peso e preço e recalculará a receita em tempo real.
- Ao publicar, o novo lote ficará disponível no fluxo da Peixaria durante a mesma sessão.
- A Peixaria poderá localizar João no mapa, selecionar o lote, ajustar quantidade e fazer o pedido.
- O pedido aparecerá no fluxo do Pescador e poderá ser aceito ou recusado, exibindo os estados das páginas 34 e 35.
- Pins do mapa, cartões, perfis, modal de defesos, botões de voltar e abas inferiores terão navegação funcional.

## Conteúdo e fidelidade
- Copiar literalmente os textos legíveis do PDF, incluindo diferenças intencionais como “Casa dos Peixes” e “Peixaria Surubim”.
- Usar os valores reais mostrados nas telas: João dos Santos, espécies, pesos, preços, lacre, horários, avaliações e estatísticas.
- Quando a descrição escrita conflitar com a captura, a captura prevalece; exemplo confirmado: página 20 é o perfil da Peixaria e página 10 é audiodescrição.
- Não adicionar configurações, chat, notificações ou qualquer tela ausente das referências.

## Validação
- Conferir cada rota contra sua página de referência em viewport 402×874.
- Testar o percurso completo de Pescador: entrada, cadastro de pescado, publicação, pedido recebido e decisão.
- Testar o percurso completo de Peixaria: entrada, mapa, seleção do lote, subtotal e pedido.
- Validar persistência durante a sessão, estados de botões, navegação inferior, modal e ausência de sobreposições.
- Garantir metadados próprios para as rotas de conteúdo e confirmar que a aplicação abre sem erros.
