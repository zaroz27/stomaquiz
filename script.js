const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "img/lingua_pilosa.jpg",
        dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' ou pelos no dorso da língua.", "Pode estar associada ao tabagismo ou má higiene."]
    },
    { 
        nome: "morsicatio buccarum", 
        url: "img/morsicatio.jpg",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."] 
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."] 
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."] 
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg",
        dicas: ["Placa branca não removível à raspagem.", "Associação direta com tabagismo.", "Potencial de transformação maligna."] 
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum após uso de antibióticos ou imunossupressão."] 
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."] 
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."] 
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e frequentemente azulado.", "Localização mais comum: lábio inferior."] 
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg",
        dicas: ["Mancha vermelha aveludada não diagnosticável como outra condição.", "Altíssimo potencial de malignidade.", "Bordas geralmente bem definidas."] 
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical (DVO).", "Infecção mista: Candida e Staphylococcus."] 
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão (diascopia) positivo.", "Pode ser congênito."] 
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Muito comum no palato de pacientes com HIV/AIDS.", "Máculas ou nódulos arroxeados."] 
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Regra do ABCDE: Assimetria, Bordas irregulares, Cores variadas.", "Pior prognóstico em mucosa oral que na pele."] 
    },
    {
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos centrais.", "Inflamação dos ductos de glândulas salivares menores.", "Comum em fumantes de cachimbo ou cigarro invertido."] 
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "img/lvp.jpg",
        dicas: ["Múltiplas placas brancas que se espalham progressivamente.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos convencionais."] 
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "img/carcinoma_verrucoso.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento exofítico, lento e verruciforme.", "Raramente sofre metástase."] 
    },
    { 
        nome: "eritroleucoplasia", 
        url: "img/eritroleucoplasia.jpg",
        dicas: ["Lesão mista com componentes brancos e vermelhos.", "Também chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia pura."] 
    },
    { 
        nome: "malformação vascular", 
        url: "img/malformacao_vascular.jpg",
        dicas: ["Anomalia estrutural presente ao nascimento.", "Não regride espontaneamente.", "Pode apresentar pulsação ou ruído à ausculta."] 
    },
    { 
        nome: "osteorradionecrose", 
        url: "img/osteorradionecrose.jpg",
        dicas: ["Exposição óssea após radioterapia em cabeça e pescoço.", "Hipovascularização, hipóxia e hipocelularidade.", "Dor intensa e sequestro ósseo."] 
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "img/lpcg.jpg",
        dicas: ["Nódulo gengival arroxeado ou azul-cianótico.", "Surge do ligamento periodontal ou periósteo.", "Pode causar erosão óssea superficial 'em taça'."] 
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "img/fop.jpg",
        dicas: ["Nódulo gengival firme, séssil ou pediculado.", "Contém calcificações (osso ou cemento) internas.", "Exclusivo da gengiva."] 
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "img/hiperplasia_medicamentosa.jpg",
        dicas: ["Aumento gengival associado a fármacos (Fenitoína, Ciclosporina, Nifedipina).", "Inicia-se nas papilas interdentais.", "Pode recobrir a coroa dos dentes."] 
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Proveniente da glândula sublingual.", "Aspecto de 'ventre de rã'."] 
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme profunda no palato.", "Simula clinicamente um carcinoma.", "Autolimitada (cura espontânea em semanas)."] 
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg",
        dicas: ["Lesão plana e pigmentada única.", "Aumento focal de produção de melanina.", "Local comum: vermelhão do lábio inferior."] 
    },
    { 
        nome: "líquen plano erosivo", 
        url: "img/liquen_plano.jpg",
        dicas: ["Áreas vermelhas ulceradas com estrias brancas (Wickham) periféricas.", "Forma clínica dolorosa.", "Frequentemente bilateral e simétrico."] 
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg",
        dicas: ["Lesão verrucosa transmitida sexualmente (HPV).", "Geralmente múltipla e de base séssil.", "Superfície romba (em couve-flor)."] 
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg",
        dicas: ["Projeções papilares digitiformes.", "Induzida pelo HPV 6 ou 11.", "Geralmente única e pediculada."] 
    },
    { 
        nome: "estomatite urêmica", 
        url: "img/estomatite_uremica.jpg",
        dicas: ["Ocorre em pacientes com insuficiência renal avançada.", "Placas brancas difusas e hálito com cheiro de amônia.", "Melhora significativamente após diálise."] 
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg",
        dicas: ["Nódulo amarelado de consistência macia à palpação.", "Tumor benigno de tecido adiposo.", "Frequentemente apresenta vasos superficiais (telangiectasias)."] 
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg",
        dicas: ["Tumor de glândula salivar mais comum.", "Massa firme de crescimento lento e indolor.", "Localização mais frequente: cauda da parótida."] 
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg",
        dicas: ["Malignidade de glândula salivar mais comum em adultos e crianças.", "Pode apresentar aspecto azulado (lembrando mucocele).", "Geralmente ocorre no palato ou parótida."] 
    }
];
// --- CONFIGURAÇÕES DO JOGO ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 12;
let totalScore = 0;
let timer;
let timeLeft = 45;
let lives = 3;
const MAX_LIVES = 3;
let hintRevealed = false;

window.onload = prepararNovoJogo;

