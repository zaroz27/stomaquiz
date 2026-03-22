// --- BANCO DE DADOS CORRIGIDO ---
// --- BANCO DE DADOS (LIMPO E SEM ERROS DE VÍRGULA) ---
const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "img/lingua_pilosa.jpg",
        dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' no dorso da língua.", "Pode estar associada ao tabagismo."]
    },
    { 
        nome: "morsicatio buccarum", 
        url: "img/morsicatio.jpg",
        dicas: ["Hábito de mordiscamento da mucosa.", "Aspecto macerado.", "Localizada na linha de oclusão."]
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade."]
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg",
        dicas: ["Opalescência cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."]
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg",
        dicas: ["Placa branca não removível à raspagem.", "Associação com tabagismo.", "Potencial de transformação maligna."]
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg",
        dicas: ["Placas brancas removíveis.", "Sintomatologia de queimação.", "Comum em imunossuprimidos."]
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg",
        dicas: ["Neoplasia maligna mais comum.", "Úlcera com bordas endurecidas.", "Não cicatriza em 15 dias."]
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg",
        dicas: ["Nódulo vermelho que sangra fácil.", "Crescimento reacional.", "Comum em gestantes."]
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg",
        dicas: ["Ruptura de ducto salivar.", "Nódulo flutuante azulado.", "Comum no lábio inferior."]
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg",
        dicas: ["Mancha vermelha aveludada.", "Altíssimo potencial de malignidade.", "Bordas bem definidas."]
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg",
        dicas: ["Fissuras nas comissuras labiais.", "Perda de dimensão vertical.", "Infecção mista."]
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg",
        dicas: ["Proliferação de vasos sanguíneos.", "Vitropressão positiva.", "Geralmente congênito."]
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg",
        dicas: ["Neoplasia vascular (HHV-8).", "Marcador de HIV/AIDS.", "Manchas arroxeadas no palato."]
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg",
        dicas: ["Câncer de melanócitos.", "Regra do ABCDE.", "Pior prognóstico em mucosa."]
    },
    {
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg",
        dicas: ["Palato branco com pontos vermelhos.", "Inflamação de glândulas salivares.", "Fumantes de cachimbo."]
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "img/lvp.jpg",
        dicas: ["Múltiplas placas brancas.", "Altíssimo risco de câncer.", "Resistente ao tratamento."]
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "img/carcinoma_verrucoso.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento verruciforme.", "Raramente dá metástase."]
    },
    { 
        nome: "eritroleucoplasia", 
        url: "img/eritroleucoplasia.jpg",
        dicas: ["Lesão mista branca e vermelha.", "Risco de câncer superior à branca pura.", "Áreas atróficas e queratóticas."]
    },
    { 
        nome: "malformação vascular", 
        url: "img/malformacao_vascular.jpg",
        dicas: ["Anomalia presente ao nascimento.", "Não regride.", "Pode ter pulsação."]
    },
    { 
        nome: "osteorradionecrose", 
        url: "img/osteorradionecrose.jpg",
        dicas: ["Exposição óssea pós-radiação.", "Hipovascularização.", "Dor e sequestro ósseo."]
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "img/lpcg.jpg",
        dicas: ["Nódulo gengival arroxeado.", "Surge do ligamento periodontal.", "Erosão óssea em taça."]
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "img/fop.jpg",
        dicas: ["Nódulo gengival firme.", "Possui calcificações.", "Exclusivo da gengiva."]
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "img/hiperplasia_medicamentosa.jpg",
        dicas: ["Aumento gengival por remédios.", "Inicia nas papilas.", "Fenitoína ou Ciclosporina."]
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Glândula sublingual.", "Ventre de rã."]
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg",
        dicas: ["Úlcera profunda no palato.", "Simula câncer.", "Cura espontânea."]
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg",
        dicas: ["Mancha plana pigmentada.", "Aumento de melanina.", "Lábio inferior."]
    },
    { 
        nome: "líquen plano erosivo", 
        url: "img/liquen_plano.jpg",
        dicas: ["Áreas vermelhas e estrias brancas.", "Forma dolorosa.", "Bilateral e simétrico."]
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg",
        dicas: ["Verrucosa (HPV).", "Múltipla e séssil.", "Couve-flor."]
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg",
        dicas: ["Projeções digitiformes.", "HPV 6 ou 11.", "Única e pediculada."]
    },
    { 
        nome: "estomatite urêmica", 
        url: "img/estomatite_uremica.jpg",
        dicas: ["Insuficiência renal.", "Cheiro de amônia.", "Melhora com diálise."]
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg",
        dicas: ["Nódulo amarelado macio.", "Tumor de gordura.", "Vasos superficiais."]
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg",
        dicas: ["Tumor salivar mais comum.", "Crescimento lento.", "Cauda da parótida."]
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg",
        dicas: ["Malignidade salivar comum.", "Pode ser azulado.", "Palato ou parótida."]
    }
];

// --- VARIÁVEIS DE CONTROLE ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let totalScore = 0;
let timer;
let timeLeft = 45;
let lives = 3;

// --- INÍCIO ---
window.onload = () => {
    prepararNovoJogo();
};

function prepararNovoJogo() {
    filaDeJogo = [...bancoDeLesoes].sort(() => Math.random() - 0.5).slice(0, 30);
    totalScore = 0;
    currentCaseIndex = 0;
    lives = 3;
    document.getElementById('pts').innerText = totalScore;
    updateLivesDisplay();
    loadCase();
}

function loadCase() {
    if (currentCaseIndex >= filaDeJogo.length) {
        alert("Parabéns! Você terminou o quiz.");
        prepararNovoJogo();
        return;
    }

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    // Reset visual
    imgElement.style.filter = "blur(15px)";
    imgElement.src = caso.url + "?v=" + new Date().getTime();

    attempts = 0;
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').focus();
    document.getElementById('current-hints-list').innerHTML = "Analise a imagem...";
    
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 45;
    document.getElementById('timer-display').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = timeLeft;
        if (timeLeft <= 0) { 
            perderVida("O tempo acabou!"); 
        }
    }, 1000);
}

function checkGuess() {
    const input = document.getElementById('guess-input');
    // Remove acentos e espaços para facilitar o acerto
    const guess = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (guess === correto) {
        acertou();
    } else {
        errou();
    }
}

function acertou() {
    clearInterval(timer);
    totalScore += 50 - (attempts * 10);
    document.getElementById('pts').innerText = totalScore;
    alert("Correto! Próximo caso...");
    currentCaseIndex++;
    loadCase();
}

function errou() {
    attempts++;
    if (attempts >= 4) {
        perderVida("Muitas tentativas erradas!");
        return;
    }
    
    // Diminui o blur e mostra dicas
    document.getElementById('lesion-image').style.filter = `blur(${15 - (attempts * 4)}px)`;
    const div = document.createElement('div');
    div.innerHTML = `<strong>Pista ${attempts}:</strong> ${filaDeJogo[currentCaseIndex].dicas[attempts-1]}`;
    if (attempts === 1) document.getElementById('current-hints-list').innerHTML = "";
    document.getElementById('current-hints-list').appendChild(div);
}

function perderVida(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    alert(`${motivo}\nEra: ${filaDeJogo[currentCaseIndex].nome.toUpperCase()}`);
    
    if (lives <= 0) {
        alert("Fim de Jogo! Tente novamente.");
        prepararNovoJogo();
    } else {
        currentCaseIndex++;
        loadCase();
    }
}

function updateLivesDisplay() {
    const display = document.getElementById('lives-display');
    if(display) display.innerHTML = "❤️".repeat(lives);
}

// Atalho Tecla Enter
document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
