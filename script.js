const bancoDeLesoes = [
    { 
        nome: "língua pilosa", 
        url: "img/lingua_pilosa.jpg", 
        anamnese: "Paciente relata alteração cromática no dorso lingual com sensação de 'espessamento'. Histórico de tabagismo pesado e higiene oral precária.", 
        dicas: ["Alongamento das papilas filiformes por acúmulo de queratina.", "Aspecto de 'tapete' ou pelos no dorso da língua."],
        dicaExtra: "Pode ser precipitada pelo uso de antibióticos de amplo espectro ou bochechos oxidantes."
    },
    { 
        nome: "morsicatio buccarum", 
        url: "img/morsicatio.jpg", 
        anamnese: "Queixa de 'rugosidade' bilateral na mucosa jugal. Paciente apresenta hábito parafuncional consciente durante períodos de estresse.", 
        dicas: ["Placas brancas de aspecto macerado ou 'esgarçado'.", "Localização estrita à linha de oclusão dentária."],
        dicaExtra: "Histopatologia revela extensa hiperceratose com projeções superficiais em 'franjas'."
    },
    { 
        nome: "linha alba", 
        url: "img/linha_alba.jpg", 
        anamnese: "Achado de exame clínico de rotina. Linha esbranquiçada horizontal estendendo-se do segundo molar ao canino, bilateralmente.", 
        dicas: ["Variação da normalidade por pressão dos dentes.", "Mais pronunciada em pacientes com mordida fechada."],
        dicaExtra: "Não requer tratamento, sendo apenas uma resposta adaptativa do epitélio ao trauma de baixa intensidade."
    },
    { 
        nome: "leucoedema", 
        url: "img/leucoedema.jpg", 
        anamnese: "Paciente afrodescendente apresenta opalescência cinza-esbranquiçada difusa na mucosa jugal. A alteração é bilateral.", 
        dicas: ["Aspecto leitoso ou 'veludo' da mucosa.", "A característica desaparece completamente ao esticar o tecido."],
        dicaExtra: "Histologicamente, apresenta edema intracelular das células da camada espinhosa."
    },
    { 
        nome: "leucoplasia", 
        url: "img/leucoplasia.jpg", 
        anamnese: "Masc, 58 anos, fumante. Placa branca solitária em borda lateral de língua, persistente e não removível à raspagem.", 
        dicas: ["Termo clínico para placa branca que não sai por meios mecânicos.", "Diagnóstico de exclusão clínica."],
        dicaExtra: "Cerca de 90% das leucoplasias de assoalho de boca exibem displasia epitelial ou carcinoma no diagnóstico inicial."
    },
    { 
        nome: "candidíase pseudomembranosa", 
        url: "img/candidiase.jpg", 
        anamnese: "Paciente idosa, diabética, queixa-se de ardência e 'gosto ruim'. Apresenta placas brancas removíveis que lembram leite coalhado.", 
        dicas: ["Infecção fúngica oportunista comum.", "Deixa base eritematosa (vermelha) ao ser removida com gaze."],
        dicaExtra: "O diagnóstico pode ser confirmado por citologia esfoliativa demonstrando hifas de Candida albicans."
    },
    { 
        nome: "carcinoma espinocelular oral", 
        url: "img/cec.jpg", 
        anamnese: "Etilista e tabagista crônico com úlcera em assoalho de boca há mais de 3 semanas. Bordas endurecidas (exofíticas) e infiltradas.", 
        dicas: ["Neoplasia maligna epitelial mais comum na boca.", "Muitas vezes associada a áreas de eritroplasia prévias."],
        dicaExtra: "A invasão através da membrana basal é o marcador histológico fundamental da malignidade."
    },
    { 
        nome: "granuloma piogênico", 
        url: "img/granuloma_piogenico.jpg", 
        anamnese: "Nódulo gengival pediculado de cor avermelhada. Sangramento abundante ao menor toque.", 
        dicas: ["Lesão reacional exuberante a irritantes (tártaro, trauma).", "Muito comum em gestantes ('tumor gravídico')."],
        dicaExtra: "Apesar do nome, não é um processo granulomatoso, mas sim uma proliferação vascular hemangiomatosa."
    },
    { 
        nome: "mucocele", 
        url: "img/mucocele.jpg", 
        anamnese: "Paciente jovem apresenta tumefação azulada e flutuante em lábio inferior. Relata que a lesão 'estoura' e volta a encher.", 
        dicas: ["Extravasamento de muco por ruptura de ducto salivar.", "O lábio inferior é o sítio em mais de 75% dos casos."],
        dicaExtra: "Diferencia-se do cisto de retenção salivar verdadeiro por não possuir revestimento epitelial."
    },
    { 
        nome: "eritoplasia", 
        url: "img/eritoplasia.jpg", 
        anamnese: "Mancha vermelha, aveludada e bem demarcada em palato mole. Paciente assintomático.", 
        dicas: ["Lesão cancerizável com altíssimo risco de transformação.", "Deve ser biopsiada imediatamente."],
        dicaExtra: "Diferente da leucoplasia, a eritoplasia quase sempre revela displasia grave ou carcinoma in situ na biópsia."
    },
    { 
        nome: "queilite angular", 
        url: "img/queilite_angular.jpg", 
        anamnese: "Idoso com próteses totais mal adaptadas (perda de DVO). Apresenta fissuras e eritema nos cantos da boca.", 
        dicas: ["Frequente em usuários de próteses antigas.", "Infecção mista por fungos e bactérias."],
        dicaExtra: "A saliva acumulada nas pregas das comissuras favorece a proliferação de Candida e Staphylococcus."
    },
    { 
        nome: "hemangioma", 
        url: "img/hemangioma.jpg", 
        anamnese: "Criança com mancha purpúrea na língua desde o nascimento. A lesão torna-se isquêmica sob pressão.", 
        dicas: ["Proliferação benigna de vasos sanguíneos.", "Teste de vitropressão (diascopia) positivo."],
        dicaExtra: "Muitos hemangiomas infantis regridem espontaneamente até os 7-10 anos de idade."
    },
    { 
        nome: "sarcoma de kaposi", 
        url: "img/sarcoma_kaposi.jpg", 
        anamnese: "Paciente HIV+ apresenta máculas arroxeadas múltiplas no palato. As lesões são assintomáticas, mas estão crescendo.", 
        dicas: ["Neoplasia endotelial associada ao vírus HHV-8.", "Um dos marcadores clínicos da AIDS."],
        dicaExtra: "Clinicamente pode mimetizar um hemangioma, mas o histórico de imunossupressão é a chave diagnóstica."
    },
    { 
        nome: "melanoma", 
        url: "img/melanoma.jpg", 
        anamnese: "Mácula pigmentada assimétrica em palato duro, com bordas irregulares e variação de cores (preto/marrom).", 
        dicas: ["Neoplasia maligna de melanócitos extremamente agressiva.", "Segue a regra do ABCDE."],
        dicaExtra: "O melanoma oral tem prognóstico muito pior que o cutâneo, com sobrevida em 5 anos abaixo de 20%."
    },
    { 
        nome: "estomatite nicotínica", 
        url: "img/estomatite_nicotinica.jpg", 
        anamnese: "Palato com aspecto esbranquiçado e múltiplos pontos vermelhos. Paciente relata fumar cachimbo há décadas.", 
        dicas: ["Resposta ao calor gerado pelo fumo no palato.", "Pontos vermelhos são ductos inflamados das glândulas salivares."],
        dicaExtra: "Raramente evolui para câncer, sendo considerada uma alteração reacional ao calor."
    },
    { 
        nome: "rânula", 
        url: "img/ranula.jpg", 
        anamnese: "Tumefação unilateral em assoalho de boca, azulada e flutuante. Desloca a língua para o lado oposto.", 
        dicas: ["Mucocele originada na glândula sublingual.", "Nome derivado da semelhança com o ventre de um anfíbio."],
        dicaExtra: "Se a mucina romper o músculo milo-hioideo, torna-se uma rânula mergulhante no pescoço."
    },
    { 
        nome: "adenoma pleomórfico", 
        url: "img/adenoma_pleomorfico.jpg", 
        anamnese: "Massa firme, móvel e de crescimento lento na região da parótida. Paciente assintomático.", 
        dicas: ["Tumor de glândula salivar mais comum.", "Também chamado de 'Tumor Misto Benigno'."],
        dicaExtra: "Apresenta uma mistura complexa de epitélio ductal e estroma mesenquimal (condroide ou mixoide)."
    },
    { 
        nome: "carcinoma mucoepidermoide", 
        url: "img/carcinoma_mucoepidermoide.jpg", 
        anamnese: "Aumento de volume azulado e indolor em palato duro. Pode simular clinicamente uma mucocele.", 
        dicas: ["Neoplasia maligna de glândula salivar mais comum.", "Ocorre frequentemente em parótida e palato."],
        dicaExtra: "O diagnóstico histológico baseia-se na presença de células mucosas, epidermoides e intermediárias."
    },
    { 
        nome: "sialometaplasia necrosante", 
        url: "img/sialometaplasia.jpg", 
        anamnese: "Úlcera crateriforme profunda no palato. O paciente relata dor inicial intensa seguida de anestesia.", 
        dicas: ["Pode ser confundida com carcinoma maligno.", "Condição inflamatória autolimitada (cura em 6-10 semanas)."],
        dicaExtra: "Resultante de isquemia tecidual e infarto das glândulas salivares menores do palato."
    },
    { 
        nome: "mácula melanótica", 
        url: "img/macula_melanotica.jpg", 
        anamnese: "Pequena mancha marrom única em vermelhão de lábio inferior. Plana, assintomática e estável há anos.", 
        dicas: ["Aumento focal da produção de melanina.", "Não tem potencial de transformação maligna."],
        dicaExtra: "A biópsia é indicada para descartar melanoma inicial se houver mudanças recentes."
    },
    { 
        nome: "líquen plano", 
        url: "img/liquen_plano.jpg", 
        anamnese: "Mulher, 50 anos, queixa-se de ardência. Mucosa jugal bilateral com estrias esbranquiçadas rendilhadas.", 
        dicas: ["Doença imunológica crônica mediada por linfócitos T.", "Presença das famosas Estrias de Wickham."],
        dicaExtra: "O diagnóstico histológico revela um infiltrado inflamatório em 'banda' e degeneração da camada basal."
    },
    { 
        nome: "papiloma escamoso", 
        url: "img/papiloma.jpg", 
        anamnese: "Nódulo pediculado com projeções digitiformes (semelhante a couve-flor) na ponta da língua.", 
        dicas: ["Lesão induzida pelos subtipos 6 e 11 do HPV.", "Crescimento verrucoso e benigno."],
        dicaExtra: "Apresenta 'dedos' de epitélio ceratinizado com núcleos de tecido conjuntivo fibrovascular."
    },
    { 
        nome: "condiloma acuminado", 
        url: "img/condiloma.jpg", 
        anamnese: "Múltiplas massas verrucosas sésseis que tendem a coalescer no palato e gengiva. Paciente sexualmente ativo.", 
        dicas: ["DST causada por subtipos de HPV de baixo risco.", "Lesões maiores e mais numerosas que o papiloma comum."],
        dicaExtra: "Presença histológica de coilócitos (células epiteliais com núcleos picnóticos e halo claro)."
    },
    { 
        nome: "lipoma", 
        url: "img/lipoma.jpg", 
        anamnese: "Nódulo submucoso amarelado, macio e móvel em mucosa jugal. Vasos sanguíneos superficiais são visíveis.", 
        dicas: ["Tumor benigno de tecido adiposo (gordura).", "Flutua se for colocado em formalina (devido à gordura)."],
        dicaExtra: "O lipoma oral é relativamente incomum comparado ao lipoma de tecidos moles cutâneos."
    }
];
let filaDeJogo = [];
let currentCaseIndex = 0;
let attempts = 0;
let blurValue = 12;
let totalScore = 0;
let lives = 3;
let timer;
let timeLeft = 45;
let extraHintUsedThisCase = false; 

