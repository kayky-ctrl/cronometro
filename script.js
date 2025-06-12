let segundos = 0;
let milissegundos = 0;
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
        milissegundos += 10;
        if (milissegundos >= 1000) {
            milissegundos = 0;
            segundos++;
        }
        atualizaDisplay();
    }, 10);
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null; // Reseta o intervalo
    atualizaDisplay(); 
}

function resetarCronometro() {
    pausarCronometro();
    segundos = 0; // Reseta os segundos
    milissegundos = 0; // Reseta os milissegundos
    atualizaDisplay();
}

function formatarTempo(segundosTotais, milissegundos) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    const ms = Math.floor(milissegundos / 10); // Exibe apenas dois dígitos de milissegundos
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

function atualizaDisplay() {
    display.textContent = formatarTempo(segundos, milissegundos);
}