// --- BANCO DE DADOS CORRIGIDO ---
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
        revisao: "O Morsicatio Buccarum é causado por traumatismo crônico (hábito de morder as bochechas), resultando em placas brancas descamativas e irregulares."
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."],
        revisao: "A linha alba é uma alteração comum da mucosa bucal, causada por pressão, fricção ou trauma de sucção dos dentes faciais."
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."],
        revisao: "O leucoedema é uma variação da normalidade que apresenta aspecto esbranquiçado leitoso. O diagnóstico clínico é confirmado quando a aparência diminui ou desaparece ao esticar a mucosa."
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg",
        dicas: ["Placa branca não removível à raspagem.", "Associação direta com tabagismo.", "Potencial de transformação maligna."],
        revisao: "A leucoplasia é uma mancha ou placa branca que não pode ser caracterizada clinica ou patologicamente como qualquer outra doença, sendo considerada uma lesão potencialmente maligna."
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum após uso de antibióticos ou imunossupressão."],
        revisao: "Caracterizada por placas brancas removíveis que deixam uma base eritematosa. É causada pelo crescimento excessivo de espécies de Candida."
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."],
        revisao: "O CEC representa a grande maioria dos cânceres de boca. Clinicamente apresenta-se como úlceras persistentes com bordas elevadas e endurecidas."
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."],
        revisao: "Apesar do nome, não é um granuloma verdadeiro, mas uma proliferação de tecido de granulação em resposta a irritantes locais ou trauma."
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e frequentemente azulado.", "Localização mais comum: lábio inferior."],
        revisao: "Resulta da ruptura de um ducto de glândula salivar menor e extravasamento de muco para os tecidos moles circundantes."
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg",
        dicas: ["Mancha vermelha aveludada não diagnosticável como outra condição.", "Altíssimo potencial de malignidade.", "Bordas geralmente bem definidas."],
        revisao: "A eritroplasia é uma mancha vermelha da mucosa oral que não pode ser diagnosticada como nenhuma outra condição. Tem um risco de transformação maligna muito maior que a leucoplasia."
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical (DVO).", "Infecção mista: Candida e Staphylococcus."],
        revisao: "Ocorre frequentemente em pacientes idosos com perda de dimensão vertical ou em crianças devido à salivação excessiva nas comissuras."
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão (diascopia) positivo.", "Pode ser congênito."],
        revisao: "Tumores benignos da infância que apresentam uma fase de proliferação rápida seguida por involução gradual."
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Muito comum no palato de pacientes com HIV/AIDS.", "Máculas ou nódulos arroxeados."],
        revisao: "Uma neoplasia vascular causada pelo herpesvírus humano 8. É uma das manifestações bucais comuns da AIDS."
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Regra do ABCDE: Assimetria, Bordas irregulares, Cores variadas.", "Pior prognóstico em mucosa oral que na pele."],
        revisao: "O melanoma oral é raro e agressivo. Diferente do cutâneo, não tem relação clara com a exposição solar."
    },
    {
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos centrais.", "Inflamação dos ductos de glândulas salivares menores.", "Comum em fumantes de cachimbo ou cigarro invertido."],
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
        revisao: "Também conhecido como tumor de Ackerman, é um carcinoma de baixo grau associado frequentemente ao uso de fumo sem fumaça."
    },
    { 
        nome: "eritroleucoplasia", 
        url: "img/eritroleucoplasia.jpg",
        dicas: ["Lesão mista com componentes brancos e vermelhos.", "Também chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia pura."],
        revisao: "Uma lesão clinicamente mista que exibe áreas brancas e vermelhas. Frequentemente demonstra displasia severa ou carcinoma in situ na biópsia."
    },
    { 
        nome: "malformação vascular", 
        url: "img/malformacao_vascular.jpg",
        dicas: ["Anomalia estrutural presente ao nascimento.", "Não regride espontaneamente.", "Pode apresentar pulsação ou ruído à ausculta."],
        revisao: "São erros inatos da morfogênese vascular. Diferente do hemangioma, elas crescem proporcionalmente ao paciente e não sofrem involução."
    },
    { 
        nome: "osteorradionecrose", 
        url: "img/osteorradionecrose.jpg",
        dicas: ["Exposição óssea após radioterapia em cabeça e pescoço.", "Hipovascularização, hipóxia e hipocelularidade.", "Dor intensa e sequestro ósseo."],
        revisao: "Uma das complicações mais graves da radioterapia. O osso torna-se desvitalizado e incapaz de se reparar em resposta a trauma ou infecção."
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "img/lpcg.jpg",
        dicas: ["Nódulo gengival arroxeado ou azul-cianótico.", "Surge do ligamento periodontal ou periósteo.", "Pode causar erosão óssea superficial 'em taça'."],
        revisao: "Lesão reacional causada por irritação local. Clinicamente pode mimetizar um granuloma piogênico, mas tende a ser mais arroxeada."
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "img/fop.jpg",
        dicas: ["Nódulo gengival firme, séssil ou pediculado.", "Contém calcificações (osso ou cemento) internas.", "Exclusivo da gengiva."],
        revisao: "Um crescimento gengival comum que se acredita ser reacional. A característica distintiva é a presença de calcificações no tecido conjuntivo fibroso."
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "img/hiperplasia_medicamentosa.jpg",
        dicas: ["Aumento gengival associado a fármacos (Fenitoína, Ciclosporina, Nifedipina).", "Inicia-se nas papilas interdentais.", "Pode recobrir a coroa dos dentes."],
        revisao: "Resposta tecidual exagerada ao uso de certos medicamentos. A gravidade depende frequentemente do nível de higiene bucal do paciente."
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Proveniente da glândula sublingual.", "Aspecto de 'ventre de rã'."],
        revisao: "Ocorre no assoalho da boca devido ao extravasamento de muco da glândula sublingual. Pode ser 'mergulhante' quando ultrapassa o músculo milo-hioideo."
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme profunda no palato.", "Simula clinicamente um carcinoma.", "Autolimitada (cura espontânea em semanas)."],
        revisao: "Condição inflamatória idiopática das glândulas salivares. Importante por mimetizar malignidade tanto clínica quanto histologicamente."
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg",
        dicas: ["Lesão plana e pigmentada única.", "Aumento focal de produção de melanina.", "Local comum: vermelhão do lábio inferior."],
        revisao: "Lesão plana, pequena e acastanhada. É benigna e não tem relação com exposição solar, sendo apenas um depósito aumentado de melanina."
    },
    { 
        nome: "líquen plano erosivo", 
        url: "img/liquen_plano.jpg",
        dicas: ["Áreas vermelhas ulceradas com estrias brancas (Wickham) periféricas.", "Forma clínica dolorosa.", "Frequentemente bilateral e simétrico."],
        revisao: "Doença imunologicamente mediada. A forma erosiva é sintomática e requer tratamento com corticosteroides."
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg",
        dicas: ["Lesão verrucosa transmitida sexualmente (HPV).", "Geralmente múltipla e de base séssil.", "Superfície romba (em couve-flor)."],
        revisao: "Proliferação epitelial induzida pelo HPV. Na boca, é considerada uma doença sexualmente transmissível através do sexo oral."
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg",
        dicas: ["Projeções papilares digitiformes.", "Induzida pelo HPV 6 ou 11.", "Geralmente única e pediculada."],
        revisao: "Proliferação benigna do epitélio escamoso. Clinicamente apresenta-se como uma massa exofítica com numerosas projeções pontiagudas."
    },
    { 
        nome: "estomatite urêmica", 
        url: "img/estomatite_uremica.jpg",
        dicas: ["Ocorre em pacientes com insuficiência renal avançada.", "Placas brancas difusas e hálito com cheiro de amônia.", "Melhora significativamente após diálise."],
        revisao: "Rara manifestação de uremia persistente. A decomposição da ureia salivar pela urease libera amônia, que danifica a mucosa."
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg",
        dicas: ["Nódulo amarelado de consistência macia à palpação.", "Tumor benigno de tecido adiposo.", "Frequentemente apresenta vasos superficiais (telangiectasias)."],
        revisao: "Tumor benigno de gordura. Embora muito comum na pele, é menos frequente na boca, ocorrendo mais em mucosa jugal e língua."
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg",
        dicas: ["Tumor de glândula salivar mais comum.", "Massa firme de crescimento lento e indolor.", "Localização mais frequente: cauda da parótida."],
        revisao: "Tumor misto benigno. Chama-se pleomórfico pela sua diversidade histológica, podendo conter tecidos ductais, mioepiteliais e estroma condroide."
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg",
        dicas: ["Malignidade de glândula salivar mais comum em adultos e crianças.", "Pode apresentar aspecto azulado (lembrando mucocele).", "Geralmente ocorre no palato ou parótida."],
        revisao: "Composto por células produtoras de muco e células epidermoides. O prognóstico depende do grau histológico (baixo, intermediário ou alto)."
    }
];

