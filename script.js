const bancoDeLesoes = [
    { nome: "língua pilosa", url: "img/lingua_pilosa.jpg", anamnese: "Masc, 45 anos, tabagista. Queixa de língua 'peluda' e hálito forte.", dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' no dorso da língua.", "Associada a má higiene."] },
    { nome: "morsicatio buccarum", url: "img/morsicatio.jpg", anamnese: "Fem, 22 anos, ansiosa. Relata 'peles soltas' na bochecha.", dicas: ["Hábito de mordiscamento.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."] },
    { nome: "linha alba", url: "img/linha_alba.jpg", anamnese: "Masc, 30 anos. Exame de rotina revela linha esbranquiçada bilateral.", dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade."] },
    { nome: "leucoedema", url: "img/leucoedema.jpg", anamnese: "Masc, 40 anos, negro. Mucosa bucal com aspecto leitoso bilateral.", dicas: ["Opalescência cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."] },
    { nome: "leucoplasia", url: "img/leucoplasia.jpg", anamnese: "Masc, 55 anos, fumante há 30 anos. Placa branca em borda de língua.", dicas: ["Placa branca não removível à raspagem.", "Associação direta com tabagismo.", "Potencial de transformação maligna."] },
    { nome: "candidíase pseudomembranosa", url: "img/candidiase.jpg", anamnese: "Fem, 60 anos, usuária de prótese e antibióticos recentes. Ardência bucal.", dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Deixa base eritematosa ao raspar."] },
    { nome: "carcinoma espinocelular oral", url: "img/cec.jpg", anamnese: "Masc, 65 anos, etilista e tabagista. Úlcera no assoalho há 2 meses.", dicas: ["Neoplasia maligna mais comum.", "Úlcera com bordas endurecidas.", "Não cicatriza em 15 dias."] },
    { nome: "granuloma piogênico", url: "img/granuloma_piogenico.jpg", anamnese: "Fem, 25 anos, gestante. Nódulo sangrante na gengiva.", dicas: ["Nódulo vermelho e friável.", "Crescimento rápido reacional.", "Comum em gengiva."] },
    { nome: "mucocele", url: "img/mucocele.jpg", anamnese: "Criança, 8 anos. 'Bolha' que surge e estoura no lábio inferior.", dicas: ["Ruptura de ducto salivar.", "Nódulo flutuante azulado.", "Local: lábio inferior."] },
    { nome: "eritoplasia", url: "img/eritoplasia.jpg", anamnese: "Masc, 50 anos, fumante. Mancha vermelha persistente em palato mole.", dicas: ["Mancha vermelha aveludada.", "Altíssimo potencial de malignidade.", "Bordas bem definidas."] },
    { nome: "queilite angular", url: "img/queilite_angular.jpg", anamnese: "Idoso, 75 anos, prótese antiga desgastada. Ferida no canto da boca.", dicas: ["Eritema e fissuras nas comissuras.", "Associada à perda de DVO.", "Infecção por Candida/Staph."] },
    { nome: "hemangioma", url: "img/hemangioma.jpg", anamnese: "Masc, 10 anos. Mancha arroxeada na língua desde o nascimento.", dicas: ["Proliferação de vasos sanguíneos.", "Teste de vitropressão positivo.", "Pode ser congênito."] },
    { nome: "sarcoma de kaposi", url: "img/sarcoma_kaposi.jpg", anamnese: "Masc, 35 anos, soropositivo (HIV). Manchas roxas no palato.", dicas: ["Neoplasia vascular (HHV-8).", "Comum em pacientes com AIDS.", "Máculas arroxeadas."] },
    { nome: "melanoma", url: "img/melanoma.jpg", anamnese: "Fem, 50 anos. Mancha escura assimétrica e irregular no palato.", dicas: ["Neoplasia maligna de melanócitos.", "Regra do ABCDE.", "Altíssima agressividade."] },
    { nome: "estomatite nicotínica", url: "img/estomatite_nicotinica.jpg", anamnese: "Masc, 60 anos, fumante de cachimbo. Palato 'calçado'.", dicas: ["Palato branco com pontos vermelhos.", "Inflamação dos ductos glandulares.", "Resposta ao calor do fumo."] },
    { nome: "leucoplasia verrucosa proliferativa", url: "img/lvp.jpg", anamnese: "Fem, 70 anos, não fumante. Várias placas brancas espalhadas.", dicas: ["Placas que se espalham progressivamente.", "Altíssima malignização.", "Resistente a tratamento."] },
    { nome: "carcinoma verrucoso", url: "img/carcinoma_verrucoso.jpg", anamnese: "Masc, 70 anos, usuário de fumo mascado. Lesão exofítica branca.", dicas: ["Variante de baixo grau do CEC.", "Crescimento lento e verrucoso.", "Raramente sofre metástase."] },
    { nome: "eritroleucoplasia", url: "img/eritroleucoplasia.jpg", anamnese: "Masc, 58 anos. Mancha branca com áreas vermelhas entremeadas.", dicas: ["Lesão mista (branca e vermelha).", "Leucoplasia pintalgada.", "Risco de câncer muito alto."] },
    { nome: "malformação vascular", url: "img/malformacao_vascular.jpg", anamnese: "Fem, 18 anos. Aumento de volume pulsátil em lábio.", dicas: ["Anomalia estrutural congênita.", "Não regride espontaneamente.", "Pode apresentar pulsação."] },
    { nome: "osteorradionecrose", url: "img/osteorradionecrose.jpg", anamnese: "Masc, 60 anos. Histórico de Radioterapia. Osso exposto em mandíbula.", dicas: ["Exposição óssea pós-RT.", "Hipovascularização tecidual.", "Dor e sequestro ósseo."] },
    { nome: "lesão periférica de células gigantes", url: "img/lpcg.jpg", anamnese: "Fem, 30 anos. Nódulo roxo na gengiva entre pré-molares.", dicas: ["Nódulo gengival cianótico.", "Surge do ligamento periodontal.", "Erosão óssea em taça."] },
    { nome: "fibroma ossificante periférico", url: "img/fop.jpg", anamnese: "Fem, 20 anos. Nódulo firme e rosa na gengiva inserida.", dicas: ["Nódulo firme pediculado.", "Contém calcificações internas.", "Exclusivo da gengiva."] },
    { nome: "hiperplasia gengival medicamentosa", url: "img/hiperplasia_medicamentosa.jpg", anamnese: "Masc, 40 anos, epilético. Gengiva recobrindo dentes.", dicas: ["Associado a Fenitoína/Nifedipina.", "Inicia nas papilas.", "Aumento gengival generalizado."] },
    { nome: "rânula", url: "img/ranula.jpg", anamnese: "Masc, 25 anos. Aumento de volume em assoalho de boca, unilateral.", dicas: ["Mucocele no assoalho.", "Glândula sublingual.", "Aspecto de ventre de rã."] },
    { nome: "sialometaplasia necrosante", url: "img/sialometaplasia.jpg", anamnese: "Masc, 40 anos. Úlcera profunda no palato após trauma local.", dicas: ["Úlcera crateriforme no palato.", "Simula carcinoma.", "Autolimitada."] },
    { nome: "mácula melanótica", url: "img/macula_melanotica.jpg", anamnese: "Fem, 30 anos. Pintinha marrom única no lábio inferior.", dicas: ["Lesão plana pigmentada única.", "Aumento focal de melanina.", "Comum no vermelhão do lábio."] },
    { nome: "líquen plano erosivo", url: "img/liquen_plano.jpg", anamnese: "Fem, 50 anos. Áreas vermelhas e brancas em bochecha, bilateral.", dicas: ["Estrias de Wickham presentes.", "Forma clínica dolorosa.", "Doença imunológica crônica."] },
    { nome: "condiloma acuminado", url: "img/condiloma.jpg", anamnese: "Fem, 24 anos. Múltiplas 'verrugas' moles em palato.", dicas: ["Lesão verrucosa por HPV.", "Transmissão sexual.", "Aspecto de couve-flor."] },
    { nome: "papiloma escamoso", url: "img/papiloma.jpg", anamnese: "Masc, 32 anos. Lesão única com 'dedinhos' na ponta da língua.", dicas: ["Projeções digitiformes.", "Induzida por HPV 6/11.", "Única e pediculada."] },
    { nome: "estomatite urêmica", url: "img/estomatite_uremica.jpg", anamnese: "Masc, 60 anos, renal crônico. Placas brancas e cheiro de urina.", dicas: ["Pacientes com insuficiência renal.", "Hálito de amônia.", "Placas brancas difusas."] },
    { nome: "lipoma", url: "img/lipoma.jpg", anamnese: "Fem, 45 anos. Nódulo amarelado mole em mucosa bucal.", dicas: ["Nódulo amarelo e macio.", "Tumor benigno de gordura.", "Vasos superficiais visíveis."] },
    { nome: "adenoma pleomórfico", url: "img/adenoma_pleomorfico.jpg", anamnese: "Fem, 40 anos. Massa firme de crescimento lento na parótida.", dicas: ["Tumor salivar mais comum.", "Massa firme e indolor.", "Cúpula da parótida."] },
    { nome: "carcinoma mucoepidermoide", url: "img/carcinoma_mucoepidermoide.jpg", anamnese: "Fem, 35 anos. Aumento de volume azulado em palato duro.", dicas: ["Malignidade salivar mais comum.", "Pode simular mucocele.", "Ocorre em palato/parótida."] }
];

let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 12;
let totalScore = 0;
let lives = 3;
let timer;
let timeLeft = 45;

window.onload = () => {
    // Mantém o modal de regras visível no início
    document.getElementById('rules-modal').style.display = "flex";
};

function fecharRegras() {
    document.getElementById('rules-modal').style.display = "none";
    prepararNovoJogo();
}

function prepararNovoJogo() {
    filaDeJogo = [...bancoDeLesoes].sort(() => Math.random() - 0.5).slice(0, 30);
    totalScore = 0;
    currentCaseIndex = 0;
    lives = 3;
    document.getElementById('pts').innerText = totalScore;
    updateLivesDisplay();
    updateRank();
    loadCase();
}

function loadCase() {
    if (currentCaseIndex >= filaDeJogo.length) {
        mostrarNotificacao("CONCLUÍDO", "Você finalizou o Atlas!", "#c5a059", true);
        return;
    }

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    // Inserir Anamnese na caixa de pistas
    const hintsList = document.getElementById('current-hints-list');
    hintsList.innerHTML = `<div class='hint-item' style='border-left-color: #3498db; background: #f0f7ff; color: #2980b9;'>
        <strong>📋 ANAMNESE:</strong> ${caso.anamnese}
    </div>`;

    imgElement.style.opacity = "0";
    blurValue = 12;
    imgElement.style.filter = `blur(${blurValue}px)`;
    attempts = 0;

    imgElement.src = caso.url;
    imgElement.onload = () => imgElement.style.opacity = "1";

    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('review-modal').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 45;
    atualizarTimerVisual();
    timer = setInterval(() => {
        timeLeft--;
        atualizarTimerVisual();
        if (timeLeft <= 0) {
            clearInterval(timer);
            processarMorte("TEMPO ESGOTADO");
        }
    }, 1000);
}

function atualizarTimerVisual() {
    const d = document.getElementById('timer-display');
    d.innerText = timeLeft;
    d.style.color = timeLeft < 10 ? "#e74c3c" : "white";
}

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    const guess = inputField.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (guess === correto) {
        clearInterval(timer);
        let pontos = Math.max(10, 50 - (attempts * 5));
        totalScore += pontos;
        document.getElementById('pts').innerText = totalScore;
        updateRank();
        mostrarNotificacao("CORRETO!", "Excelente olhar clínico.", "#27ae60");
    } else {
        registrarErro();
    }
}

function registrarErro() {
    attempts++;
    const caso = filaDeJogo[currentCaseIndex];
    blurValue = Math.max(0, blurValue - 3);
    document.getElementById('lesion-image').style.filter = `blur(${blurValue}px)`;
    
    if (caso.dicas && caso.dicas[attempts - 1]) {
        const div = document.createElement('div');
        div.className = 'hint-item';
        div.innerHTML = `<strong>Pista ${attempts}:</strong> ${caso.dicas[attempts - 1]}`;
        document.getElementById('current-hints-list').appendChild(div);
    }
    if (attempts >= 5) processarMorte("LIMITE DE TENTATIVAS");
}

function processarMorte(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    if (lives <= 0) {
        mostrarNotificacao("GAME OVER", "Suas licenças médicas foram revogadas.", "#5e111d", true);
    } else {
        mostrarNotificacao(motivo, "Você perdeu uma vida.", "#5e111d");
    }
}

function updateLivesDisplay() {
    document.getElementById('lives-display').innerText = "❤️".repeat(lives);
}

function mostrarNotificacao(titulo, sub, cor, reiniciar = false) {
    const modal = document.getElementById('review-modal');
    const t = document.getElementById('review-title');
    const txt = document.getElementById('review-text');
    const btn = modal.querySelector('button');
    
    t.innerText = titulo;
    t.style.color = cor;
    let info = sub;
    if (!reiniciar) {
        info += `<br><br>Diagnóstico: <strong>${filaDeJogo[currentCaseIndex].nome.toUpperCase()}</strong>`;
        btn.onclick = closeReview;
        btn.innerText = "PRÓXIMO CASO";
    } else {
        btn.onclick = () => location.reload();
        btn.innerText = "REINICIAR";
    }
    txt.innerHTML = info;
    document.getElementById('lesion-image').style.filter = "blur(0px)";
    modal.style.display = "flex";
}

function closeReview() {
    currentCaseIndex++;
    loadCase();
}

function revealExtraHint() {
    timeLeft = Math.max(0, timeLeft - 15);
    atualizarTimerVisual();
    registrarErro();
}

function fazerBiopsia() {
    if (totalScore >= 10) {
        totalScore -= 10;
        document.getElementById('pts').innerText = totalScore;
        mostrarNotificacao("BIÓPSIA", "Resultado laboratorial liberado.", "#c5a059");
    } else {
        alert("Pontos insuficientes (10 pts)!");
    }
}

function updateRank() {
    const r = document.getElementById('rank');
    if (totalScore >= 1200) r.innerText = "Neville";
    else if (totalScore >= 800) r.innerText = "Especialista";
    else if (totalScore >= 400) r.innerText = "Residente";
    else r.innerText = "Acadêmico";
}

document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
