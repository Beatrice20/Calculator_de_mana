// Get the necessary elements from the HTML
let afisaj = document.getElementById('afisaj');
let butoaneOrizontale = document.getElementsByClassName('actiuni');
let butoaneVerticale = document.getElementsByClassName('alteActiuni');
let cifreCalculator = document.getElementsByClassName('cifra');
let cifraZero = document.getElementsByClassName('cifraZero');
let punct = document.getElementsByClassName('punct');
let inmultire = document.getElementById('inmultire');
let egal = document.getElementById('egal');

// Function to add a number to the display
let calculatorFolosit = false;
function adaugaNumar(numar) {
  if (!calculatorFolosit) {
    afisaj.innerHTML = '';
    calculatorFolosit = true;
  }
  afisaj.innerHTML += numar;
}

function verificaCalculatorFolosit() {
    if (!calculatorFolosit) {
      afisaj.innerHTML = '';
    }
  }

// Function to add a decimal point to the display
function adaugaPunct(punct) {
    if (!afisaj.innerHTML.includes(punct)) {
        afisaj.innerHTML += punct;
    }
}

// Function to add an operator to the display
function adaugaOperator(operator) {
    if (!calculatorFolosit) {
      afisaj.innerHTML = '';
      calculatorFolosit = true;
    }
    if (afisaj.innerHTML.slice(-1) !== operator) {
      afisaj.innerHTML += operator;
    }
  }

// Function to clear the display
function stergeTot() {
    afisaj.innerHTML = '';
}

// Function to delete the last character from the display
function stergeUltimulCaracter() {
    afisaj.innerHTML = afisaj.innerHTML.slice(0, -1);
}

//Function to calculate the result of the expression
function calculeaza() {
    try {
        let rezultat = eval(afisaj.innerHTML);
        if (!isFinite(rezultat)) {
            throw new Error('Eroare!'); // Aruncăm o excepție în cazul împărțirii la 0
        }
        // Convertesc rezultatul intr-un numar in virgula mobila și apoi in sir de caractere
        rezultat = parseFloat(rezultat.toFixed(10)).toString();
        afisaj.innerHTML = rezultat;
    } catch (error) {
        afisaj.innerHTML = 'Eroare!';
    }
}

// Add event listeners to the buttons
for (let i = 0; i < butoaneOrizontale.length; i++) {
    butoaneOrizontale[i].addEventListener('click', function() {
        if (this.textContent === 'C') {
            stergeTot();
        } else if (this.textContent === 'DEL') {
            stergeUltimulCaracter();
        } else if (this.textContent === '/') {
            adaugaOperator(this.textContent);
        }else if (this.textContent === 'X') {
            adaugaOperator("*");
        }
    });
}

for (let i = 0; i < butoaneVerticale.length; i++) {
    butoaneVerticale[i].addEventListener('click', function() {
        if (this.textContent === '-') {
            adaugaOperator(this.textContent);
        } else if (this.textContent === '+') {
            adaugaOperator(this.textContent);
        } else if (this.textContent === '=') {
            calculeaza();
        }
    });
}

for (let i = 0; i < cifreCalculator.length; i++) {
    cifreCalculator[i].addEventListener('click', function() {
        adaugaNumar(this.textContent);
    });
}

for (let i = 0; i < cifraZero.length; i++) {
    cifraZero[i].addEventListener('click', function() {
        adaugaNumar(this.textContent);
    });
}

for (let i = 0; i < punct.length; i++) {
    punct[i].addEventListener('click', function() {
        adaugaPunct(this.textContent);
    });
}

