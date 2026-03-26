const aluno = {
    nome:"Isabela",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"; //Adicionar
aluno.idade = 18; //Alterar

delete aluno.curso; //Remover

console.log(aluno);