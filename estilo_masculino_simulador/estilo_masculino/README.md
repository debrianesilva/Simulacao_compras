# Estilo Masculino — Simulador de Compras

**Aluno(a):** [Debriane da Silva Conceição]  
**Trilha:** [Desenvolvimento Mobile]  
**Desafio:** Minha Loja: Simulador de Compras de Roupas Masculinas 

## Apresentação

A Estilo Masculino é uma loja fictícia de roupas masculinas criada para praticar HTML, CSS e JavaScript. A proposta visual utiliza azul-marinho, bege e tons neutros para transmitir versatilidade e elegância.

O projeto possui uma página de produtos masculinos e uma página “Sobre nós”.

## Produtos e preços

| Produto | Descrição | Preço |

| Camiseta Essencial | Camiseta confortável para o dia a dia. | R$ 59,90 |
| Calça Jeans Clássica | Calça versátil para combinações modernas. | R$ 129,90 |
| Jaqueta Urban | Jaqueta para os dias mais frescos. | R$ 189,90 |

## Regra de desconto

Compras com valor bruto igual ou superior a **R$ 300,00** recebem **10% de desconto**. O desconto é calculado pelo JavaScript e apresentado no resumo da compra.

## Tecnologias utilizadas

- HTML5: estrutura das páginas.
- CSS3: identidade visual, organização e responsividade.
- JavaScript: perguntas de quantidade, conversão com `Number()`, cálculos, regra de desconto e mensagens com `alert()`.

## Organização dos arquivos

```text
estilo-masculino/
├── index.html
├── sobre.html
├── style.css
|
├── script.js
└── README.md
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server.
4. Clique em **Simular compra**.
5. Informe uma quantidade inteira para cada produto. Digite `0` para não comprar um item.
6. Confira o resumo, o subtotal, o desconto (quando aplicável) e o total.



## Testes realizados

Preencha esta seção depois de executar os testes no navegador:

- [ ] Informar zero para todos os produtos: deve avisar que nenhum produto foi selecionado.
- [ ] Comprar somente uma camiseta: deve mostrar 1 unidade e R$ 59,90.
- [ ] Comprar 1 camiseta e 1 calça: subtotal de R$ 189,80, sem desconto.
- [ ] Comprar 1 camiseta e 2 calças: subtotal de R$ 319,70 e desconto de R$ 31,97.
- [ ] Digitar texto, número negativo ou quantidade decimal: deve solicitar uma quantidade inteira não negativa.
- [ ] Cancelar um prompt: deve considerar zero para aquele produto.

## Dificuldade encontrada e aprendizado

**Dificuldade:** [A principais dificuldades foi me orientar sem um design.Também tive difuldades em organizar os elmentos usando html e css ]

**O que aprendi:** [Explique o que aprendeu sobre funções, `prompt()`, `Number()`, cálculos, condicionais, `alert()` ou organização dos arquivos.]

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio para planejar a estrutura, revisar trechos de código e esclarecer conceitos. As sugestões foram adaptadas ao objetivo do desafio. O funcionamento deve ser conferido no navegador e o código deve ser estudado para que eu consiga explicar cada parte.

**Adaptações realizadas:** [Solicitei que escrevesse o código :root com as cores e também adicionasse o link e organizasse as fontes previamente escolhidas,também solicitei o apontamento e correção do código]

**Como verifiquei:** [Testei digitar 0 ou cancelar os prompts, confirmando que o sistema trata a ausência de itens corretamente.Simulei compras de itens isolados (ex: apenas a Camiseta Essencial) e combinações sem atingir a meta (1 camiseta + 1 calça), conferindo os valores exibidos no alert().Testei a combinação de 1 camiseta e 2 calças (totalizando R$ 319,70) para verificar se o desconto de 10% (R$ 31,97) foi aplicado e se o valor final foi calculado corretamente.Digitei textos, números negativos e decimais para garantir que o código valida as entradas e solicita um número inteiro não negativo.]
