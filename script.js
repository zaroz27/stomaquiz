// --- BANCO DE DADOS CORRIGIDO ---
const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "img/lingua_pilosa.jpg",
        dicas: ["Acúmulo de queratina nas papilas filiformes.", "Aspecto de 'tapete' ou pelos no dorso da língua.", "Pode estar associada ao tabagismo ou má higiene."],
        revisao: "A língua pilosa é uma condição benigna caracterizada pelo acúmulo de queratina nas papilas filiformes do dorso da língua."
    },
    { 
        nome: "morsicatio buccarum", 
        url: "img/morsicatio.jpg",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."],
        revisao: "Causado por traumatismo crônico (hábito de morder as bochechas), resultando em placas brancas descamativas."
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."],
        revisao: "Alteração comum causada por pressão ou fricção dos dentes na linha de oclusão."
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."],
        revisao: "Variação da normalidade que desaparece ao esticar a mucosa, diferenciando-se de lesões leucoplásicas."
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg",
        dicas: ["Placa branca não removível à raspagem.", "Associação direta com tabagismo.", "Potencial de transformação maligna."],
        revisao: "Placa branca que não sai com raspagem. É uma lesão cancerizável que exige biópsia se persistir."
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum após uso de antibióticos ou imunossupressão."],
        revisao: "Infecção fúngica onde as placas brancas podem ser removidas, revelando base eritematosa."
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."],
        revisao: "O tipo mais comum de câncer de boca, fortemente associado ao tabaco e álcool."
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."],
        revisao: "Lesão reacional comum. Frequentemente chamado de 'tumor da gravidez' quando ocorre em gestantes."
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e frequentemente azulado.", "Localização mais comum: lábio inferior."],
        revisao: "Acúmulo de saliva nos tecidos moles devido ao trauma em glândulas salivares menores."
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg",
        dicas: ["Mancha vermelha aveludada não diagnosticável.", "Altíssimo potencial de malignidade.", "Bordas geralmente bem definidas."],
        revisao: "Lesão vermelha com taxa de transformação maligna muito superior à da leucoplasia."
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical (DVO).", "Infecção mista: Candida e Staphylococcus."],
        revisao: "Inflamação nos ângulos da boca, comum em pacientes com próteses antigas ou desadaptadas."
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão positivo.", "Pode ser congênito."],
        revisao: "Tumor vascular benigno. A vitropressão (diascopia) confirma a presença de sangue no interior dos vasos."
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Comum em pacientes com HIV/AIDS.", "Máculas ou nódulos arroxeados."],
        revisao: "Tumor maligno comum em pacientes imunossuprimidos, manifestando-se como manchas roxas no palato."
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Regra do ABCDE.", "Pior prognóstico em boca que na pele."],
        revisao: "Câncer de células pigmentadas. Na boca é extremamente agressivo e silencioso no início."
    },
    {
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos.", "Inflamação dos ductos glandulares.", "Comum em fumantes de cachimbo."],
        revisao: "O calor do fumo inflama os óstios das glândulas salivares menores do palato."
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "img/lvp.jpg",
        dicas: ["Múltiplas placas brancas progressivas.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos."],
        revisao: "Uma variante agressiva da leucoplasia que se espalha e quase sempre vira câncer."
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "img/carcinoma_verrucoso.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento lento e verruciforme.", "Raramente sofre metástase."],
        revisao: "Um câncer de baixo grau com aspecto de couve-flor, associado ao uso de fumo mascado."
    },
    { 
        nome: "eritroleucoplasia", 
        url: "img/eritroleucoplasia.jpg",
        dicas: ["Lesão mista branca e vermelha.", "Chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia."],
        revisao: "Lesão mista que apresenta alto risco de displasia severa na biópsia."
    },
    { 
        nome: "malformação vascular", 
        url: "img/malformacao_vascular.jpg",
        dicas: ["Anomalia estrutural congênita.", "Não regride espontaneamente.", "Pode apresentar pulsação."],
        revisao: "Defeito na formação dos vasos presente desde o nascimento."
    },
    { 
        nome: "osteorradionecrose", 
        url: "img/osteorradionecrose.jpg",
        dicas: ["Exposição óssea pós-radioterapia.", "Hipovascularização e hipocelularidade.", "Dor e sequestro ósseo."],
        revisao: "Morte óssea causada pela radiação, que compromete a capacidade de cicatrização do osso."
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "img/lpcg.jpg",
        dicas: ["Nódulo gengival arroxeado.", "Surge do ligamento periodontal.", "Erosão óssea 'em taça'."],
        revisao: "Lesão reacional da gengiva que pode causar uma leve escavação no osso subjacente."
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "img/fop.jpg",
        dicas: ["Nódulo gengival firme.", "Contém calcificações internas.", "Exclusivo da gengiva."],
        revisao: "Crescimento benigno gengival que apresenta pontos de calcificação no exame histopatológico."
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "img/hiperplasia_medicamentosa.jpg",
        dicas: ["Aumento gengival por fármacos.", "Inicia nas papilas.", "Associada à higiene precária."],
        revisao: "Aumento gengival causado por remédios como Fenitoína ou Nifedipina."
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Glândula sublingual.", "Aspecto de 'ventre de rã'."],
        revisao: "Extravasamento de muco no assoalho da boca, geralmente da glândula sublingual."
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme no palato.", "Simula carcinoma.", "Autolimitada."],
        revisao: "Condição inflamatória que causa uma úlcera profunda mas que se cura sozinha."
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg",
        dicas: ["Lesão plana pigmentada única.", "Aumento de melanina.", "Comum em lábio inferior."],
        revisao: "Mancha marrom benigna comum no lábio, sem potencial de malignidade."
    },
    { 
        nome: "líquen plano erosivo", 
        url: "img/liquen_plano.jpg",
        dicas: ["Áreas vermelhas com estrias brancas.", "Forma clínica dolorosa.", "Bilateral e simétrico."],
        revisao: "Doença autoimune crônica que causa descamação e dor na mucosa."
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg",
        dicas: ["Lesão verrucosa sexual (HPV).", "Geralmente múltipla.", "Superfície em couve-flor."],
        revisao: "Verruga viral causada pelo HPV, transmitida por contato direto."
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg",
        dicas: ["Projeções papilares digitiformes.", "HPV 6 ou 11.", "Única e pediculada."],
        revisao: "Crescimento benigno em forma de 'verruga' causado por subtipos não agressivos do HPV."
    },
    { 
        nome: "estomatite urêmica", 
        url: "img/estomatite_uremica.jpg",
        dicas: ["Insuficiência renal avançada.", "Hálito com cheiro de amônia.", "Melhora após diálise."],
        revisao: "Manifestação bucal rara em pacientes com problemas renais graves."
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg",
        dicas: ["Nódulo amarelado macio.", "Tumor de gordura.", "Telangiectasias superficiais."],
        revisao: "Tumor benigno de gordura, muito macio e amarelado sob a mucosa."
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg",
        dicas: ["Tumor de glândula salivar comum.", "Crescimento lento e indolor.", "Cúpula da parótida."],
        revisao: "O tumor de glândula salivar mais comum, geralmente na parótida ou palato."
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg",
        dicas: ["Malignidade salivar mais comum.", "Pode ser azulado.", "Palato ou parótida."],
        revisao: "Câncer de glândula salivar mais frequente em adultos."
    }
];

