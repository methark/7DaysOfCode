// Variáveis de Sessão
// Aplicação que solicita informações do usuário como o nome, idade, linguagem de programação preferida, gosta de estudar esta linguagem e responde de acordo, utilizando os dados nas variáveis.
// Por Methark - Arthur Braga

// Variáveis Globais
// Usuario [nome][idade][linguagem-de-programação][gosta] (Array que simula um SGBD e evita a redundância de código)
let usr = ["","","",""];
let respostas = ["Muito bem, " + usr + "! Quantos anos você tem?"];

// Início do programa
document.getElementById("robot-talk").innerHTML = "Olá!!! Para entrar na MATRIX, você deve me responder algumas coisas...<br><br>Qual o seu nome?";

// Trata das entradas do usuário
function answers()
{
    if(usr[0] == "") // nome do usuário
    {
        if(document.getElementById("respostas").value == "")
        {
            document.getElementById("robot-talk").innerHTML = "O campo está vazio...<br><br>Consegue ver o retângulo branco debaixo de mim?";
        }
        else
        {
            nome = document.getElementById("respostas").value;
            usr[0] = nome;
            document.getElementById("robot-talk").innerHTML = "Muito bem, " + nome + "!<br><br>Quantos anos você tem?";
        }
        limpaFoco();
    }
    else if(usr[0] != "" && usr[1] == "") // idade do usuário
    {
        if(isNaN(Number(document.getElementById("respostas").value)) || document.getElementById("respostas").value >= 110 || document.getElementById("respostas").value == "")
        {
            document.getElementById("robot-talk").innerHTML = "Isto não é uma idade " + usr[0] + ". Concorda?<br><br>Tente novamente, por gentileza.";
        }
        else
        {
            idade = document.getElementById("respostas").value;
            usr[1] = idade;
            document.getElementById("robot-talk").innerHTML = "E qual é a linguagem de programação que você está estudando?";
        }
        limpaFoco();
    }
    else if(usr[0] != "" && usr[1] != "" && usr[2] == "") // linguagem de programação
    {
        linguagemProgramacao = document.getElementById("respostas").value;
        usr[2] = linguagemProgramacao;
        document.getElementById("robot-talk").innerHTML = "Uau! " + nome + "!<br>Com " + idade + " anos, e estudando " + linguagemProgramacao + "! Meus parabéns!<br><br>Você gosta?";
        limpaFoco();
    }
    else if(usr[0] != "" && usr[1] != "" && usr[2] != "" && usr[3] == "") // gosta de estudar?
    {
        gosta = document.getElementById("respostas").value;
        usr[3] = gosta.toLowerCase();
        if(gosta == true || gosta.toLowerCase() == "sim")
        {
            document.getElementById("robot-talk").innerHTML = "Muito bom!<br><br>Você entrou na MATRIX, " + nome + "!";
        }
        else
        {
            document.getElementById("robot-talk").innerHTML = "Ah! Que pena que você não gosta de estudar " + usr[2] + "!<br>Você já tentou outra linguagem?<br>Não posso te deixar entrar na MATRIX.";
        }
        limpaFoco();
        document.getElementById("respostaUsr").innerHTML = "REINICIAR";
        document.getElementById("respostaUsr").href = "javascript:window.location.reload()";
    }
    else // Todas as perguntas foram respondidas.
    {
        document.getElementById("respostaUsr").innerHTML = "REINICIAR";
        document.getElementById("respostaUsr").href = "javascript:window.location.reload()";
    }
}

// Limpa e dá foco no campo de respostas do usuário
function limpaFoco()
{
    document.getElementById("respostas").value = "";
    document.getElementById("respostas").focus();
}

// Checa para verificar se o campo não é vazio
function emptyField()
{
    if (str.length === 0)
    {
        console.log("The string is empty");
    }
}