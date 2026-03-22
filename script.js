const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "img/lingua_pilosa.jpg",
        dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' ou pelos no dorso da língua.", "Pode estar associada ao tabagismo ou má higiene."],
        revisao: "A língua pilosa é uma condição benigna caracterizada pelo acúmulo de queratina nas papilas filiformes do dorso da língua, resultando em uma aparência peluda e, frequentemente, escura."
    },
    { 
        nome: "morsicatio buccarum", 
        url: "img/morsicatio.jpg",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."],
        revisao: "O Morsicatio Buccarum é causado por traumatismo crônico (morder as bochechas), resultando em placas brancas descamativas e irregulares."
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."],
        revisao: "A linha alba é uma alteração comum da mucosa bucal, causada por pressão ou fricção dos dentes na linha de oclusão."
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."],
        revisao: "O leucoedema é uma variação da normalidade. O diagnóstico clínico é confirmado quando a opacidade desaparece ao esticar a bochecha."
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg",
        dicas: ["Placa branca não removível à raspagem.", "Associação direta com tabagismo.", "Potencial de transformação maligna."],
        revisao: "A leucoplasia é uma lesão cancerizável. É uma placa branca que não sai com raspagem e não pode ser diagnosticada como outra doença específica."
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum após uso de antibióticos ou imunossupressão."],
        revisao: "Infecção fúngica por Candida albicans. Caracteriza-se por placas brancas que, ao serem removidas, revelam uma base eritematosa."
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."],
        revisao: "O CEC representa 95% dos cânceres bucais. Fatores de risco principais: fumo e álcool."
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."],
        revisao: "Lesão reacional a irritantes locais. Apesar do nome, não é um granuloma verdadeiro, mas um hemangioma capilar lobular."
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e frequentemente azulado.", "Localização mais comum: lábio inferior."],
        revisao: "Fenômeno de extravasamento de muco comum em lábio inferior por trauma em glândulas salivares menores."
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg",
        dicas: ["Mancha vermelha aveludada não diagnosticável.", "Altíssimo potencial de malignidade.", "Bordas geralmente bem definidas."],
        revisao: "Lesão vermelha com alto índice de displasia ou carcinoma in situ no momento do diagnóstico."
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical (DVO).", "Infecção mista: Candida e Staphylococcus."],
        revisao: "Inflamação no ângulo da boca, comum em usuários de próteses mal adaptadas."
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão positivo.", "Pode ser congênito."],
        revisao: "Tumor vascular benigno comum na infância. A vitropressão ajuda a diferenciar de lesões pigmentadas."
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Comum em pacientes com HIV/AIDS.", "Máculas ou nódulos arroxeados."],
        revisao: "Tumor maligno de origem endotelial, marcador comum da fase avançada da AIDS."
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Regra do ABCDE.", "Pior prognóstico em boca que na pele."],
        revisao: "Câncer agressivo de células produtoras de pigmento. Raro na boca, mas muito letal."
    },
    {
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos.", "Inflamação dos ductos glandulares.", "Comum em fumantes de cachimbo."],
        revisao: "Alteração no palato duro em resposta ao calor do fumo. Os pontos vermelhos são os óstios das glândulas menores."
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "img/lvp.jpg",
        dicas: ["Múltiplas placas brancas progressivas.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos."],
        revisao: "Uma forma agressiva de leucoplasia que evolui para carcinoma em quase todos os casos."
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "img/carcinoma_verrucoso.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento lento e verruciforme.", "Raramente sofre metástase."],
        revisao: "Variante de baixo grau do câncer de boca, associado ao uso de tabaco mascado."
    },
    { 
        nome: "eritroleucoplasia", 
        url: "img/eritroleucoplasia.jpg",
        dicas: ["Lesão mista branca e vermelha.", "Chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia."],
        revisao: "Lesão mista com áreas vermelhas (atróficas) e brancas (queratóticas)."
    },
    { 
        nome: "malformação vascular", 
        url: "img/malformacao_vascular.jpg",
        dicas: ["Anomalia estrutural congênita.", "Não regride espontaneamente.", "Pode apresentar pulsação."],
        revisao: "Defeito na morfogênese dos vasos. Cresce com o paciente."
    },
    { 
        nome: "osteorradionecrose", 
        url: "img/osteorradionecrose.jpg",
        dicas: ["Exposição óssea pós-radioterapia.", "Hipovascularização e hipocelularidade.", "Dor e sequestro ósseo."],
        revisao: "Morte do tecido ósseo por falta de sangue após radiação para tratamento de câncer."
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "img/lpcg.jpg",
        dicas: ["Nódulo gengival arroxeado.", "Surge do ligamento periodontal.", "Erosão óssea 'em taça'."],
        revisao: "Lesão reacional gengival rica em células gigantes multinucleadas."
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "img/fop.jpg",
        dicas: ["Nódulo gengival firme.", "Contém calcificações internas.", "Exclusivo da gengiva."],
        revisao: "Crescimento tumoral benigno e reacional exclusivo do tecido gengival."
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "img/hiperplasia_medicamentosa.jpg",
        dicas: ["Aumento gengival por fármacos.", "Inicia nas papilas.", "Associada à higiene precária."],
        revisao: "Aumento do volume gengival causado por anticonvulsivantes, imunossupressores ou bloqueadores de cálcio."
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Glândula sublingual.", "Aspecto de 'ventre de rã'."],
        revisao: "Extravasamento de muco no assoalho bucal por obstrução ou trauma da glândula sublingual."
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme no palato.", "Simula carcinoma.", "Autolimitada."],
        revisao: "Isquemia das glândulas salivares palatinas. Cura-se sozinha em 6 a 10 semanas."
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg",
        dicas: ["Lesão plana pigmentada única.", "Aumento de melanina.", "Comum em lábio inferior."],
        revisao: "Pequena mancha marrom benigna causada pelo aumento focal na produção de melanina."
    },
    { 
        nome: "líquen plano erosivo", 
        url: "img/liquen_plano.jpg",
        dicas: ["Áreas vermelhas com estrias brancas.", "Forma clínica dolorosa.", "Bilateral e simétrico."],
        revisao: "Doença autoimune crônica. A variante erosiva causa dor e sensibilidade."
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg",
        dicas: ["Lesão verrucosa sexual (HPV).", "Geralmente múltipla.", "Superfície em couve-flor."],
        revisao: "Verruga genital que pode se manifestar na boca via contato orogenital."
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg",
        dicas: ["Projeções papilares digitiformes.", "HPV 6 ou 11.", "Única e pediculada."],
        revisao: "Tumor epitelial benigno induzido pelo papilomavírus humano."
    },
    { 
        nome: "estomatite urêmica", 
        url: "img/estomatite_uremica.jpg",
        dicas: ["Insuficiência renal avançada.", "Hálito com cheiro de amônia.", "Melhora após diálise."],
        revisao: "Manifestação bucal rara de uremia grave em pacientes renais."
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg",
        dicas: ["Nódulo amarelado macio.", "Tumor de gordura.", "Telangiectasias superficiais."],
        revisao: "Tumor benigno de tecido adiposo maduro."
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg",
        dicas: ["Tumor de glândula salivar comum.", "Crescimento lento e indolor.", "Cúpula da parótida."],
        revisao: "O tumor misto benigno é a neoplasia salivar mais frequente."
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg",
        dicas: ["Malignidade salivar mais comum.", "Pode ser azulado.", "Palato ou parótida."],
        revisao: "Neoplasia maligna de glândula salivar com graus variados de agressividade."
    }
];

