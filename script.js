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
    
// --- CONFIGURAÇÕES INICIAIS ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 12; // Valor inicial reduzido
let totalScore = 0;
let timer;
let timeLeft = 45; // Tempo por caso
let hintRevealed = false;

window.onload = prepararNovoJogo;

function prepararNovoJogo() {
    // Aqui assume-se que o array bancoDeLesoes existe
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
    
    // Reset de Estado por Caso
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
    document.getElementById('next-btn').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

    document.getElementById('current-hints-list').innerHTML = '<span style="color: #999; font-size:0.8rem;">Aguardando submissão...</span>';

    // Inicia cronômetro do zero para este caso
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
    const img = document.getElementById('lesion-image');
    img.style.filter = "blur(0px)";
    
    // Cálculo de pontos
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
    div.innerHTML = `<strong>💡 Especialista:</strong> ${caso.dicas[caso.dicas.length - 1]}`;
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
