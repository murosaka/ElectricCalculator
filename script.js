
let voltageInput = document.querySelector("#voltage");
let activePowerInput = document.querySelector("#activePower");
let currentInput = document.querySelector("#current");

let voltage = 0.4;
let activePower = 0;
let current = 0;


voltageInput.addEventListener('change', function(){
    voltage = this.value;
    if (voltage == 0) {voltage = 0.4};
    updateValues();    
});


activePowerInput.addEventListener('change', function(){
    activePower = this.value;
    updateValues(); 
});
function updateValues() {
    current = Math.round(voltage * activePower*100)/100;
    currentInput.value = current;
};
