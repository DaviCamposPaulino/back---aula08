import * as readline from "readline";

class ContaBancaria {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }
}

const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const conta = new ContaBancaria("001", 100);

ler.question("Digite o valor para sacar: ", (valor) => {
    conta.sacar(Number(valor));

    ler.question("Digite o valor para depositar: ", (valor) => {
        conta.depositar(Number(valor));

        console.log("Saldo final: R$ " + conta.getSaldo());

        ler.close();
    });
});