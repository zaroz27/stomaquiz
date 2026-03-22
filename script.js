// --- BANCO DE DADOS COMPLETO E CORRIGIDO (COM REVISÕES) ---

const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "img/lingua_pilosa.jpg",
        dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' ou pelos no dorso da língua.", "Pode estar associada ao tabagismo ou má higiene."],
    },
    { 
        nome: "morsicatio buccarum", 
        url: "img/morsicatio.jpg",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."],
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."],
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."],
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg",
        dicas: ["Placa branca não removível à raspagem.", "Associação direta com tabagismo.", "Potencial de transformação maligna."],
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum após uso de antibióticos ou imunossupressão."],
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "base infiltrativa."],
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."],
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e frequentemente azulado.", "Localização mais comum: lábio inferior."],
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg",
        dicas: ["Mancha vermelha aveludada.", "Altíssimo potencial de malignidade.", "Bordas geralmente bem definidas."],
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical (DVO).", "Infecção mista: Candida e Staphylococcus."],
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão positivo.", "Pode ser congênito."],
        revisao: "Tumores benignos da infância que apresentam uma fase de proliferação rápida seguida por involução gradual."
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Muito comum no palato de pacientes com HIV/AIDS.", "Máculas ou nódulos arroxeados."],
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Regra do ABCDE.", "Pior prognóstico em mucosa oral que na pele."],
    },
    {
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos centrais.", "Inflamação dos ductos glandulares salivares menores.", "Comum em fumantes de cachimbo."],
        revisao: "Resposta ao calor gerado pelo fumo e não aos produtos químicos. Os pontos vermelhos representam os óstios inflamados das glândulas salivares menores."
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "img/lvp.jpg",
        dicas: ["Múltiplas placas brancas que se espalham progressivamente.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos convencionais."],
        revisao: "Uma forma agressiva de leucoplasia que tende a envolver múltiplos locais e tem um risco extremamente alto de evoluir para carcinoma verrucoso ou CEC."
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "img/carcinoma_verrucoso.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento exofítico, lento e verruciforme.", "Raramente sofre metástase."],
    },
    { 
        nome: "eritroleucoplasia", 
        url: "img/eritroleucoplasia.jpg",
        dicas: ["Lesão mista com componentes brancos e vermelhos.", "Também chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia pura."],
    },
    { 
        nome: "malformação vascular", 
        url: "img/malformacao_vascular.jpg",
        dicas: ["Anomalia estrutural presente ao nascimento.", "Não regride espontaneamente.", "Pode apresentar pulsação ou ruído à ausculta."],
    },
    { 
        nome: "osteorradionecrose", 
        url: "img/osteorradionecrose.jpg",
        dicas: ["Exposição óssea após radioterapia em cabeça e pescoço.", "Hipovascularização, hipóxia e hipocelularidade.", "Dor intensa e sequestro ósseo."],
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "img/lpcg.jpg",
        dicas: ["Nódulo gengival arroxeado ou azul-cianótico.", "Surge do ligamento periodontal ou periósteo.", "erosão óssea superficial 'em taça'."],
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "img/fop.jpg",
        dicas: ["Nódulo gengival firme, séssil ou pediculado.", "Contém calcificações (osso ou cemento) internas.", "Exclusivo da gengiva."],
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "img/hiperplasia_medicamentosa.jpg",
        dicas: ["Aumento gengival associado a Fenitoína, Ciclosporina, Nifedipina.", "Inicia-se nas papilas interdentais.", "Pode recobrir a coroa dos dentes."],
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Proveniente da glândula sublingual.", "Aspecto de 'ventre de rã'."],
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme profunda no palato.", "Simula clinicamente um carcinoma.", "Autolimitada (cura espontânea em semanas)."],
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg",
        dicas: ["Lesão plana e pigmentada única.", "Aumento focal de produção de melanina.", "Local comum: vermelhão do lábio inferior."],
    },
    { 
        nome: "líquen plano erosivo", 
        url: "img/liquen_plano.jpg",
        dicas: ["Áreas vermelhas ulceradas com estrias brancas (Wickham).", "Forma clínica dolorosa.", "Frequentemente bilateral e simétrico."],
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg",
        dicas: ["Lesão verrucosa transmitida sexualmente (HPV).", "Geralmente múltipla.", "Couvel-flor."],
        revisao: "Proliferação epitelial induzida pelo HPV. Na boca, é considerada uma doença sexualmente transmissível através do sexo oral."
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg",
        dicas: ["Projeções papilares digitiformes.", "Induzida pelo HPV 6 ou 11.", "única e pediculada."],
        revisao: "Proliferação benigna do epitélio escamoso. Clinicamente apresenta-se como uma massa exofítica com numerosas projeções pontiagudas."
    },
    { 
        nome: "estomatite urêmica", 
        url: "img/estomatite_uremica.jpg",
        dicas: ["Ocorre em pacientes com insuficiência renal avançada.", "Placas brancas difusas e hálito amônia.", "Melhora significativamente após diálise."],
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg",
        dicas: ["Nódulo amarelado de consistência macia à palpação.", "Tumor benigno de tecido adiposo.", "vasos superficiais (telangiectasias)."],
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg",
        dicas: ["Tumor de glândula salivar mais comum.", "Massa firme indolor.", "cúpula da parótida."],
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg",
        dicas: ["Malignidade de glândula salivar mais comum em adultos e crianças.", "aspecto azulado (lembrando mucocele).", "ocorre no palato ou parótida."],
    }
];
// --- VARIÁVEIS DE AMBIENTE ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 12;
let totalScore = 0;
let lives = 3;
let timer;
let timeLeft = 45;