window.onload = () => {
    document.getElementById('rules-modal').style.display = "flex";
};

function fecharRegras() {
    document.getElementById('rules-modal').style.display = "none";
    prepararNovoJogo();
}

function prepararNovoJogo() {
    // Embaralha o banco completo e seleciona 15 casos aleatórios
    filaDeJogo = [...bancoDeLesoes].sort(() => Math.random() - 0.5).slice(0, 15);
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
        mostrarNotificacao("CONCLUÍDO", "Você dominou o Atlas!", "#c5a059", true);
        return;
    }

    const caso = filaDeJogo[currentCaseIndex];
    const imgElement = document.getElementById('lesion-image');
    extraHintUsedThisCase = false; 

    const hintsList = document.getElementById('current-hints-list');
    hintsList.innerHTML = `<div class='hint-item' style='border-left-color: #3498db; background: #f0f7ff;'>
        <strong>📋 ANAMNESE:</strong> ${caso.anamnese}
    </div>`;

    imgElement.style.opacity = "0";
    blurValue = 12;
    imgElement.style.filter = `blur(${blurValue}px)`;
    attempts = 0;

    imgElement.src = caso.url;
    imgElement.onload = () => imgElement.style.opacity = "1";

    document.getElementById('case-number').innerText = currentCaseIndex + 1;
    document.getElementById('total-cases').innerText = filaDeJogo.length;
    document.getElementById('review-modal').style.display = "none";
    
    const inputField = document.getElementById('guess-input');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();

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
    const d = document.getElementById('timer-display');
    d.innerText = timeLeft;
    d.style.color = timeLeft < 10 ? "#e74c3c" : "white";
}

