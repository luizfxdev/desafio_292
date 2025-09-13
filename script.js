// Frase enigmática dos piratas - 'Libertatem ex tenebris' (21 caracteres incluindo espaços)
const PIRATE_PHRASE = 'Libertatem ex tenebris';

// Elementos do DOM
const treasureInput = document.getElementById('treasure-input');
const decodeBtn = document.getElementById('decode-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const calculationDetails = document.getElementById('calculation-details');
const finalResult = document.getElementById('final-result');

// Função principal para decifrar o código
function decodeToTreasure(numbers) {
  const validNumbers = [];
  const invalidNumbers = [];
  const decodedLetters = [];
  let calculationSteps = [];

  // Processar cada número da entrada
  numbers.forEach((num, index) => {
    const step = {
      position: index + 1,
      number: num,
      valid: false,
      letter: null,
      reason: null
    };

    if (num >= 1 && num <= 21) {
      step.valid = true;
      step.letter = PIRATE_PHRASE[num - 1]; // Converter para 0-indexado
      step.reason = `Posição ${num} → "${step.letter}"`;
      validNumbers.push(num);
      decodedLetters.push(step.letter);
    } else {
      step.valid = false;
      step.reason = `Fora do intervalo (1-21) → ignorado`;
      invalidNumbers.push(num);
    }

    calculationSteps.push(step);
  });

  return {
    originalInput: numbers,
    validNumbers: validNumbers,
    invalidNumbers: invalidNumbers,
    decodedLetters: decodedLetters,
    finalMessage: decodedLetters.join(''),
    calculationSteps: calculationSteps
  };
}

// Função para validar e processar a entrada
function processInput() {
  const input = treasureInput.value.trim();

  if (!input) {
    showError('Por favor, insira uma sequência de números.');
    return;
  }

  try {
    // Dividir por vírgula e converter para números
    const numbers = input.split(',').map(str => {
      const num = parseInt(str.trim());
      if (isNaN(num)) {
        throw new Error(`"${str.trim()}" não é um número válido`);
      }
      return num;
    });

    if (numbers.length === 0) {
      showError('Nenhum número válido foi encontrado.');
      return;
    }

    // Decifrar o código
    const result = decodeToTreasure(numbers);
    displayResult(result);
  } catch (error) {
    showError(`Erro na entrada: ${error.message}`);
  }
}

// Função para exibir o resultado completo
function displayResult(result) {
  // Limpar conteúdo anterior
  calculationDetails.innerHTML = '';
  finalResult.innerHTML = '';

  // Título da validação
  const validationTitle = document.createElement('div');
  validationTitle.innerHTML = `<strong>📋 Validação e Cálculo Detalhado:</strong>`;
  validationTitle.style.marginBottom = '1rem';
  validationTitle.style.color = '#AF6528';
  calculationDetails.appendChild(validationTitle);

  // Exibir entrada original
  const inputInfo = document.createElement('div');
  inputInfo.className = 'calculation-step';
  inputInfo.innerHTML = `<strong>Entrada:</strong> [${result.originalInput.join(', ')}]`;
  calculationDetails.appendChild(inputInfo);

  // Frase de referência
  const phraseInfo = document.createElement('div');
  phraseInfo.className = 'calculation-step';
  phraseInfo.innerHTML = `<strong>Frase enigmática:</strong> "${PIRATE_PHRASE}"<br><small>Posições de 1 a 21</small>`;
  calculationDetails.appendChild(phraseInfo);

  // Processar cada passo
  result.calculationSteps.forEach((step, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'calculation-step';

    if (step.valid) {
      stepDiv.innerHTML = `
                <strong>Passo ${step.position}:</strong> Número ${step.number} → 
                <span style="color: #2E63A4; font-weight: bold;">${step.reason}</span>
            `;
    } else {
      stepDiv.innerHTML = `
                <strong>Passo ${step.position}:</strong> Número ${step.number} → 
                <span style="color: #FF6B6B; font-weight: bold;">${step.reason}</span>
            `;
    }
    calculationDetails.appendChild(stepDiv);
  });

  // Resumo dos números processados
  if (result.invalidNumbers.length > 0) {
    const invalidInfo = document.createElement('div');
    invalidInfo.className = 'calculation-step';
    invalidInfo.innerHTML = `<strong>⚠️ Números ignorados:</strong> [${result.invalidNumbers.join(
      ', '
    )}] (fora do intervalo 1-21)`;
    invalidInfo.style.borderLeftColor = '#FF5252';
    invalidInfo.style.background = 'rgba(255, 82, 82, 0.1)';
    calculationDetails.appendChild(invalidInfo);
  }

  if (result.validNumbers.length > 0) {
    const validInfo = document.createElement('div');
    validInfo.className = 'calculation-step';
    validInfo.innerHTML = `<strong>✅ Números válidos:</strong> [${result.validNumbers.join(', ')}]`;
    validInfo.style.borderLeftColor = '#00E676';
    validInfo.style.background = 'rgba(0, 230, 118, 0.1)';
    calculationDetails.appendChild(validInfo);
  }

  // Resultado final
  finalResult.innerHTML = `
        <div class="label">🏴‍☠️ Mensagem Decifrada:</div>
        <div class="value">'${result.finalMessage}'</div>
    `;

  // Mostrar seção de resultado com animação
  resultSection.classList.add('show');

  // Scroll suave até o resultado
  setTimeout(() => {
    resultSection.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, 100);
}

// Função para exibir erros
function showError(message) {
  calculationDetails.innerHTML = '';
  finalResult.innerHTML = '';

  const errorDiv = document.createElement('div');
  errorDiv.className = 'calculation-step';
  errorDiv.style.borderLeftColor = '#FF6B6B';
  errorDiv.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
  errorDiv.innerHTML = `<strong>❌ Erro:</strong> ${message}`;

  calculationDetails.appendChild(errorDiv);
  resultSection.classList.add('show');
}

// Função para limpar/retornar
function clearAll() {
  treasureInput.value = '';
  resultSection.classList.remove('show');
  calculationDetails.innerHTML = '';
  finalResult.innerHTML = '';
  treasureInput.focus();
}

// Event listeners
decodeBtn.addEventListener('click', processInput);
returnBtn.addEventListener('click', clearAll);

// Permitir Enter no input para decifrar
treasureInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    processInput();
  }
});

