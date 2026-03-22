const bancoDeLesoes = [
    { 
        nome: "língua saburrosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tongue_coated.jpg/640px-Tongue_coated.jpg",
        dicas: ["Acúmulo de debris epiteliais e restos alimentares.", "Removível com higienização lingual.", "Associada à hipossalivação."] 
    },
    { 
        nome: "língua pilosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hairy_tongue.jpg/640px-Hairy_tongue.jpg",
        dicas: ["Alongamento das papilas filiformes.", "Acúmulo de queratina no dorso lingual.", "Pode ter pigmentação variada."] 
    },
    { 
        nome: "morsicatio buccarum", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Morsicatio_buccarum.JPG/640px-Morsicatio_buccarum.JPG",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."] 
    },
    { 
        nome: "linha alba", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Linea_alba_buccalis.jpg/640px-Linea_alba_buccalis.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."] 
    },
    { 
        nome: "leucoedema", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Leukoedema.jpg/640px-Leukoedema.jpg",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."] 
    },
    { 
        nome: "nevo branco esponjoso", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/White_sponge_nevus.jpg/640px-White_sponge_nevus.jpg",
        dicas: ["Condição hereditária (queratina 4 ou 13).", "Placas brancas espessas e simétricas.", "Surge na infância."] 
    },
    { 
        nome: "leucoplasia", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Leukoplakia01.jpg/640px-Leukoplakia01.jpg",
        dicas: ["Placa branca não removível.", "Associação direta com tabagismo.", "Potencial de transformação maligna."] 
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Oral_candidiasis_01.jpg/640px-Oral_candidiasis_01.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum pós-uso de antibióticos."] 
    },
    { 
        nome: "líquen plano reticular", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lichen_planus_high_mag.jpg/640px-Lichen_planus_high_mag.jpg",
        dicas: ["Presença de estrias de Wickham brancas.", "Geralmente assintomático e bilateral.", "Infiltrado linfocitário em banda."] 
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Squamous_Cell_Carcinoma_1.jpg/640px-Squamous_Cell_Carcinoma_1.jpg",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."] 
    },
    { 
        nome: "granuloma piogênico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pyogenic_Granuloma.jpg/640px-Pyogenic_Granuloma.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."] },
    { 
        nome: "mucocele", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mucocele_lip.jpg/640px-Mucocele_lip.jpg",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e azulado.", "Localização mais comum: lábio inferior."] 
    },
    { 
        nome: "tatuagem por amálgama", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Amalgam_tattoo.JPG/640px-Amalgam_tattoo.JPG",
        dicas: ["Mácula cinza, azulada ou preta.", "Fragmentos de metal implantados na mucosa.", "Pode ser visível no exame radiográfico."] 
    },
    { 
        nome: "eritoplasia", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Erythroplakia.jpg/640px-Erythroplakia.jpg",
        dicas: ["Mancha vermelha aveludada não diagnosticável como outra condição.", "Altíssimo potencial de malignidade.", "Bordas bem definidas."] 
    },
    { 
        nome: "língua geográfica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Geographic_tongue.jpg/640px-Geographic_tongue.jpg",
        dicas: ["Zonas de eritema circundadas por bordas brancas sinuosas.", "Padrão migratório.", "Também chamada de eritema migratório."] 
    },
    { 
        nome: "queilite angular", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Angular_Cheilitis.jpg/640px-Angular_Cheilitis.jpg",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical.", "Infecção mista: Candida e Staphylococcus."] 
    },
    { 
        nome: "hemangioma", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hemangioma_tongue.jpg/640px-Hemangioma_tongue.jpg",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão (diascopia) positivo.", "Pode ser congênito."] 
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kaposi%27s_Sarcoma_Palate.jpg/640px-Kaposi%27s_Sarcoma_Palate.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Comum no palato de pacientes com AIDS.", "Máculas ou nódulos arroxeados."] 
    },
    { 
        nome: "hiperplasia fibrosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Epulis_fissuratum_01.jpg/640px-Epulis_fissuratum_01.jpg",
        dicas: ["Lesão reacional comum por trauma de prótese.", "Aumento de tecido conjuntivo fibroso.", "Também chamada de epúlide fissurada."] 
    },
    { 
        nome: "melanoma", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Malignant_melanoma_of_hard_palate.jpg/640px-Malignant_melanoma_of_hard_palate.jpg",
        dicas: ["Neoplasia maligna de melanócitos.", "Assimetria, bordas irregulares e cores variadas.", "Pior prognóstico em mucosa oral."] 
    },
    {
        nome: "estomatite nicotínica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nicotine_stomatitis_hard_palate.jpg/640px-Nicotine_stomatitis_hard_palate.jpg",
        dicas: ["Palato esbranquiçado com pontos vermelhos centrais.", "Inflamação dos ductos de glândulas salivares menores.", "Comum em fumantes de cachimbo."] 
    },
    { 
        nome: "necrose química", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Aspirin_burn.jpg/640px-Aspirin_burn.jpg",
        dicas: ["Membrana branca superficial por coagulação proteica.", "Causada por contato com substâncias cáusticas.", "Removível, deixando base eritematosa."] 
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Proliferative_verrucous_leukoplakia.jpg/640px-Proliferative_verrucous_leukoplakia.jpg",
        dicas: ["Múltiplas placas brancas que se espalham progressivamente.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos convencionais."] 
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Verrucous_carcinoma.jpg/640px-Verrucous_carcinoma.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento exofítico, lento e verruciforme.", "Raramente sofre metástase."] 
    },
    { 
        nome: "estomatite protética", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Denture_stomatitis.JPG/640px-Denture_stomatitis.JPG",
        dicas: ["Eritema restrito à área de suporte da prótese.", "Geralmente assintomática.", "Associada à higiene precária da dentadura."] 
    },
    { 
        nome: "glossite romboidal mediana", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Median_rhomboid_glossitis.jpg/640px-Median_rhomboid_glossitis.jpg",
        dicas: ["Zona de atrofia papilar no centro do dorso da língua.", "Forma de losango ou oval.", "Considerada uma forma de candidíase."] 
    },
    { 
        nome: "eritroleucoplasia", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Speckled_leukoplakia.jpg/640px-Speckled_leukoplakia.jpg",
        dicas: ["Lesão mista com componentes brancos e vermelhos.", "Também chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia pura."] 
    },
    { 
        nome: "malformação vascular", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Vascular_malformation_tongue.jpg/640px-Vascular_malformation_tongue.jpg",
        dicas: ["Anomalia estrutural presente ao nascimento.", "Não regride espontaneamente.", "Pode apresentar pulsação ou ruído."] 
    },
    { 
        nome: "angiomatose encefalotrigeminal", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sturge-Weber_Syndrome.jpg/640px-Sturge-Weber_Syndrome.jpg",
        dicas: ["Mancha vinho do porto na face (trajeto do trigêmeo).", "Síndrome de Sturge-Weber.", "Envolvimento vascular intracraniano."] 
    },
    { 
        nome: "osteorradionecrose", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Osteoradionecrosis.jpg/640px-Osteoradionecrosis.jpg",
        dicas: ["Exposição óssea após radioterapia em cabeça e pescoço.", "Hipovascularização e hipóxia tecidual.", "Dor e sequestro ósseo."] 
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Peripheral_giant_cell_granuloma.jpg/640px-Peripheral_giant_cell_granuloma.jpg",
        dicas: ["Nódulo gengival arroxeado ou azul-cianótico.", "Surge do ligamento periodontal ou periósteo.", "Pode causar erosão óssea superficial."] 
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Peripheral_ossifying_fibroma.jpg/640px-Peripheral_ossifying_fibroma.jpg",
        dicas: ["Nódulo gengival firme, séssil ou pediculado.", "Contém calcificações internas.", "Exclusivo da gengiva."] 
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Gingival_hyperplasia_phenytoin.jpg/640px-Gingival_hyperplasia_phenytoin.jpg",
        dicas: ["Aumento gengival associado a fármacos (ex: Fenitoína).", "Inicia-se nas papilas interdentais.", "Pode recobrir a coroa dos dentes."] 
    },
    { 
        nome: "rânula", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ranula_floor_of_mouth.jpg/640px-Ranula_floor_of_mouth.jpg",
        dicas: ["Mucocele no assoalho da boca.", "Proveniente da glândula sublingual.", "Pode elevar a língua."] 
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Necrotizing_sialometaplasia.jpg/640px-Necrotizing_sialometaplasia.jpg",
        dicas: ["Úlcera crateriforme profunda no palato.", "Simula clinicamente um câncer.", "Autolimitada (cura em 6-10 semanas)."] 
    },
    { 
        nome: "mácula melanótica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Oral_melanotic_macule.jpg/640px-Oral_melanotic_macule.jpg",
        dicas: ["Lesão plana e pigmentada única.", "Aumento focal de melanina.", "Local comum: vermelhão do lábio inferior."] 
    },
    { 
        nome: "melanose do fumante", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Smoker%27s_melanosis.jpg/640px-Smoker%27s_melanosis.jpg",
        dicas: ["Pigmentação acastanhada difusa.", "Mais comum na gengiva anterior vestibular.", "Reação protetora ao calor do tabaco."] 
    },
    { 
        nome: "doença de addison", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hyperpigmentation_Addison.jpg/640px-Hyperpigmentation_Addison.jpg",
        dicas: ["Hiperpigmentação difusa (cor de bronze).", "Insuficiência da glândula suprarrenal.", "Aumento do ACTH estimula melanócitos."] 
    },
    { 
        nome: "síndrome de peutz-jeghers", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Peutz-Jeghers_Syndrome_Lips.jpg/640px-Peutz-Jeghers_Syndrome_Lips.jpg",
        dicas: ["Máculas pigmentadas (efélides) nos lábios.", "Pólipos intestinais benignos.", "Condição hereditária autossômica dominante."] 
    },
    { 
        nome: "líquen plano erosivo", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erosive_lichen_planus.jpg/640px-Erosive_lichen_planus.jpg",
        dicas: ["Áreas vermelhas ulceradas com estrias brancas periféricas.", "Forma muito dolorosa.", "Frequentemente bilateral."] 
    },
    { 
        nome: "condiloma acuminado", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Condyloma_acuminatum_tongue.jpg/640px-Condyloma_acuminatum_tongue.jpg",
        dicas: ["Lesão verrucosa transmitida sexualmente (HPV).", "Geralmente múltipla e de base séssil.", "Superfície romba (menos pontiaguda que papiloma)."] 
    },
    { 
        nome: "papiloma escamoso", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Oral_papilloma.jpg/640px-Oral_papilloma.jpg",
        dicas: ["Projeções papilares digitiformes ('couve-flor').", "Induzida pelo HPV 6 ou 11.", "Geralmente única e pediculada."] 
    },
    { 
        nome: "líquen plano atrófico em gengiva", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Desquamative_gingivitis_lichen_planus.jpg/640px-Desquamative_gingivitis_lichen_planus.jpg",
        dicas: ["Manifesta-se como gengivite descamativa.", "Epitélio gengival fino e friável.", "Pode apresentar estrias de Wickham discretas."] 
    },
    { 
        nome: "líquen plano em placa", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Plaque-type_lichen_planus.jpg/640px-Plaque-type_lichen_planus.jpg",
        dicas: ["Área branca sólida que simula leucoplasia.", "Localização comum: dorso da língua.", "Histórico de outras formas de líquen plano."] 
    },
    { 
        nome: "queilite por canela", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinnamon_stomatitis.jpg/640px-Cinnamon_stomatitis.jpg",
        dicas: ["Reação ao cinamaldeído (gomas de mascar/balas).", "Mucosa bucal esbranquiçada e descamativa.", "Pode causar dor e queimação."] 
    },
    { 
        nome: "estomatite urêmica", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Uremic_stomatitis.jpg/640px-Uremic_stomatitis.jpg",
        dicas: ["Ocorre em pacientes com falência renal aguda.", "Placas brancas difusas e hálito amoniacal.", "Melhora após diálise."] 
    },
    { 
        nome: "nevo melanocítico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Intramucosal_nevus.jpg/640px-Intramucosal_nevus.jpg",
        dicas: ["Pápula pigmentada bem circunscrita.", "Equivalente à 'pinta' na mucosa.", "Local mais comum: palato duro."] 
    },
    { 
        nome: "lipoma", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Oral_lipoma.jpg/640px-Oral_lipoma.jpg",
        dicas: ["Nódulo amarelado de consistência macia.", "Tumor benigno de tecido adiposo.", "Frequentemente apresenta vasos superficiais evidentes."] 
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pleomorphic_adenoma_palate.jpg/640px-Pleomorphic_adenoma_palate.jpg",
        dicas: ["Tumor de glândula salivar mais comum.", "Massa firme de crescimento lento.", "Localização comum: palato ou parótida."] 
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mucoepidermoid_carcinoma.jpg/640px-Mucoepidermoid_carcinoma.jpg",
        dicas: ["Malignidade de glândula salivar mais comum.", "Pode apresentar aspecto azulado (lembrando mucocele).", "Geralmente no palato."] 
    },
    { 
        nome: "síndrome de sjogren", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sjogrens_Tongue.jpg/640px-Sjogrens_Tongue.jpg",
        dicas: ["Língua fissurada e seca (xerostomia).", "Doença autoimune que afeta glândulas lacrimais e salivares.", "Aumento bilateral de parótidas."] 
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
    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    
    imgElement.style.opacity = "0.3"; 
    
    const loader = new Image();
    loader.src = caso.url;
    
    loader.onload = function() {

        imgElement.src = caso.url;
        imgElement.style.opacity = "1";
        imgElement.style.filter = "blur(30px)";
    };
    loader.onerror = function() {
        imgElement.src = "https://via.placeholder.com/500?text=Erro+ao+Carregar+Imagem";
        imgElement.style.opacity = "1";
    };

    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('feedback').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').disabled = false;
    document.getElementById('current-hints-list').innerHTML = '<span>Aguardando análise...</span>';
    
    blurValue = 30;
    attempts = 0;
    document.getElementById('guess-input').focus();
}

function checkGuess() {
    const inputField = document.getElementById('guess-input');
    const guess = inputField.value.toLowerCase().trim();
    const casoAtual = filaDeJogo[currentCaseIndex];
    
    if (guess === casoAtual.nome) {
        document.getElementById('lesion-image').style.filter = "blur(0px)";
        document.getElementById('feedback').innerText = "✅ Diagnóstico Confirmado: " + casoAtual.nome.toUpperCase();
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