// Lógica de Verificação com Tolerância Ortográfica e Pontos Reduzidos
function checkGuess() {
    const inputField = document.getElementById('guess-input');
    
    // Normaliza a entrada do usuário: minúsculo, sem acentos, sem espaços nas pontas
    const guess = inputField.value.toLowerCase()
                  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                  .trim();
    
    // Normaliza o nome correto do banco de dados para comparação
    const correto = filaDeJogo[currentCaseIndex].nome.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (guess === correto) {
        clearInterval(timer);
        
        // Nova pontuação reduzida:
        // 0 erros = 25 pts | 1 erro = 15 pts | 2+ erros = 5 pts
        let pontosGanhos = 5;
        if (attempts === 0) pontosGanhos = 25;
        else if (attempts === 1) pontosGanhos = 15;
        
        totalScore += pontosGanhos;
        document.getElementById('pts').innerText = totalScore;
        updateRank();
        mostrarNotificacao("CORRETO!", "Excelente olhar clínico.", "#27ae60");
    } else {
        registrarErro();
        // Feedback visual de erro no input
        inputField.style.borderColor = "#e74c3c";
        setTimeout(() => inputField.style.borderColor = "var(--neville-gold)", 500);
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
        div.innerHTML = `<strong>Pista ${attempts}:</strong> ${caso.dicas[attempts - 1]}`;
        document.getElementById('current-hints-list').appendChild(div);
    }
    if (attempts >= 5) processarMorte("LIMITE DE TENTATIVAS");
}

