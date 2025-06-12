let segundos = 0;
let intervalo = null;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', iniciarCronometro);

pauseBtn.addEventListener('click', pausarCronometro);

resetBtn.addEventListener('click', resetarCronometro);

function iniciarCronometro() {
    if (intervalo) return; // Evita iniciar múltiplos cronômetros

    intervalo = setInterval(() => {
        segundos++;
        atualizaDisplay();
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null; // Reseta o intervalo
    atualizaDisplay(); // Atualiza o display para refletir a pausa
}

function resetarCronometro() {
    pausarCronometro(); // Pausa o cronômetro se estiver rodando
    segundos = 0; // Reseta os segundos
    atualizaDisplay(); // Atualiza o display para mostrar 00:00
}

function formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function atualizaDisplay() {
    display.textContent = formatarTempo(segundos);
}