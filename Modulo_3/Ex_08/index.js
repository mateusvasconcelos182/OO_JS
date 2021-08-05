/*
    Crie um objeto que tenha características de um caminhão e coloque em propriedades distintas;
    Com destructuring coloque essas propriedades em variáveis separadas;
*/


let caminhao = {
    eixos: 2,
    rodas: 12,
    portas: 2,
    combustivel: "Diesel",
    carga: "animais"
};

// {var} = objeto
// [var] = array

let(eixos, rodas, portas, combustivel, carga) = caminhao;


console.log(eixos, rodas, portas, combustivel, carga);