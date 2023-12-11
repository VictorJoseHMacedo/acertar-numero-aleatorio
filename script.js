const numeroAleatorio = parseInt(Math.random() * 10 + 1);
const resultadoTentativa = document.getElementById('resultado-tentativa');
const numeroCorreto = document.getElementById('numero-correto')

const numeroAtual = document.getElementById('atual');

var tentativas = 0;
var quantidadeTentativas = 3;

function EnviarTentativa() {
    const palpiteUsuario = parseInt(document.getElementById('usuario-palpite').value);

    if(tentativas < quantidadeTentativas) {
        if(numeroAleatorio == palpiteUsuario ) {
            resultadoTentativa.innerHTML = 'Você acertou'
        } else if (numeroAleatorio > palpiteUsuario) {
            resultadoTentativa.innerHTML = 'Numero é maior';
            tentativas++
        } else {
            resultadoTentativa.innerHTML = 'Numero é menor'
            tentativas++
        }

        numeroAtual.textContent = tentativas + '/' + quantidadeTentativas;

        if(tentativas == quantidadeTentativas) {
            numeroCorreto.innerHTML = 'Acabou suas tentativas';
            resultadoTentativa.style.display = 'none';
        }
    }
}