let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 15;
let totalScore = 0;
let timer;
let timeLeft = 45;
let lives = 3;
const MAX_LIVES = 3;

window.onload = () => {
    if (typeof bancoDeLesoes !== 'undefined' && bancoDeLesoes.length > 0) {
        prepararNovoJogo();
    }
};

function prepararNovoJogo() {
    filaDeJogo = [...bancoDeLesoes].sort(() => Math.random() - 0.5).slice(0, 30);
    totalScore = 0;
    currentCaseIndex = 0;
    lives = MAX_LIVES;
    document.getElementById('pts').innerText = totalScore;
    updateLivesDisplay();
    updateRank();
    setTimeout(loadCase, 200);
}

function loadCase() {
    if (currentCaseIndex >= filaDeJogo.length) {
        alert("🎉 Atlas Concluído!");
        prepararNovoJogo();
        return;
    }

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    imgElement.style.opacity = "0"; 
    blurValue = 15; 
    imgElement.style.filter = `blur(${blurValue}px)`;
    
    // Caminho da imagem: use apenas o nome se estiver na pasta img
    imgElement.src = caso.url + "?v=" + new Date().getTime();
    
    imgElement.onload = () => { imgElement.style.opacity = "1"; };
    imgElement.onerror = () => {
        console.error("Erro ao carregar:", caso.url);
        imgElement.src = "https://via.placeholder.com/500x400?text=Imagem+Nao+Encontrada";
        imgElement.style.opacity = "1";
    };

    attempts = 0;
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-input').focus();
    document.getElementById('current-hints-list').innerHTML = '<span style="color: #999;">Analise a amostra...</span>';

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
            perderVida("Tempo esgotado!");
        }
    }, 1000);
}

