let funcionarios = [
    { id: "ABC", nome: "Frodo", salario: 1500 },
    { id: "DEF", nome: "Aragorn", salario: 3200 },
    { id: "GHI", nome: "Gandalf", salario: 7000 },
    { id: "JKL", nome: "Legolas", salario: 5800 }
];

function ajusteSal() {
    let salarioAumentado = funcionarios.map((funcionario) => {
        // Reajusta o salário em 5%
        funcionario.salario *= 1.05;
        return funcionario; // Retorna o objeto ajustado
    });
    
    // Exibe os salários ajustados no console
    console.log(salarioAumentado);
}

ajusteSal();

let alunos = [
    { id: "01", nome: "Chaves", nota: 4.9 },
    { id: "02", nome: "Chiquinha", nota: 7.0 },
    { id: "03", nome: "Quico", nota: 10.0 },
    { id: "04", nome: "Inhonho", nota: 6.5 },
    { id: "05", nome: "Pops", nota: 8.1 }
];

function alunosAprovados() {
    let aprovados = alunos.reduce((acc, aluno) => {
        if (aluno.nota >= 7.0) {
            acc.push(aluno); // Adiciona o aluno ao acumulador
        }
        return acc; // Retorna o acumulador
    }, []); // Inicializa o acumulador como um array vazio

    // Exibe os alunos aprovados no console
    console.log(aprovados);
}

alunosAprovados();

let clientes = [
    { id: "1", nome: "Jon", sobrenome: "Snow" },
    { id: "2", nome: "Tyrion", sobrenome: "Lannister" },
    { id: "3", nome: "Daenerys", sobrenome: "Targaryen" },
    { id: "4", nome: "Sansa", sobrenome: "Stark" }
];

function obterNomesESobrenomes() {
    let nomesESobrenomes = clientes.map(cliente => {
        return {
            nome: cliente.nome,
            sobrenome: cliente.sobrenome
        };
    });

    // Exibe os nomes e sobrenomes no console
    console.log(nomesESobrenomes);
}

obterNomesESobrenomes();

let notas = [7.5, 8.1, 4.0, 5.3, 10.0, 9.7];

function calcularMedia() {
    // Soma todas as notas usando reduce
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    
    // Calcula a média
    let media = soma / notas.length;
    
    // Exibe a média no console
    console.log("Média:", media);
}

calcularMedia();