function prepararNovoJogo() {
    // Certifique-se que o bancoDeLesoes está disponível globalmente
    filaDeJogo = [...bancoDeLesoes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 30);
    
    totalScore = 0;
    currentCaseIndex = 0;
    lives = MAX_LIVES;
    
    document.getElementById('pts').innerText = totalScore;
    updateLivesDisplay();
    updateRank();
    loadCase();
}

function loadCase() {
    if (filaDeJogo.length === 0) return;

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    // Reset de Estado
    imgElement.style.opacity = "0"; 
    blurValue = 12; 
    imgElement.style.filter = `blur(${blurValue}px)`;
    attempts = 0;
    hintRevealed = false;

    // Interface
    imgElement.src = caso.url;
    imgElement.onload = () => imgElement.style.opacity = "1";
    
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('feedback').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

    document.getElementById('current-hints-list').innerHTML = '<span style="color: #999; font-size:0.75rem;">Aguardando submissão...</span>';

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 45;
    const display = document.getElementById('timer-display');
    display.innerText = timeLeft;
    display.style.color = "#fff";

    timer = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if (timeLeft <= 10) display.style.color = "#ff4d4d";
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeout();
        }
    }, 1000);
}

function updateLivesDisplay() {
    const container = document.getElementById('lives-container');
    container.innerHTML = "❤️".repeat(lives) + "🖤".repeat(MAX_LIVES - lives);
}

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    const guess = inputField.value.toLowerCase().trim();
    const casoAtual = filaDeJogo[currentCaseIndex];
    
    if (guess === casoAtual.nome.toLowerCase()) {
        vitoria();
    } else {
        erro();
    }
}

function vitoria() {
    clearInterval(timer);
    const caso = filaDeJogo[currentCaseIndex];
    document.getElementById('lesion-image').style.filter = "blur(0px)";
    
    let pontos = Math.max(10, 50 - (attempts * 10));
    if (hintRevealed) pontos = Math.floor(pontos / 2);
    totalScore += pontos;
    document.getElementById('pts').innerText = totalScore;
    
    showReview(`✅ Excelente Diagnóstico!`, `Você identificou corretamente: <strong>${caso.nome.toUpperCase()}</strong>. <br><br>${caso.revisao || "Continue assim para dominar o Neville!"}`);
}

function erro() {
    attempts++;
    const caso = filaDeJogo[currentCaseIndex];

    if (attempts >= 4) {
        perderVida("Muitos erros no mesmo caso.");
        return;
    }

    blurValue = Math.max(0, blurValue - 3);
    document.getElementById('lesion-image').style.filter = `blur(${blurValue}px)`;
    
    const hintsList = document.getElementById('current-hints-list');
    if (attempts === 1) hintsList.innerHTML = ""; 

    if (caso.dicas && caso.dicas[attempts - 1]) {
        const div = document.createElement('div');
        div.className = 'hint-item';
        div.innerHTML = `<strong>Pista ${attempts}:</strong> ${caso.dicas[attempts - 1]}`;
        hintsList.appendChild(div);
    }
    document.getElementById('guess-input').value = "";
}

function perderVida(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    
    if (lives <= 0) {
        alert(`🚨 GAME OVER: ${motivo}\nSua pontuação final: ${totalScore}`);
        prepararNovoJogo();
    } else {
        alert(`${motivo} Você perdeu uma vida!`);
        showReview("❌ Caso Perdido", `O diagnóstico correto era: <strong>${filaDeJogo[currentCaseIndex].nome.toUpperCase()}</strong>.<br><br>${filaDeJogo[currentCaseIndex].revisao || ""}`);
    }
}

function timeout() {
    perderVida("O tempo esgotou!");
}

function fazerBiopsia() {
    if (confirm("Realizar biópsia? Ganhará apenas 5 pontos.")) {
        clearInterval(timer);
        totalScore += 5;
        document.getElementById('pts').innerText = totalScore;
        showReview("🔬 Laudo Histopatológico", `A biópsia confirmou: <strong>${filaDeJogo[currentCaseIndex].nome.toUpperCase()}</strong>.<br><br>${filaDeJogo[currentCaseIndex].revisao || ""}`);
    }
}

function revealExtraHint() {
    if (hintRevealed) return;
    hintRevealed = true;
    const caso = filaDeJogo[currentCaseIndex];
    const div = document.createElement('div');
    div.className = 'hint-item';
    div.style.color = "#8e44ad";
    div.innerHTML = `<strong>💡 Especialista:</strong> ${caso.dicas[caso.dicas.length - 1]}`;
    document.getElementById('current-hints-list').appendChild(div);
}

// --- CONTROLE DA MODAL DE REVISÃO ---
function showReview(title, text) {
    document.getElementById('review-title').innerHTML = title;
    document.getElementById('review-text').innerHTML = text;
    document.getElementById('review-modal').style.display = "flex";
    document.getElementById('lesion-image').style.filter = "blur(0px)";
}

function closeReview() {
    document.getElementById('review-modal').style.display = "none";
    nextLevel();
}

function updateRank() {
    let rank = "Acadêmico";
    if (totalScore > 300) rank = "Monitor";
    if (totalScore > 700) rank = "Residente";
    if (totalScore > 1200) rank = "Estomatologista";
    document.getElementById('rank').innerText = rank;
}

function nextLevel() {
    currentCaseIndex++;
    if (currentCaseIndex < filaDeJogo.length) {
        loadCase();
    } else {
        alert("Atlas concluído com sucesso!");
        prepararNovoJogo();
    }
}

document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
