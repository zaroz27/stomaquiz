const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "https://uploads.folhavitoria.com.br/2024/10/42Er4Fnm-d570dc10-78d4-0138-49c9-0a58a9feac2a-minified.jpg",
    },
    { 
        nome: "morsicatio buccarum", 
        url: "https://www.dermatologyadvisor.com/wp-content/uploads/sites/20/2019/03/ch1223.fig1_-768x636.jpg",
        dicas: ["Hábito de mordiscamento da mucosa bucal.", "Aspecto macerado e descamativo.", "Localizada na linha de oclusão."] 
    },
    { 
        nome: "linha alba", 
        url: "https://blog.dentalcremer.com.br/wp-content/uploads/2018/08/dtm-pt.-1-maria-paula-300x225.jpg",
        dicas: ["Linha branca horizontal na mucosa bucal.", "Resultante da pressão dos dentes.", "Variação da normalidade bilateral."] 
    },
    { 
        nome: "leucoedema", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyFEuMGIvn2l_GX6ykZ0Eyhd3aZhdjmq1og&s",
        dicas: ["Opalescência difusa, cinza-esbranquiçada.", "Desaparece ao esticar a mucosa.", "Comum em pacientes negros."] 
    },
    { 
        nome: "leucoplasia", 
        url: "https://opmdcare.com/wp-content/uploads//leukoplakia-image3-1024x683.jpeg",
        dicas: ["Placa branca não removível.", "Associação direta com tabagismo.", "Potencial de transformação maligna."] 
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "https://www.mdsaude.com/wp-content/uploads/candidiase-lingua4.jpg",
        dicas: ["Placas brancas removíveis (leite coalhado).", "Sintomatologia de queimação.", "Comum pós-uso de antibióticos."] 
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "https://curaprox.pt/modules/advancedcms/uploads/AdvancedCmsBlockTeaser/212/oral-cancer-detail.webp",
        dicas: ["Neoplasia maligna mais comum da boca.", "Úlcera com bordas endurecidas que não cicatriza.", "Pode se apresentar como exofítica ou infiltrativa."] 
    },
    { 
        nome: "granuloma piogênico", 
        url: "https://patologiabucal.com.br/wp-content/uploads/GranulomaPiogenico-1.jpg",
        dicas: ["Nódulo vermelho, friável e que sangra facilmente.", "Crescimento rápido e reacional.", "Comum em gengiva e em gestantes."] },
    { 
        nome: "mucocele", 
        url: "https://image.tuasaude.com/media/article/n9/0c/mucocele_653.jpg?width=686&height=487",
        dicas: ["Ruptura de ducto salivar com extravasamento de mucina.", "Nódulo flutuante e azulado.", "Localização mais comum: lábio inferior."] 
    },
    { 
        nome: "eritoplasia", 
        url: "https://opmdcare.com/wp-content/uploads/oral-erythroplakia-image2.jpeg",
        dicas: ["Mancha vermelha aveludada não diagnosticável como outra condição.", "Altíssimo potencial de malignidade.", "Bordas bem definidas."] 
    },
    { 
        nome: "queilite angular", 
        url: "https://i0.wp.com/wilsoncorreia.com.br/storage/2018/10/boqueira.jpg?resize=1140%2C640&ssl=1",
        dicas: ["Eritema e fissuras nas comissuras labiais.", "Associada à perda de dimensão vertical.", "Infecção mista: Candida e Staphylococcus."] 
    },
    { 
        nome: "hemangioma", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShIvgwZrLMEfuyrf81NH0Vsg4n4xDFCeL-w&s",
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão (diascopia) positivo.", "Pode ser congênito."] 
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "https://www.oncologynurseadvisor.com/wp-content/uploads/sites/13/2019/01/607261_301876.jpg",
        dicas: ["Neoplasia vascular associada ao HHV-8.", "Comum no palato de pacientes com AIDS.", "Máculas ou nódulos arroxeados."] 
    },
    { 
        nome: "melanoma", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYxClR7beYiMxRVQ384hhCWrUFVunYtSuIw&s",
        dicas: ["Neoplasia maligna de melanócitos.", "Assimetria, bordas irregulares e cores variadas.", "Pior prognóstico em mucosa oral."] 
    },
    {
        nome: "estomatite nicotínica", 
        url: "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/49a90bc3-9451-4b08-9972-5ccb14eded5e",
        dicas: ["Palato esbranquiçado com pontos vermelhos centrais.", "Inflamação dos ductos de glândulas salivares menores.", "Comum em fumantes de cachimbo."] 
    },
    { 
        nome: "leucoplasia verrucosa proliferativa", 
        url: "https://www.scielo.cl/fbpe/img/ijodontos/v7n3/art07_f2.jpg",
        dicas: ["Múltiplas placas brancas que se espalham progressivamente.", "Altíssima taxa de transformação maligna.", "Resistente a tratamentos convencionais."] 
    },
    { 
        nome: "carcinoma verrucoso", 
        url: "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/15a3/10039467/e9e81ef15298/raon-57-001-g001.jpg",
        dicas: ["Variante de baixo grau do CEC.", "Crescimento exofítico, lento e verruciforme.", "Raramente sofre metástase."] 
    },
    { 
        nome: "eritroleucoplasia", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5IbZ99ISTy1uhPbXk8TIoT9oBNsq5IX4Bg&s",
        dicas: ["Lesão mista com componentes brancos e vermelhos.", "Também chamada de leucoplasia pintalgada.", "Risco de câncer superior à leucoplasia pura."] 
    },
    { 
        nome: "malformação vascular", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kyslyXC2FxuxlpEdVpWzO7NnPPXhXewM1Q&s",
        dicas: ["Anomalia estrutural presente ao nascimento.", "Não regride espontaneamente.", "Pode apresentar pulsação ou ruído."] 
    },
    { 
        nome: "osteorradionecrose", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNAFOv_RPIaXpzhL5egC0wK0vTn_3e5UWrA&s",
        dicas: ["Exposição óssea após radioterapia em cabeça e pescoço.", "Hipovascularização e hipóxia tecidual.", "Dor e sequestro ósseo."] 
    },
    { 
        nome: "lesão periférica de células gigantes", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a0dhnfSfWxYgio8ARbqAZf4UvNnrcQgpYQ&s",
        dicas: ["Nódulo gengival arroxeado ou azul-cianótico.", "Surge do ligamento periodontal ou periósteo.", "Pode causar erosão óssea superficial."] 
    },
    { 
        nome: "fibroma ossificante periférico", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPhkuVq_v9XEo2BXmnbEcQNQrE204fGzZCA&s",
        dicas: ["Nódulo gengival firme, séssil ou pediculado.", "Contém calcificações internas.", "Exclusivo da gengiva."] 
    },
    { 
        nome: "hiperplasia gengival medicamentosa", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7GDqYe3TtLLSl2H5MbLSEhlnlD46tv557g&s",
        dicas: ["Aumento gengival associado a fármacos (ex: Fenitoína).", "Inicia-se nas papilas interdentais.", "Pode recobrir a coroa dos dentes."] 
    },
    { 
        nome: "rânula", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUzirzVAOHKcWrL5MRq723XZDb07-rOGVPA&s",
        dicas: ["Mucocele no assoalho da boca.", "Proveniente da glândula sublingual.", "Pode elevar a língua."] 
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQkokqlO376ViYl2IsfdQnkPEx9OAtG-TmQ&s",
        dicas: ["Úlcera crateriforme profunda no palato.", "Simula clinicamente um câncer.", "Autolimitada (cura em 6-10 semanas)."] 
    },
    { 
        nome: "mácula melanótica", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4GRNyFG278Sh-DMZA9mLSfSkUJswU8QHew&s",
        dicas: ["Lesão plana e pigmentada única.", "Aumento focal de melanina.", "Local comum: vermelhão do lábio inferior."] 
    },
    { 
        nome: "líquen plano erosivo", 
        url: "https://assets.ohi-s.com/fit-in/768x576/blog-service/media/default/6N8uG_64cbba14551bb.jpg",
        dicas: ["Áreas vermelhas ulceradas com estrias brancas periféricas.", "Forma muito dolorosa.", "Frequentemente bilateral."] 
    },
    { 
        nome: "condiloma acuminado", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPc84jRrePLzmYitarYis3WKzdWuf6XeftJQ&s",
        dicas: ["Lesão verrucosa transmitida sexualmente (HPV).", "Geralmente múltipla e de base séssil.", "Superfície romba (menos pontiaguda que papiloma)."] 
    },
    { 
        nome: "papiloma escamoso", 
        url: "https://static.wixstatic.com/media/beed06_463309eada454b6cbfdb0e3e050fc1fb~mv2.jpg/v1/fill/w_280,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/papiloma%20escamoso.jpg",
        dicas: ["Projeções papilares digitiformes ('couve-flor').", "Induzida pelo HPV 6 ou 11.", "Geralmente única e pediculada."] 
    },
    { 
        nome: "estomatite urêmica", 
        url: "https://static.elsevier.es/multimedia/26662752/0000009700000003/v1_202206050551/S2666275222000455/v1_202206050551/pt/main.assets/gr1.jpeg",
        dicas: ["Ocorre em pacientes com falência renal aguda.", "Placas brancas difusas e hálito amoniacal.", "Melhora após diálise."] 
    },
    { 
        nome: "lipoma", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6E1Nvyxd4MXFDrRdJESglqKlpWcSZwXKpkw&s",
        dicas: ["Nódulo amarelado de consistência macia.", "Tumor benigno de tecido adiposo.", "Frequentemente apresenta vasos superficiais evidentes."] 
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "https://static.elsevier.es/multimedia/16462890/0000005700000001/v1_201603200107/S1646289016000066/v1_201603200107/pt/main.assets/gr9.jpeg",
        dicas: ["Tumor de glândula salivar mais comum.", "Massa firme de crescimento lento.", "Localização comum: palato ou parótida."] 
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPh-K3HMpbZkEhbP7ybW-olAJrjgmFeiA4A&s",
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