// --- LÓGICA DO JOGO ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let totalScore = 0;
let timer;
let timeLeft = 45;
let lives = 3;

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
    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    imgElement.style.opacity = "0"; 
    imgElement.style.filter = "blur(15px)";
    imgElement.src = caso.url + "?v=" + new Date().getTime();
    
    imgElement.onload = () => { imgElement.style.opacity = "1"; };
    imgElement.onerror = () => { imgElement.src = "https://via.placeholder.com/500x400?text=Erro+na+Foto"; imgElement.style.opacity = "1"; };

    attempts = 0;
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').focus();
    document.getElementById('current-hints-list').innerHTML = "Analise a amostra...";
    
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 45;
    document.getElementById('timer-display').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = timeLeft;
        if (timeLeft <= 0) { clearInterval(timer); perderVida("Tempo esgotado!"); }
    }, 1000);
}

function checkGuess() {
    const guess = document.getElementById('guess-input').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (guess === correto) {
        clearInterval(timer);
        totalScore += Math.max(10, 50 - (attempts * 10));
        document.getElementById('pts').innerText = totalScore;
        showReview("✅ ACERTOU!", filaDeJogo[currentCaseIndex].revisao);
    } else {
        tratarErro();
    }
}

function tratarErro() {
    attempts++;
    if (attempts >= 4) { perderVida("Limite de erros atingido."); return; }
    document.getElementById('lesion-image').style.filter = `blur(${15 - (attempts * 4)}px)`;
    
    const div = document.createElement('div');
    div.className = 'hint-item';
    div.innerHTML = `<strong>Dica ${attempts}:</strong> ${filaDeJogo[currentCaseIndex].dicas[attempts-1]}`;
    if (attempts === 1) document.getElementById('current-hints-list').innerHTML = "";
    document.getElementById('current-hints-list').appendChild(div);
}

function perderVida(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    if (lives <= 0) { alert("Fim de jogo!"); prepararNovoJogo(); }
    else { showReview("❌ ERRO", `${motivo}<br>Era: ${filaDeJogo[currentCaseIndex].nome}`); }
}

function updateLivesDisplay() { document.getElementById('lives-display').innerHTML = "❤️".repeat(lives); }

function showReview(title, text) {
    document.getElementById('review-title').innerHTML = title;
    document.getElementById('review-text').innerHTML = text;
    document.getElementById('review-modal').style.display = "flex";
}

function closeReview() {
    document.getElementById('review-modal').style.display = "none";
    currentCaseIndex++;
    loadCase();
}

function fazerBiopsia() {
    totalScore -= 10;
    document.getElementById('pts').innerText = totalScore;
    showReview("🔬 BIÓPSIA", `Laudo: ${filaDeJogo[currentCaseIndex].nome}`);
}

document.getElementById('guess-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') checkGuess(); });
