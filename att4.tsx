class Estudante {
    private nome: string;
    private nota1: number;
    private nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    public exibirInformacoes(): void {
        console.log("Nome: " + this.nome);
        console.log("Nota 1: " + this.nota1);
        console.log("Nota 2: " + this.nota2);
        console.log("Média: " + this.calcularMedia());
    }
}

estudante.exibirInformacoes();