window.onload = prepararNovoJogo;

function prepararNovoJogo() {
    // Embaralha e reinicia tudo
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
        mostrarNotificacao("FINALIZADO", "Você concluiu todos os casos!", "#c5a059", true);
        return;
    }

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    imgElement.style.opacity = "0";
    blurValue = 12;
    imgElement.style.filter = `blur(${blurValue}px)`;
    attempts = 0;

    imgElement.src = caso.url;
    imgElement.onload = () => imgElement.style.opacity = "1";

    // UI Updates
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('review-modal').style.display = "none";
    document.getElementById('feedback').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

    document.getElementById('current-hints-list').innerHTML = "";
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
    const display = document.getElementById('timer-display');
    display.innerText = timeLeft;
    display.style.color = timeLeft < 10 ? "#e74c3c" : "white";
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
        mostrarNotificacao("ACERTOU!", "Diagnóstico preciso realizado.", "#27ae60");
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
        div.innerHTML = `<strong>Evidência ${attempts}:</strong> ${caso.dicas[attempts - 1]}`;
        document.getElementById('current-hints-list').appendChild(div);
    }

    if (attempts >= 5) {
        processarMorte("LIMITE DE TENTATIVAS");
    }
}

function processarMorte(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    
    if (lives <= 0) {
        mostrarNotificacao("GAME OVER", "Você perdeu todos os corações.", "#5e111d", true);
    } else {
        mostrarNotificacao(motivo, "Você perdeu uma vida clínica.", "#5e111d");
    }
}

function updateLivesDisplay() {
    const display = document.getElementById('lives-display');
    if(display) display.innerText = "❤️".repeat(lives);
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
        info += `<br><br>Laudo Correto: <strong>${filaDeJogo[currentCaseIndex].nome.toUpperCase()}</strong>`;
        btn.onclick = closeReview;
        btn.innerText = "PRÓXIMO CASO";
    } else {
        btn.onclick = prepararNovoJogo;
        btn.innerText = "REINICIAR ATLAS";
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
    // Penalidade de Tempo: -15 segundos
    timeLeft = Math.max(0, timeLeft - 15);
    atualizarTimerVisual();
    registrarErro();
}

function fazerBiopsia() {
    if (confirm("Gastar 10 pontos para laudo imediato?")) {
        if (totalScore >= 10) {
            totalScore -= 10;
            document.getElementById('pts').innerText = totalScore;
            clearInterval(timer);
            mostrarNotificacao("BIÓPSIA", "Diagnóstico revelado via histopatológico.", "#c5a059");
        } else {
            alert("Pontos insuficientes!");
        }
    }
}

function updateRank() {
    const r = document.getElementById('rank');
    if (totalScore >= 1500) r.innerText = "Neville (Lenda)";
    else if (totalScore >= 1000) r.innerText = "Patologista Sênior";
    else if (totalScore >= 500) r.innerText = "Especialista";
    else if (totalScore >= 200) r.innerText = "Residente";
    else r.innerText = "Acadêmico";
}

// Enter para enviar
document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
