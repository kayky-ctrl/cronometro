// Variáveis do cronômetro
let segundos = 0;
let milissegundos = 0;
let intervalo = null;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Botões de troca de tema
const mudaTemaLua = document.getElementById('mudaTemaLua');
const mudaTemaSol = document.getElementById('mudaTemaSol');

// Eventos do cronômetro
startBtn.addEventListener('click', iniciarCronometro);
pauseBtn.addEventListener('click', pausarCronometro);
resetBtn.addEventListener('click', resetarCronometro);

// Eventos de troca de tema
mudaTemaLua.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    atualizaBotoesTema();
});

mudaTemaSol.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    atualizaBotoesTema();
});

// Atualiza os botões de tema com base no estado atual
function atualizaBotoesTema() {
    if (document.body.classList.contains('dark-mode')) {
        mudaTemaLua.style.display = 'none';
        mudaTemaSol.style.display = 'block';
    } else {
        mudaTemaLua.style.display = 'block';
        mudaTemaSol.style.display = 'none';
    }
}

// Configura o estado inicial dos botões de tema ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    atualizaBotoesTema();
});

// Funções do cronômetro
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