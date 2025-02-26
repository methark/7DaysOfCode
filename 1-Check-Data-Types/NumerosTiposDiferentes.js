// Detecta o tipo de dado em um array.
// Por Methark - Arthur Braga

//Declarando variáveis globais.
let numeros = [1, '1', 30, '30', 10, '10', true, "Texto Sem Nexo...", 0, false, 2.32, 2];
let resultado = '';

// Imprime os valores do array números para o usuário.
resultado += "<b>Lista de valores: " + numeros.toString(); + ".</b><br>"
document.getElementById("resultado").innerHTML += resultado + "<br>";

for(i = 0; i < numeros.length; i++) // Retorna os resultados no prompt.
{
    if(typeof numeros[i] === "string")
    {
        resultado = "A variável '" + numeros[i] + "' é do tipo " + (typeof numeros[i]) + "." + varDif(i, i + 1);
    }
    else
    {
        resultado = "A variável " + numeros[i] + " é do tipo " + (typeof numeros[i]) + "." + varDif(i, i + 1);
    }

    console.log(resultado.replaceAll(".undefined","."));
    document.getElementById("resultado").innerHTML += resultado.replaceAll(".undefined",".");  
}

// Verifica se duas variáveis são iguais ou diferentes.
function varDif(var1, var2)
{
    if(numeros[var1] == numeros[var2] && var2 < numeros.length)
    {
        return " Os valores " + numeros[var1] + " e " + numeros[var2] + " são iguais.<br>";
    }
    else if(var2 < numeros.length)
    {
        return " Os valores " + numeros[var1] + " e " + numeros[var2] + " são diferentes.<br>";
    }
}
