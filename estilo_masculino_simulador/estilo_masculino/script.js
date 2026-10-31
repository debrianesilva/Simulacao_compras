// Preços dos produtos. Eles devem ser iguais aos valores exibidos no HTML.
const produtos = [
    { nome: "Camiseta Essencial", preco: 59.90 },
    { nome: "Calça Jeans Clássica", preco: 129.90 },
    { nome: "Jaqueta Urban", preco: 189.90 }
];

const VALOR_MINIMO_DESCONTO = 300;
const PERCENTUAL_DESCONTO = 0.10;

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function perguntarQuantidade(produto) {
    let quantidade;

    while (true) {
        const resposta = prompt(
            `Quantas unidades de ${produto.nome} você deseja?\n` +
            `Preço unitário: ${formatarMoeda(produto.preco)}\n` +
            `Digite 0 caso não queira este produto:`
        );

        // Se a pessoa cancelar o prompt, consideramos quantidade zero.
        if (resposta === null) {
            return 0;
        }

        quantidade = Number(resposta);

        if (Number.isInteger(quantidade) && quantidade >= 0) {
            return quantidade;
        }

        alert("Digite uma quantidade inteira igual ou maior que zero.");
    }
}

function simularCompra() {
    let totalBruto = 0;
    let totalItens = 0;
    const resumo = [];

    // Pergunta a quantidade de cada produto e calcula seu subtotal.
    produtos.forEach(function(produto) {
        const quantidade = perguntarQuantidade(produto);
        const subtotal = produto.preco * quantidade;

        totalBruto += subtotal;
        totalItens += quantidade;

        resumo.push(
            `${produto.nome}\n` +
            `Quantidade: ${quantidade}\n` +
            `Valor: ${formatarMoeda(subtotal)}`
        );
    });

    if (totalItens === 0) {
        alert("Nenhum produto foi selecionado. Sua compra não foi realizada.");
        return;
    }

    // Aplica 10% de desconto quando o valor bruto chega a R$ 300,00.
    let desconto = 0;

    if (totalBruto >= VALOR_MINIMO_DESCONTO) {
        desconto = totalBruto * PERCENTUAL_DESCONTO;
    }

    const totalFinal = totalBruto - desconto;

    const mensagem =
        "RESUMO DA SUA COMPRA\n\n" +
        resumo.join("\n\n") +
        "\n\n------------------------------\n" +
        `Subtotal: ${formatarMoeda(totalBruto)}\n` +
        `Desconto: ${formatarMoeda(desconto)}\n` +
        `TOTAL A PAGAR: ${formatarMoeda(totalFinal)}` +
        (desconto > 0
            ? "\n\nParabéns! Você recebeu 10% de desconto."
            : `\n\nAdicione produtos até atingir ${formatarMoeda(VALOR_MINIMO_DESCONTO)} para ganhar 10% de desconto.`);

    alert(mensagem);
}