// Focar no input ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  treasureInput.focus();

  // Teste da lógica - verificar se os exemplos estão corretos
  console.log('=== TESTE DA LÓGICA ===');

  // Teste 1: [1, 5, 18, 21] - Esperado pelo desafio: 'Le t'
  console.log('Teste 1 - Entrada: [1, 5, 18, 21]');
  const test1 = decodeToTreasure([1, 5, 18, 21]);
  console.log('Resultado:', test1.finalMessage);
  console.log("Esperado pelo desafio: 'Le t'");
  console.log(
    'Detalhes:',
    test1.calculationSteps.map(s => `${s.number}→"${s.letter}"`)
  );

  // Teste 2: [2, 8, 15, 1, 14] - Esperado pelo desafio: 'ixbn'
  console.log('\nTeste 2 - Entrada: [2, 8, 15, 1, 14]');
  const test2 = decodeToTreasure([2, 8, 15, 1, 14]);
  console.log('Resultado:', test2.finalMessage);
  console.log("Esperado pelo desafio: 'ixbn'");
  console.log(
    'Detalhes:',
    test2.calculationSteps.map(s => `${s.number}→"${s.letter}"`)
  );

  // Vamos verificar se a frase do desafio está correta
  console.log('\n=== ANÁLISE DA FRASE ===');
  console.log(`Posições 1,5,18,21: "${PIRATE_PHRASE[0]}${PIRATE_PHRASE[4]}${PIRATE_PHRASE[17]}${PIRATE_PHRASE[20]}"`);
  console.log(
    `Posições 2,8,15,1,14: "${PIRATE_PHRASE[1]}${PIRATE_PHRASE[7]}${PIRATE_PHRASE[14]}${PIRATE_PHRASE[0]}${PIRATE_PHRASE[13]}"`
  );
});

// Comentários de teste removidos pois agora testamos automaticamente
