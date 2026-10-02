// Relógio

function atualizarRelogio() {

    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horarioAtual = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').textContent = horarioAtual;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);


// Histórico do funcionário

const botao = document.querySelector('.button');
const listaPontos = document.querySelector('#lista-ponto');

let entrada = true;

botao.addEventListener('click', function() {

    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horario = `${horas}:${minutos}:${segundos}`;

    const registro = document.createElement('p');

    if (entrada) {

        registro.textContent = `🟢 Entrada às ${horario}`;

        entrada = false;

    } else {

        registro.textContent = `🔴 Saída às ${horario}`;

        entrada = true;
    }

    listaPontos.appendChild(registro);

});