// --- BANCO DE DADOS COMPLETO ---
const bancoDeLesoes = [
    { nome: "língua pilosa", url: "img/lingua_pilosa.jpg", dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' no dorso.", "Associada ao tabagismo."] },
    { nome: "morsicatio buccarum", url: "img/morsicatio.jpg", dicas: ["Hábito de mordiscamento.", "Aspecto macerado.", "Linha de oclusão."] },
    { nome: "linha alba", url: "img/linha_alba.jpg", dicas: ["Linha branca horizontal.", "Pressão dos dentes.", "Variação da normalidade."] },
    { nome: "leucoedema", url: "img/leucoedema.jpg", dicas: ["Opalescência cinza.", "Desaparece ao esticar.", "Comum em negros."] },
    { nome: "leucoplasia", url: "img/leucoplasia.jpg", dicas: ["Placa branca não removível.", "Tabagismo.", "Potencial de transformação maligna."] },
    { nome: "candidíase pseudomembranosa", url: "img/candidiase.jpg", dicas: ["Placas brancas removíveis.", "Queimação.", "Imunossupressão."] },
    { nome: "carcinoma espinocelular oral", url: "img/cec.jpg", dicas: ["Neoplasia maligna comum.", "Úlcera endurecida.", "Não cicatriza."] },
    { nome: "granuloma piogênico", url: "img/granuloma_piogenico.jpg", dicas: ["Nódulo vermelho sangrante.", "Crescimento reacional.", "Gestantes."] },
    { nome: "mucocele", url: "img/mucocele.jpg", dicas: ["Ruptura de ducto salivar.", "Nódulo azulado.", "Lábio inferior."] },
    { nome: "eritoplasia", url: "img/eritoplasia.jpg", dicas: ["Mancha vermelha aveludada.", "Alto risco de câncer.", "Bordas definidas."] },
    { nome: "queilite angular", url: "img/queilite_angular.jpg", dicas: ["Fissuras na comissura.", "Perda de DVO.", "Infecção mista."] },
    { nome: "hemangioma", url: "img/hemangioma.jpg", dicas: ["Proliferação vascular.", "Vitropressão positiva.", "Congênito."] },
    { nome: "sarcoma de kaposi", url: "img/sarcoma_kaposi.jpg", dicas: ["Neoplasia vascular HHV-8.", "Marcador de AIDS.", "Manchas roxas."] },
    { nome: "melanoma", url: "img/melanoma.jpg", dicas: ["Malignidade de melanócitos.", "ABCDE.", "Agressivo em boca."] },
    { nome: "estomatite nicotínica", url: "img/estomatite_nicotinica.jpg", dicas: ["Palato branco/pontos vermelhos.", "Inflamação ductal.", "Cachimbo."] },
    { nome: "leucoplasia verrucosa proliferativa", url: "img/lvp.jpg", dicas: ["Placas brancas progressivas.", "Altíssimo risco.", "Resistente."] },
    { nome: "carcinoma verrucoso", url: "img/carcinoma_verrucoso.jpg", dicas: ["Variante baixo grau CEC.", "Couve-flor.", "Fumo mascado."] },
    { nome: "eritroleucoplasia", url: "img/eritroleucoplasia.jpg", dicas: ["Lesão mista branca/vermelha.", "Alto risco.", "Áreas atróficas."] },
    { nome: "malformação vascular", url: "img/malformacao_vascular.jpg", dicas: ["Defeito congênito.", "Não regride.", "Pode pulsar."] },
    { nome: "osteorradionecrose", url: "img/osteorradionecrose.jpg", dicas: ["Osso exposto pós-radiação.", "Hipovascularização.", "Dor/Sequestro."] },
    { nome: "lesão periférica de células gigantes", url: "img/lpcg.jpg", dicas: ["Nódulo gengival roxo.", "Ligamento periodontal.", "Erosão em taça."] },
    { nome: "fibroma ossificante periférico", url: "img/fop.jpg", dicas: ["Nódulo firme.", "Calcificações.", "Exclusivo da gengiva."] },
    { nome: "hiperplasia gengival medicamentosa", url: "img/hiperplasia_medicamentosa.jpg", dicas: ["Aumento por fármacos.", "Papilas.", "Fenitoína."] },
    { nome: "rânula", url: "img/ranula.jpg", dicas: ["Mucocele assoalho.", "Sublingual.", "Ventre de rã."] },
    { nome: "sialometaplasia necrosante", url: "img/sialometaplasia.jpg", dicas: ["Úlcera palato.", "Simula CEC.", "Autolimitada."] },
    { nome: "mácula melanótica", url: "img/macula_melanotica.jpg", dicas: ["Mancha plana única.", "Melanina.", "Lábio inferior."] },
    { nome: "líquen plano erosivo", url: "img/liquen_plano.jpg", dicas: ["Estrias brancas/áreas vermelhas.", "Dolorosa.", "Bilateral."] },
    { nome: "condiloma acuminado", url: "img/condiloma.jpg", dicas: ["HPV sexual.", "Múltiplas.", "Couve-flor."] },
    { nome: "papiloma escamoso", url: "img/papiloma.jpg", dicas: ["Verruga única.", "HPV 6/11.", "Pediculada."] },
    { nome: "estomatite urêmica", url: "img/estomatite_uremica.jpg", dicas: ["Insuficiência renal.", "Hálito amônia.", "Diálise."] },
    { nome: "lipoma", url: "img/lipoma.jpg", dicas: ["Nódulo amarelo macio.", "Gordura.", "Vasos superficiais."] },
    { nome: "adenoma pleomórfico", url: "img/adenoma_pleomorfico.jpg", dicas: ["Tumor salivar comum.", "Indolor.", "Parótida/Palato."] },
    { nome: "carcinoma mucoepidermoide", url: "img/carcinoma_mucoepidermoide.jpg", dicas: ["Malignidade salivar.", "Azulado.", "Ductos/Células mucosas."] }
];

// --- LÓGICA DO JOGO (CONFORME SEU SCRIPT) ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 12; 
let totalScore = 0;
let timer;
let timeLeft = 45; 
let hintRevealed = false;

window.onload = prepararNovoJogo;

function prepararNovoJogo() {
    filaDeJogo = [...bancoDeLesoes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 30);
    
    totalScore = 0;
    currentCaseIndex = 0;
    document.getElementById('pts').innerText = totalScore;
    updateRank();
    loadCase();
}

function loadCase() {
    if (filaDeJogo.length === 0) return;

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    imgElement.style.opacity = "0"; 
    blurValue = 12; 
    imgElement.style.filter = `blur(${blurValue}px)`;
    attempts = 0;
    hintRevealed = false;

    // Adicionado cache-buster para evitar problemas no GitHub Pages
    imgElement.src = caso.url + "?v=" + new Date().getTime();
    imgElement.onload = () => imgElement.style.opacity = "1";
    
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('feedback').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

    document.getElementById('current-hints-list').innerHTML = '<span style="color: #999; font-size:0.8rem;">Aguardando submissão...</span>';

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

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    // Normalização para ignorar acentos e facilitar acerto
    const guess = inputField.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (guess === correto) {
        vitoria();
    } else {
        erro();
    }
}

function vitoria() {
    clearInterval(timer);
    const caso = filaDeJogo[currentCaseIndex];
    const img = document.getElementById('lesion-image');
    img.style.filter = "blur(0px)";
    
    let pontos = Math.max(10, 50 - (attempts * 10));
    if (hintRevealed) pontos = Math.floor(pontos / 2);
    totalScore += pontos;

    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `✅ ACERTOU! +${pontos} pts<br><small>${caso.nome.toUpperCase()}</small>`;
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#eafaf1";
    feedback.style.color = "#27ae60";
    
    document.getElementById('pts').innerText = totalScore;
    updateRank();
    document.getElementById('next-btn').style.display = "block";
    document.getElementById('guess-input').disabled = true;
}

function erro() {
    attempts++;
    const caso = filaDeJogo[currentCaseIndex];
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
    document.getElementById('guess-input').focus();
}

function revealExtraHint() {
    if (hintRevealed) return;
    hintRevealed = true;
    const caso = filaDeJogo[currentCaseIndex];
    const hintsList = document.getElementById('current-hints-list');
    
    const div = document.createElement('div');
    div.className = 'hint-item';
    div.style.color = "#8e44ad";
    div.innerHTML = `<strong>💡 Especialista:</strong> ${caso.dicas[0]}`; // Usa a primeira dica como extra
    hintsList.appendChild(div);
    alert("Dica revelada! Pontos deste caso reduzidos em 50%.");
}

function fazerBiopsia() {
    if (confirm("Realizar biópsia? Imagem será revelada, mas ganhará apenas 5 pontos.")) {
        clearInterval(timer);
        document.getElementById('lesion-image').style.filter = "blur(0px)";
        totalScore += 5;
        document.getElementById('pts').innerText = totalScore;
        const feedback = document.getElementById('feedback');
        feedback.innerHTML = `🔬 Biópsia: ${filaDeJogo[currentCaseIndex].nome.toUpperCase()}`;
        feedback.style.display = "block";
        feedback.style.backgroundColor = "#fff9db";
        feedback.style.color = "#f08c00";
        document.getElementById('next-btn').style.display = "block";
        document.getElementById('guess-input').disabled = true;
    }
}

function timeout() {
    document.getElementById('lesion-image').style.filter = "blur(0px)";
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `⏳ TEMPO ESGOTADO!<br>Era: ${filaDeJogo[currentCaseIndex].nome.toUpperCase()}`;
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#fff5f5";
    feedback.style.color = "#fa5252";
    document.getElementById('next-btn').style.display = "block";
    document.getElementById('guess-input').disabled = true;
}

function updateRank() {
    let rank = "Acadêmico";
    if (totalScore > 300) rank = "Monitor";
    if (totalScore > 700) rank = "Residente";
    if (totalScore > 1200) rank = "Estomatologista";
    if (totalScore > 1800) rank = "Mestre Neville";
    document.getElementById('rank').innerText = rank;
}

function nextLevel() {
    currentCaseIndex++;
    if (currentCaseIndex < filaDeJogo.length) {
        loadCase();
    } else {
        alert("Parabéns! Você concluiu o Atlas.");
        prepararNovoJogo();
    }
}

document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
