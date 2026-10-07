class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    public exibirInformacoes(): void {
        console.log("Nome: " + this.nome);
        console.log("Preço: R$ " + this.preco);
    }
}

produto.exibirInformacoes();