// --- VARIÁVEIS DE JOGO ---
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 15;
let totalScore = 0;
let timer;
let timeLeft = 45;
let lives = 3;
const MAX_LIVES = 3;

// --- INICIALIZAÇÃO ---
window.onload = () => {
    if (typeof bancoDeLesoes !== 'undefined' && bancoDeLesoes.length > 0) {
        prepararNovoJogo();
    } else {
        alert("Erro ao carregar banco de dados.");
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
    imgElement.src = caso.url + "?t=" + new Date().getTime();
    
    imgElement.onload = () => { imgElement.style.opacity = "1"; };
    imgElement.onerror = () => {
        imgElement.src = "https://via.placeholder.com/500x400?text=Imagem+Nao+Encontrada";
        imgElement.style.opacity = "1";
    };

    attempts = 0;
    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('guess-input').value = "";
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
    const guess = document.getElementById('guess-input').value.toLowerCase().trim();
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase();

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
}

function perderVida(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    if (lives <= 0) {
        alert("GAME OVER!");
        prepararNovoJogo();
    } else {
        showReview("❌ ERRO CLÍNICO", `Motivo: ${motivo}<br><br>Diagnóstico: <strong>${filaDeJogo[currentCaseIndex].nome}</strong>`);
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
    if (confirm("Gastar 5 pontos para o laudo?")) {
        clearInterval(timer);
        totalScore += 5;
        document.getElementById('pts').innerText = totalScore;
        showReview("🔬 BIÓPSIA", `Laudo: ${filaDeJogo[currentCaseIndex].nome}`);
    }
}

function revealExtraHint() {
    alert("DICA: " + filaDeJogo[currentCaseIndex].dicas[0]);
}

function updateRank() {
    let r = "Acadêmico";
    if (totalScore > 300) r = "Monitor";
    if (totalScore > 700) r = "Residente";
    if (totalScore > 1200) r = "Estomatologista";
    document.getElementById('rank').innerText = r;
}

document.getElementById('guess-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') checkGuess(); });
