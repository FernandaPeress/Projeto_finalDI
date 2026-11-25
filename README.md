# Coutinho Lava Jato

Site institucional do **Coutinho Lava Jato**, lava jato e estética automotiva no Riacho Fundo II, Brasília – DF.

> Limpeza que valoriza, brilho que impressiona.

## Sobre o projeto

Site com páginas separadas (Início, Serviços, Sobre e Contato), feito com HTML, CSS e JavaScript puros, sem frameworks e sem dependências para instalar.

## Funcionalidades

- Página inicial com destaques, promoções da semana e diferenciais
- Catálogo de serviços com abas (Lavagens e Estética automotiva), preços e promoções
- Indicador automático de "Aberto agora" ou "Fechado agora", de acordo com o horário de funcionamento
- Formulário de agendamento que envia a mensagem pronta pelo WhatsApp
- Botão flutuante de WhatsApp em todas as páginas
- Seção de depoimentos de clientes
- Layout responsivo, para celular, tablet e computador
- Animações suaves e acessibilidade básica (navegação por teclado e respeito à preferência de movimento reduzido)

## Estrutura dos arquivos

```
├── index.html     # conteúdo e estrutura do site
├── style.css      # cores, fontes e layout
├── script.js      # dados dos serviços, menu, páginas e formulário
└── img/
    └── logo.png   # logo do lava jato
```

## Como ver o site no computador

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.

Para atualizar a página automaticamente ao salvar, use a extensão **Live Server** no VS Code.

## Como editar

Tudo que muda com frequência fica no começo do arquivo `script.js`:

- **`SERVICOS`**: nomes, descrições, preços e promoções dos serviços.
  - `p` é o preço normal e `por` é o preço promocional.
  - `dias` define os dias da promoção.
  - `dest: 1` faz o serviço aparecer em destaque na página inicial.
- **`DEPOIMENTOS`**: depoimentos reais de clientes, no formato `{nome:'Maria S.', texto:'Meu carro ficou impecável!'}`.
- **`HORA`**: horário de funcionamento de cada dia da semana.
- **`TEL`**: número de WhatsApp usado nos botões e no formulário.

As cores ficam no começo do `style.css`, na parte `:root`.

## Publicar com GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Branch**, escolha `main` e a pasta `/ (root)`, depois clique em **Save**.
3. Em alguns minutos o site fica disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Contato

- **Endereço:** Riacho Fundo II, QS 06, Bloco E, Lote 03 – Brasília/DF
- **WhatsApp:** (61) 99424-4624
- **Instagram:** [@coutinholavacar2026](https://instagram.com/coutinholavacar2026)

## Horário de funcionamento

- Segunda a sexta: das 10:00 às 19:20
- Sábado: das 10:00 às 19:40
- Domingo: das 10:00 às 17:40