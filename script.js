
const voltageInput = document.querySelector("#voltage");
const phasesSelect = document.querySelector("#phases");
const constantSelect = document.querySelector("#constant");
const activePowerInput = document.querySelector("#activePower");
const reactivePowerInput = document.querySelector("#reactivePower");
const apparentPowerInput = document.querySelector("#apparentPower");
const currentInput = document.querySelector("#current");
const powerFactorInput = document.querySelector("#powerFactor");
const efficiencyInput = document.querySelector("#efficiency");
const reactanceInput = document.querySelector("#reactance");
const impedanceInput = document.querySelector("#impedance");
const resistanceInput = document.querySelector("#resistance");

let voltage = 0.4;
let constant = "Voltage"; // TODO
let activePower = 0.00;
let reactivePower = 0.00;
let apparentPower = 0.00;
let current = 0.00;
let powerFactor = 0.85;
let efficiency = 1.00;
let k;
let impedance = 0.00;
let reactance = 0.00;
let resistance = 0.00;

// -----------------------------------------------------------------------------
// All calculations as functions

function getK() {
    if (phasesSelect.value == "threePhases") {
        k = 1.73;
    } else if (phasesSelect.value == "twoPhases") {
        k = 1.73;
    } else if (phasesSelect.value == "singlePhase") {
        k = 1
    };
    console.log(k);
};

function getApparentPower() {
    apparentPower = (activePower / powerFactor).toFixed(2);
};

function getActivePower() {
    activePower = (reactivePower / Math.tan(Math.acos(powerFactor))).toFixed(2);
};

function getReactivePower() {
    reactivePower = ((apparentPower**2 - activePower**2)**0.5).toFixed(2);
};

function getCurrent() {
    current = (apparentPower/(k * voltage * efficiency)).toFixed(2);
};

function getResistance() {
    resistance = ((voltage * 1000)/ (current * k)).toFixed(6);
};

function getImpedance() {
    impedance = (resistance * powerFactor).toFixed(6);
};

function getReactance() {
    reactance = ((resistance**2 - impedance**2)**0.5).toFixed(6);
};
// -----------------------------------------------------------------------------

phasesSelect.addEventListener('change', function() {
    getK();
    getCurrent();
    getResistance();
    getImpedance();
    getReactance();
    updateInputs();
});

voltageInput.addEventListener('change', function(){
    voltage = this.value;
    if (voltage == 0) {voltage = 0.4}; 
    getK();
    getApparentPower();
    getReactivePower();
    getCurrent();
    getResistance();
    getImpedance();
    getReactance();
    updateInputs();
});

activePowerInput.addEventListener('change', function(){
    activePower = this.value;
    getK();
    getApparentPower();
    getReactivePower();
    getCurrent();
    getResistance();
    getImpedance();
    getReactance();
    updateInputs();
});

reactivePowerInput.addEventListener('change', function(){
    reactivePower = this.value;
    getK();
    getActivePower();
    getApparentPower();
    getCurrent();
    getResistance();
    getImpedance();
    getReactance();
    updateInputs();
});

apparentPowerInput.addEventListener('change', function(){
    apparentPower = this.value;
    getK();
    getActivePower();
    getReactivePower();
    getCurrent();
    getResistance();
    getImpedance();``
    getReactance();
    updateInputs();
});

powerFactorInput.addEventListener('change', function(){
    powerFactor = this.value; 
    getK();   
    getReactivePower();
    getApparentPower();
    getCurrent();
    getResistance();
    getImpedance();
    getReactance();
    updateInputs();
});

efficiencyInput.addEventListener('change', function(){
    efficiency = this.value;
    getK();
    getCurrent();
    updateInputs();
});

function updateInputs() {
    activePowerInput.value = activePower;
    apparentPowerInput.value = apparentPower;
    reactivePowerInput.value = reactivePower;
    currentInput.value = current;
    impedanceInput.value = impedance;
    reactanceInput.value = reactance;
    resistanceInput.value = resistance;
}

 