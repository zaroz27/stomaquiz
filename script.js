const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Hairy_tongue.jpg",
        dicas: ["Alongamento das papilas filiformes.", "Acúmulo de queratina no dorso lingual.", "Pode ter pigmentação variada."] 
    },
    { 
        nome: "morsicatio buccarum", 
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Morsicatio_buccarum.JPG",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."] 
    },
    { 
        nome: "linha alba", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Linea_alba_buccalis.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."] 
    },
    { 
        nome: "leucoedema", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Leukoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."] 
    },
    { 
        nome: "leucoplasia", 
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Leukoplakia01.jpg",
        dicas: ["Placa branca não removível.", "Associação direta com tabagismo.", "Potencial de transformação maligna."] 
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Oral_candidiasis_01.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum pós-uso de antibióticos."] 
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "https://upload.wikimedia.org/wikipedia/commons/2/25/Squamous_Cell_Carcinoma_1.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."] 
    },
    { 
        nome: "granuloma piogênico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Pyogenic_Granuloma.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."] },
    { 
        nome: "mucocele", 
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mucocele_lip.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e azulado.", "Localização mais comum: lábio inferior."] 
    },
    { 
        nome: "eritoplasia", 
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Erythroplakia.jpg",
        dicas: ["Mancha vermelha aveludada não diagnosticável como outra condição.", "Altíssimo potencial de malignidade.", "Bordas bem definidas."] 
    },
    { 
        nome: "queilite angular", 
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Angular_Cheilitis.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical.", "Infecção mista: Candida e Staphylococcus."] 
    },
    { 
        nome: "hemangioma", 
        url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hemangioma_tongue.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão (diascopia) positivo.", "Pode ser congênito."] 
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Kaposi%27s_Sarcoma_Palate.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Comum no palato de pacientes com AIDS.", "Máculas ou nódulos arroxeados."] 
    },
    { 
        nome: "melanoma", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Malignant_melanoma_of_hard_palate.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Assimetria, bordas irregulares e cores variadas.", "Pior prognóstico em mucosa oral."] 
    },
    {
        nome: "estomatite nicotínica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/12/Nicotine_stomatitis_hard_palate.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos centrais.", "Inflamação dos ductos de glândulas salivares menores.", "Comum em fumantes de cachimbo."] 
    },
    { 
        nome: "necrose química", 
        url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Aspirin_burn.jpg",
        dicas: ["Membrana branca superficial por coagulação proteica.", "Causada por contato com substâncias cáusticas.", "Removível, deixando base eritematosa."] 
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Proliferative_verrucous_leukoplakia.jpg",
        dicas: ["Múltiplas placas brancas que se espalham progressivamente.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos convencionais."] 
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Verrucous_carcinoma.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento exofítico, lento e verruciforme.", "Raramente sofre metástase."] 
    },

    { 
        nome: "eritroleucoplasia", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Speckled_leukoplakia.jpg",
        dicas: ["Lesão mista com componentes brancos e vermelhos.", "Também chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia pura."] 
    },
    { 
        nome: "malformação vascular", 
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Vascular_malformation_tongue.jpg",
        dicas: ["Anomalia estrutural presente ao nascimento.", "Não regride espontaneamente.", "Pode apresentar pulsação ou ruído."] 
    },
    { 
        nome: "osteorradionecrose", 
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Osteoradionecrosis.jpg",
        dicas: ["Exposição óssea após radioterapia em cabeça e pescoço.", "Hipovascularização e hipóxia tecidual.", "Dor e sequestro ósseo."] 
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Peripheral_giant_cell_granuloma.jpg",
        dicas: ["Nódulo gengival arroxeado ou azul-cianótico.", "Surge do ligamento periodontal ou periósteo.", "Pode causar erosão óssea superficial."] 
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Peripheral_ossifying_fibroma.jpg",
        dicas: ["Nódulo gengival firme, séssil ou pediculado.", "Contém calcificações internas.", "Exclusivo da gengiva."] 
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gingival_hyperplasia_phenytoin.jpg",
        dicas: ["Aumento gengival associado a fármacos (ex: Fenitoína).", "Inicia-se nas papilas interdentais.", "Pode recobrir a coroa dos dentes."] 
    },
    { 
        nome: "rânula", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ranula_floor_of_mouth.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Proveniente da glândula sublingual.", "Pode elevar a língua."] 
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Necrotizing_sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme profunda no palato.", "Simula clinicamente um câncer.", "Autolimitada (cura em 6-10 semanas)."] 
    },
    { 
        nome: "mácula melanótica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Oral_melanotic_macule.jpg",
        dicas: ["Lesão plana e pigmentada única.", "Aumento focal de melanina.", "Local comum: vermelhão do lábio inferior."] 
    },
    { 
        nome: "melanose do fumante", 
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Smoker%27s_melanosis.jpg",
        dicas: ["Pigmentação acastanhada difusa.", "Mais comum na gengiva anterior vestibular.", "Reação protetora ao calor do tabaco."] 
    },
    { 
        nome: "líquen plano erosivo", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/07/Erosive_lichen_planus.jpg",
        dicas: ["Áreas vermelhas ulceradas com estrias brancas periféricas.", "Forma muito dolorosa.", "Frequentemente bilateral."] 
    },
    { 
        nome: "condiloma acuminado", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Condyloma_acuminatum_tongue.jpg",
        dicas: ["Lesão verrucosa transmitida sexualmente (HPV).", "Geralmente múltipla e de base séssil.", "Superfície romba (menos pontiaguda que papiloma)."] 
    },
    { 
        nome: "papiloma escamoso", 
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Oral_papilloma.jpg",
        dicas: ["Projeções papilares digitiformes ('couve-flor').", "Induzida pelo HPV 6 ou 11.", "Geralmente única e pediculada."] 
    },
    { 
        nome: "estomatite urêmica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Uremic_stomatitis.jpg",
        dicas: ["Ocorre em pacientes com falência renal aguda.", "Placas brancas difusas e hálito amoniacal.", "Melhora após diálise."] 
    },
    { 
        nome: "lipoma", 
        url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Oral_lipoma.jpg",
        dicas: ["Nódulo amarelado de consistência macia.", "Tumor benigno de tecido adiposo.", "Frequentemente apresenta vasos superficiais evidentes."] 
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pleomorphic_adenoma_palate.jpg",
        dicas: ["Tumor de glândula salivar mais comum.", "Massa firme de crescimento lento.", "Localização comum: palato ou parótida."] 
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mucoepidermoid_carcinoma.jpg",
        dicas: ["Malignidade de glândula salivar mais comum.", "Pode apresentar aspecto azulado (lembrando mucocele).", "Geralmente no palato."] 
    },

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
    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    const hintsList = document.getElementById('current-hints-list');

    imgElement.style.opacity = "0"; 
    imgElement.style.filter = "blur(30px)";

    const loader = new Image();
    loader.src = caso.url;
    
    loader.onload = function() {
        imgElement.src = caso.url;
        imgElement.style.opacity = "1";
    };

    loader.onerror = function() {
        imgElement.src = "https://via.placeholder.com/500?text=Imagem+Nao+Encontrada";
        imgElement.style.opacity = "1";
    };

    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('feedback').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').disabled = false;
    hintsList.innerHTML = '<span style="color: #999;">Aguardando submissão inicial...</span>';
    
    blurValue = 30;
    attempts = 0;
    document.getElementById('guess-input').focus();
}

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    const guess = inputField.value.toLowerCase().trim();
    const casoAtual = filaDeJogo[currentCaseIndex];
    
    if (guess === casoAtual.nome.toLowerCase()) {

        document.getElementById('lesion-image').style.filter = "blur(0px)";
        document.getElementById('feedback').innerText = "✨ Diagnóstico Confirmado: " + casoAtual.nome.toUpperCase();
        document.getElementById('feedback').style.display = "block";
        document.getElementById('next-btn').style.display = "block";
        inputField.disabled = true;
    } else {

        attempts++;
        blurValue = Math.max(0, blurValue - 6);
        document.getElementById('lesion-image').style.filter = `blur(${blurValue}px)`;
        
        const hintsList = document.getElementById('current-hints-list');
        if (attempts === 1) hintsList.innerHTML = ""; 

        if (casoAtual.dicas[attempts - 1]) {
            const hintDiv = document.createElement('div');
            hintDiv.className = 'hint-item';
            hintDiv.innerHTML = `<strong>Pista ${attempts}:</strong> ${casoAtual.dicas[attempts - 1]}`;
            hintsList.appendChild(hintDiv);
        }
        
        inputField.value = "";
        inputField.focus();
    }
}

function nextLevel() {
    currentCaseIndex++;
    if (currentCaseIndex < filaDeJogo.length) {
        loadCase();
    } else {
        alert("📚 Atlas Concluído! Reiniciando o estudo...");
        prepararNovoJogo();
    }
}

document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
