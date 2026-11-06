# UniVaga

Site para universitários encontrarem quartos, kitnets, apartamentos, casas e repúblicas em Franca - SP.
Projeto Interdisciplinar do 1º semestre (Engenharia de Software I, Desenvolvimento Web I e Design Digital) — Fatec Franca.

**Equipe:** Kailaine Cristina Gomes Panigalli, Tayná Winy Luiz, Lana de Almeida Gobo e André Henrique Cintra dos Santos.

## Como executar

1. Extraia o ZIP e abra `index.html` no navegador.
2. Para uma experiência mais fiel, abra a pasta no VS Code e use a extensão Live Server.

Não é preciso instalar nada. A fonte (Public Sans e Lora) vem do Google Fonts e precisa de internet; sem conexão o navegador usa uma fonte do sistema.

## Páginas

| Arquivo | O que faz |
| --- | --- |
| `index.html` | Página inicial: apresentação, busca rápida, tipos de moradia, destaques e links para as demais páginas |
| `buscar.html` | Lista de imóveis com filtros e ordenação |
| `detalhes.html` | Detalhes de cada imóvel |
| `favoritos.html` | Imóveis salvos pelo usuário |
| `anunciar.html` | Formulário para anunciar um imóvel |
| `sobre.html` | História, missão, visão, valores e equipe |
| `contato.html` | Contatos e formulário de mensagem |
| `login.html`, `cadastro.html` | Telas de acesso (demonstrativas) |

## HTML, CSS e JavaScript

- `css/style.css`: identidade visual (paleta índigo/azul do logo), componentes e responsividade.
- `js/main.js`: comportamento das páginas, em JavaScript puro:
  - **Busca:** filtra por bairro/cidade, tipo e valor máximo, e ordena por preço; atualiza a contagem de resultados e mostra aviso quando não há imóveis. A busca da página inicial e os links por tipo também usam esses filtros.
  - **Favoritos:** o coração nos cartões e o botão em "detalhes" salvam no `localStorage`; a página de favoritos monta a lista a partir deles e o menu mostra a quantidade.
  - **Formulários:** validação com mensagens em português, máscara de telefone e confirmação de envio. "Anunciar" guarda o anúncio no navegador.
  - **Menu do celular:** fecha ao tocar em um link ou ao apertar Esc.
- `foto/`: fotos dos imóveis e logo, já otimizadas (JPG redimensionado, cerca de 2,4 MB no total).

## Importante sobre os dados

É um protótipo acadêmico sem servidor nem banco de dados. Imóveis, valores, endereços, proprietários, telefones e e-mails são fictícios; login, cadastro, contato e anúncio não enviam nada. Algumas fotos podem não corresponder à cidade ou ao tipo descritos.

## Checklist do manual do PI (1º semestre)

Atendido pelo site:
- [x] Logotipo, identidade visual e paleta de cores próprias
- [x] Layout de acordo com os padrões de mercado
- [x] Página inicial com apresentação do site e links para as páginas internas
- [x] Pelo menos 5 páginas internas, cada uma com texto e imagem ou foto (são 8)
- [x] HTML, CSS e JavaScript

A cargo da equipe (fora do código):
- [ ] Publicar o site com acesso online (por exemplo, GitHub Pages)
- [ ] Repositório na organização `FatecFranca` no GitHub, com commits de todos os integrantes
- [ ] Vídeo de até 5 minutos, público no YouTube, com fala de todos; o link deve estar no GitHub
- [ ] Entregar o link do GitHub e o do vídeo no Formulário de Entrega do PI, um mês antes do término das aulas (confira o calendário acadêmico da Fatec Franca)
- [ ] Engenharia de Software I: requisitos, Canvas, estudo de viabilidade, documentação e metodologia