function processarMorte(motivo) {
    clearInterval(timer);
    lives--;
    updateLivesDisplay();
    if (lives <= 0) {
        mostrarNotificacao("GAME OVER", "Suas licenças médicas foram revogadas.", "#5e111d", true);
    } else {
        mostrarNotificacao(motivo, "Você perdeu uma vida.", "#5e111d");
    }
}

function updateLivesDisplay() {
    document.getElementById('lives-display').innerText = "❤️".repeat(lives);
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
        info += `<br><br>Diagnóstico: <strong>${filaDeJogo[currentCaseIndex].nome.toUpperCase()}</strong>`;
        btn.onclick = closeReview;
        btn.innerText = "PRÓXIMO CASO";
    } else {
        btn.onclick = () => location.reload();
        btn.innerText = "REINICIAR";
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
    if (extraHintUsedThisCase) {
        alert("Dica de especialista já utilizada para este caso!");
        return;
    }
    
    timeLeft = Math.max(0, timeLeft - 15);
    atualizarTimerVisual();
    
    const caso = filaDeJogo[currentCaseIndex];
    const div = document.createElement('div');
    div.className = 'hint-item';
    div.style.borderLeftColor = "#e67e22";
    div.style.backgroundColor = "#fff5eb";
    div.innerHTML = `<strong>💡 INSIGHT DO NEVILLE:</strong> ${caso.dicaExtra}`;
    document.getElementById('current-hints-list').appendChild(div);
    
    extraHintUsedThisCase = true;
}

function fazerBiopsia() {
    if (totalScore >= 10) {
        totalScore -= 10;
        document.getElementById('pts').innerText = totalScore;
        mostrarNotificacao("BIÓPSIA", "Resultado laboratorial liberado.", "#c5a059");
    } else {
        alert("Pontos insuficientes (10 pts)!");
    }
}

// Ranks ajustados para a nova escala de pontos (Máximo teórico: 375 pts)
function updateRank() {
    const r = document.getElementById('rank');
    if (totalScore >= 300) r.innerText = "Neville";
    else if (totalScore >= 180) r.innerText = "Especialista";
    else if (totalScore >= 80) r.innerText = "Residente";
    else r.innerText = "Acadêmico";
}

document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
});
