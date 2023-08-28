

function trimfield() {
    var valueOne = loader.engine.document.getElementById(106773007).getProperty('value.value');
    var valueTwo = loader.engine.document.getElementById(106773008).getProperty('value.value');
    
    loader.engine.document.getElementById(106773007).setValue(({"value": valueOne.toLowerCase()}));
    loader.engine.document.getElementById(106773008).setValue(({"value": valueTwo.trim()}));
}

window.onchange = trimfield;



