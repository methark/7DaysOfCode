// Detecta o tipo de dado em um array.
// Por Methark - Arthur Braga

//Declarando variáveis globais.
let numeros = [1, '1', 30, '30', 10, '10', true, "Texto Sem Nexo..."];
let resultado = '';

for(i = 0; i < numeros.length; i++) // Retorna os resultados no prompt.
{
    if(typeof numeros[i] === "string")
    {
        resultado = "A variável '" + numeros[i] + "' é do tipo " + (typeof numeros[i]) + ".<br>";
    }
    else
    {
        resultado = "A variável " + numeros[i] + " é do tipo " + (typeof numeros[i]) + ".<br>";
    }
    console.log(resultado);
    document.getElementById("resultado").innerHTML += resultado;
}