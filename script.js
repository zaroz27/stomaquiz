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
// --- BANCO DE DADOS (Exemplo - Mantenha o seu original abaixo deste) ---
const bancoDeLesoes = [
    {
        nome: "Liquen Plano",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lichen_planus_6.jpg", // Exemplo online
        dicas: ["Linhas esbranquiçadas (Estrias de Wickham)", "Pode ser reticular ou erosivo", "Comum em mucosa jugal bilateral"],
        revisao: "O Líquen Plano é uma doença inflamatória crônica mediada por células T. O padrão reticular é o mais comum e apresenta as clássicas Estrias de Wickham."
    },
    {
        nome: "Leucoplasia",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Leukoplakia01.jpg",
        dicas: ["Placa branca que não sai à raspagem", "Termo clínico, não histopatológico", "Potencial de transformação maligna"],
        revisao: "A Leucoplasia é a lesão cancerizável mais comum da boca. O diagnóstico é feito por exclusão de outras placas brancas."
    }
];

// --- BANCO DE DADOS (Exemplo - Mantenha o seu original abaixo deste) ---
const bancoDeLesoes = [
    {
        nome: "Liquen Plano",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lichen_planus_6.jpg", // Exemplo online
        dicas: ["Linhas esbranquiçadas (Estrias de Wickham)", "Pode ser reticular ou erosivo", "Comum em mucosa jugal bilateral"],
        revisao: "O Líquen Plano é uma doença inflamatória crônica mediada por células T. O padrão reticular é o mais comum e apresenta as clássicas Estrias de Wickham."
    },
    {
        nome: "Leucoplasia",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Leukoplakia01.jpg",
        dicas: ["Placa branca que não sai à raspagem", "Termo clínico, não histopatológico", "Potencial de transformação maligna"],
        revisao: "A Leucoplasia é a lesão cancerizável mais comum da boca. O diagnóstico é feito por exclusão de outras placas brancas."
    }
];

// --- VARIÁVEIS DE CONTROLE ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 15;
let totalScore = 0;
let timer;
let timeLeft = 45;
let lives = 3;
const MAX_LIVES = 3;

// Inicialização
window.onload = prepararNovoJogo;

function prepararNovoJogo() {
    // Embaralha e seleciona 30 casos
    filaDeJogo = [...bancoDeLesoes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 30);
    
    totalScore = 0;
    currentCaseIndex = 0;
    lives = MAX_LIVES;
    
    document.getElementById('pts').innerText = totalScore;
    updateLivesDisplay();
    loadCase();
}

function loadCase() {
    if (currentCaseIndex >= filaDeJogo.length) {
        alert("🎉 Parabéns! Você concluiu o Atlas!");
        prepararNovoJogo();
        return;
    }

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    // IMPORTANTE: Reset de visual para a foto aparecer
    imgElement.style.opacity = "0"; 
    blurValue = 15; 
    imgElement.style.filter = `blur(${blurValue}px)`;
    
    // Troca a fonte da imagem
    imgElement.src = caso.url;
    
    // Só mostra a imagem quando ela terminar de carregar
    imgElement.onload = () => {
        imgElement.style.opacity = "1";
    };

    // Reset de Interface
    attempts = 0;
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').disabled = false;
    document.getElementById('current-hints-list').innerHTML = '<span style="color: #999; font-size:0.8rem;">Analise a imagem...</span>';
    
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 45;
    const display = document.getElementById('timer-display');
    display.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            perderVida("O tempo esgotou!");
        }
    }, 1000);
}

function checkGuess() {
    const input = document.getElementById('guess-input');
    const guess = input.value.toLowerCase().trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase();

    if (guess === correto) {
        ganharPontos();
    } else {
        tratarErro();
    }
}

function ganharPontos() {
    clearInterval(timer);
    const pontosGanhos = Math.max(10, 50 - (attempts * 10));
    totalScore += pontosGanhos;
    document.getElementById('pts').innerText = totalScore;
    
    showReview("✅ ACERTOU!", filaDeJogo[currentCaseIndex].revisao);
}

function tratarErro() {
    attempts++;
    const caso = filaDeJogo[currentCaseIndex];

    if (attempts >= 4) {
        perderVida("Muitas tentativas incorretas.");
        return;
    }

    // Melhora a nitidez da foto a cada erro
    blurValue = Math.max(0, blurValue - 4);
    document.getElementById('lesion-image').style.filter = `blur(${blurValue}px)`;
    
    // Adiciona dica na lista
    const hintsList = document.getElementById('current-hints-list');
    if (attempts === 1) hintsList.innerHTML = "";
    
    const dica = caso.dicas[attempts - 1] || "Sem mais dicas para este caso.";
    const div = document.createElement('div');
    div.className = 'hint-item';
    div.innerHTML = `<strong>Dica ${attempts}:</strong> ${dica}`;
    hintsList.appendChild(div);
    
    document.getElementById('guess-input').value = "";
}

function perderVida(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    
    if (lives <= 0) {
        alert(`🚨 GAME OVER! ${motivo}\nPontuação: ${totalScore}`);
        prepararNovoJogo();
    } else {
        showReview("❌ VIDA PERDIDA", `Motivo: ${motivo}<br><br>O correto era: <strong>${filaDeJogo[currentCaseIndex].nome}</strong>.<br>${filaDeJogo[currentCaseIndex].revisao}`);
    }
}

function updateLivesDisplay() {
    document.getElementById('lives-display').innerHTML = "❤️".repeat(lives) + "🖤".repeat(MAX_LIVES - lives);
}

function showReview(titulo, texto) {
    document.getElementById('review-title').innerHTML = titulo;
    document.getElementById('review-text').innerHTML = texto;
    document.getElementById('review-modal').style.display = "flex";
    document.getElementById('lesion-image').style.filter = "blur(0px)";
}

function closeReview() {
    document.getElementById('review-modal').style.display = "none";
    currentCaseIndex++;
    loadCase();
}

function fazerBiopsia() {
    if (confirm("A biópsia revelará o diagnóstico, mas você ganhará apenas 5 pontos. Confirmar?")) {
        clearInterval(timer);
        totalScore += 5;
        document.getElementById('pts').innerText = totalScore;
        showReview("🔬 LAUDO HISTOPATOLÓGICO", `Diagnóstico: <strong>${filaDeJogo[currentCaseIndex].nome}</strong>.<br><br>${filaDeJogo[currentCaseIndex].revisao}`);
    }
}

function revealExtraHint() {
    alert("Dica de Especialista: " + filaDeJogo[currentCaseIndex].dicas[0]);
}

// Atalho Enter
document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
