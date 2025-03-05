const resultArea = document.getElementById("result-area")
isResult = false

function displayValue(value) {
    
    if (isResult && typeof(value) != "string") clearDisplay()
    if (!validate(value)) return

    resultArea.value += value
}

function validate(value) {
    let currentValue = resultArea.value
    let lengthValue = currentValue.length
    let lastValue  = Number(currentValue.charAt(lengthValue - 1))

    if (currentValue.length >= 10) return true;
    
    if (isNaN(lastValue) || lastValue == 0 && lengthValue != 1) { /* Valida se pode ou não usar operadores de acordo com o ultimo algarismo */
        if (typeof(value) == "string") {
            return false
        }
        
        return true
    }

    if (value == "." && lengthValue == 1) { //Valida se o valor inicial é 0
        return true
    } 
    else if (lengthValue == 1 && currentValue.charAt(0) == 0) {
        resultArea.value = ""
    }
    isResult = false
    return true
}

function clearDisplay() {

    resultArea.value = `0`
    isResult = false
}

function displayResult() {
    isResult = true
    try {
        let resultado = eval(resultArea.value)
        resultArea.value = resultado
    }
    catch {
        resultArea.value = 'Error'
    }
}