//esse é o codigo do relogio
function atualizarRelogio() {
    const agora = new Date();
    
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um zero à esquerda se o número for menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Formata a string para HH:MM:SS
    const horarioAtual = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').textContent = horarioAtual;
}

// Atualiza imediatamente e depois a cada 1 segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);



//Parte do historico do funcionario
const botao = document.querySelector('.button');
const listaPontos = document.querySelector('#lista-pontos');

botao.addEventListener('click', function() {

    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    const horario = `${horas}:${minutos}`;

    const registro = document.createElement('p');

    registro.textContent = `Ponto registrado às ${horario}`;

    listaPontos.appendChild(registro);

});