function checkGuess() {
    const input = document.getElementById('guess-input');
    const guess = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (guess === correto) {
        vitoria();
    } else {
        tratarErro();
    }
}

function vitoria() {
    clearInterval(timer);
    totalScore += Math.max(10, 50 - (attempts * 10));
    document.getElementById('pts').innerText = totalScore;
    updateRank();
    showReview("✅ ACERTOU!", filaDeJogo[currentCaseIndex].revisao);
}

function tratarErro() {
    attempts++;
    if (attempts >= 4) {
        perderVida("Limite de erros atingido.");
        return;
    }
    blurValue = Math.max(0, blurValue - 5);
    document.getElementById('lesion-image').style.filter = `blur(${blurValue}px)`;
    
    const hintsList = document.getElementById('current-hints-list');
    if (attempts === 1) hintsList.innerHTML = "";
    const div = document.createElement('div');
    div.className = 'hint-item';
    div.innerHTML = `<strong>Dica ${attempts}:</strong> ${filaDeJogo[currentCaseIndex].dicas[attempts-1]}`;
    hintsList.appendChild(div);
    document.getElementById('guess-input').value = "";
}

function perderVida(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    if (lives <= 0) {
        alert("GAME OVER! Estude mais o Neville.");
        prepararNovoJogo();
    } else {
        showReview("❌ ERRO CLÍNICO", `${motivo}<br><br>Diagnóstico: <strong>${filaDeJogo[currentCaseIndex].nome}</strong>`);
    }
}

function updateLivesDisplay() {
    document.getElementById('lives-display').innerHTML = "❤️".repeat(lives) + "🖤".repeat(MAX_LIVES - lives);
}

function showReview(title, text) {
    document.getElementById('review-title').innerHTML = title;
    document.getElementById('review-text').innerHTML = text;
    document.getElementById('review-modal').style.display = "flex";
    document.getElementById('lesion-image').style.filter = "blur(0px)";
}

function closeReview() {
    document.getElementById('review-modal').style.display = "none";
    currentCaseIndex++;
    loadCase();
}

function fazerBiopsia() {
    if (confirm("Gastar 5 pontos para ver o laudo histopatológico?")) {
        clearInterval(timer);
        totalScore += 5;
        document.getElementById('pts').innerText = totalScore;
        showReview("🔬 BIÓPSIA", `O laudo confirmou: <strong>${filaDeJogo[currentCaseIndex].nome}</strong>`);
    }
}

function revealExtraHint() {
    alert("DICA EXTRA: " + filaDeJogo[currentCaseIndex].dicas[0]);
}

function updateRank() {
    let r = "Acadêmico";
    if (totalScore > 300) r = "Monitor";
    if (totalScore > 700) r = "Residente";
    if (totalScore > 1200) r = "Estomatologista";
    document.getElementById('rank').innerText = r;
}

document.getElementById('guess-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') checkGuess(); });
