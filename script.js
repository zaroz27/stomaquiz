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

let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 30;

window.onload = prepararNovoJogo;

function prepararNovoJogo() {
  
    filaDeJogo = [...bancoDeLesoes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 30);
    
    currentCaseIndex = 0;
    loadCase();
}

function loadCase() {
    if (filaDeJogo.length === 0) return;

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    const hintsList = document.getElementById('current-hints-list');

    imgElement.style.opacity = "0"; 
    imgElement.style.filter = "blur(30px)";
    blurValue = 30;
    attempts = 0;

    imgElement.src = caso.url;
    imgElement.onload = () => {
        imgElement.style.opacity = "1";
    };

    imgElement.onerror = () => {
        imgElement.src = "https://via.placeholder.com/500?text=Imagem+Nao+Encontrada+na+Pasta+img";
        imgElement.style.opacity = "1";
    };

    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('feedback').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

    hintsList.innerHTML = '<span style="color: #999;">Aguardando submissão inicial...</span>';
}

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    const guess = inputField.value.toLowerCase().trim();
    const casoAtual = filaDeJogo[currentCaseIndex];
    
    if (guess === casoAtual.nome.toLowerCase()) {
        vitoria(casoAtual);
    } else {
        erro(casoAtual);
    }
}

function vitoria(caso) {
    const imgElement = document.getElementById('lesion-image');
    const inputField = document.getElementById('guess-input');
    const feedback = document.getElementById('feedback');

    imgElement.style.filter = "blur(0px)";
    feedback.innerText = "✨ Diagnóstico Confirmado: " + caso.nome.toUpperCase();
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#eafaf1";
    feedback.style.color = "#27ae60";
    
    document.getElementById('next-btn').style.display = "block";
    inputField.disabled = true;
}

function erro(caso) {
    attempts++;

    blurValue = Math.max(0, blurValue - 7);
    document.getElementById('lesion-image').style.filter = `blur(${blurValue}px)`;
    
    const hintsList = document.getElementById('current-hints-list');
    if (attempts === 1) hintsList.innerHTML = ""; 

    if (caso.dicas && caso.dicas[attempts - 1]) {
        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-item';
        hintDiv.innerHTML = `<strong>Pista ${attempts}:</strong> ${caso.dicas[attempts - 1]}`;
        hintsList.appendChild(hintDiv);
    } else {
        const aviso = document.createElement('div');
        aviso.style.fontSize = "0.8rem";
        aviso.style.marginTop = "5px";
        aviso.innerHTML = "<em>Sem mais pistas disponíveis para este caso.</em>";
        if (attempts === caso.dicas.length + 1) hintsList.appendChild(aviso);
    }
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.focus();
}

function nextLevel() {
    currentCaseIndex++;
    if (currentCaseIndex < filaDeJogo.length) {
        loadCase();
    } else {
        alert("📚 Você concluiu o Atlas de Patologia Oral! Excelente estudo.");
        prepararNovoJogo();
    }
}

document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
