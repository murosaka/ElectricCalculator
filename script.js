
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
let phases ="3 ph"; // TODO
let constant = "Voltage"; // TODO
let activePower = 0.00;
let reactivePower = 0.00;
let apparentPower = 0.00;
let current = 0.00;
let powerFactor = 0.85;
let efficiency = 1.00;
let k;

if (phases == "3 ph" || phases == "2 ph") {
    k = 1.73
} else {k = 1};

voltageInput.addEventListener('change', function(){
    voltage = this.value;
    if (voltage == 0) {voltage = 0.4};
    // apparentPower = (activePower / powerFactor).toFixed(2);
    // apparentPowerInput.value = apparentPower;
    // reactivePower = ((apparentPower**2 - activePower**2)**0.5).toFixed(2);
    // reactivePowerInput.value = reactivePower;
    current = (apparentPower/(k * voltage * efficiency)).toFixed(2);    
    currentInput.value = current;
});

activePowerInput.addEventListener('change', function(){
    activePower = this.value;
    apparentPower = (activePower / powerFactor).toFixed(2);
    reactivePower = ((apparentPower**2 - activePower**2)**0.5).toFixed(2);
    current = (apparentPower/(k * voltage * efficiency)).toFixed(2);    
    updateInputs();
});

reactivePowerInput.addEventListener('change', function(){
    reactivePower = this.value;
    activePower = (reactivePower / Math.tan(Math.acos(powerFactor))).toFixed(2);
    apparentPower = (activePower / powerFactor).toFixed(2);
    current = (apparentPower/(k * voltage * efficiency)).toFixed(2);  
    updateInputs();
});

apparentPowerInput.addEventListener('change', function(){
    apparentPower = this.value;
    activePower = (apparentPower * powerFactor).toFixed(2);
    reactivePower = ((apparentPower**2 - activePower**2)**0.5).toFixed(2);
    current = (apparentPower/(k * voltage * efficiency)).toFixed(2);    
    updateInputs();
});

function updateInputs() {
    activePowerInput.value = activePower;
    apparentPowerInput.value = apparentPower;
    reactivePowerInput.value = reactivePower;
    currentInput.value = current;
}

 