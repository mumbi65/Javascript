{
    let ongoingCalculation = '';
    let calculation = '';

    function addNumber(number) {
        ongoingCalculation += number;
        document.getElementById('Ongoing-calculation').textContent = `Ongoing Calculation: ${ongoingCalculation}`;
    }
    
    function addOperation(operation) {
        ongoingCalculation += operation;
        document.getElementById('Ongoing-calculation').textContent = `Ongoing Calculation: ${ongoingCalculation}`;
    }
    
    function addDecimal() {
        ongoingCalculation += '.';
        document.getElementById('Ongoing-calculation').textContent = `Ongoing Calculation: ${ongoingCalculation}`;
    }
    
    function clearCalculation() {
        ongoingCalculation = '';
        calculation = '';
        document.getElementById('Ongoing-calculation').textContent = 'Ongoing Calculation: ';
        document.getElementById('result').textContent = 'Result: ';
    }
    
    function calculateResult() {
        try {
            calculation = eval(ongoingCalculation);
            document.getElementById('result').textContent = `Result: ${calculation}`;
        } catch (e) {
            console.error('Error in calculation:', e);
            calculation = ''; // Reset calculation in case of error
        }
    }
}





{
    // function addOne(){
    //     calculation += '1';
    //     console.log(calculation);
    // }

    // function addTwo(){
    //     calculation += '2';
    //     console.log(calculation);
    // }

    // function addThree(){
    //     calculation += '3';
    //     console.log(calculation);
    // }

    // function addition(){
    //     calculation += '+';
    //     console.log(calculation);
    // }

    // function addFour(){
    //     calculation += '4';
    //     console.log(calculation);
    // }

    // function addFive(){
    //     calculation += '5';
    //     console.log(calculation);
    // }

    // function addSix(){
    //     calculation += '6';
    //     console.log(calculation);
    // }

    // function subtract(){
    //     calculation += '-';
    //     console.log(calculation);
    // }

    // function addSeven(){
    //     calculation += '7';
    //     console.log(calculation);
    // }

    // function addEight(){
    //     calculation += '8';
    //     console.log(calculation);
    // }

    // function addNine(){
    //     calculation += '9';
    //     console.log(calculation);
    // }

    // function multiply(){
    //     calculation += '*';
    //     console.log(calculation);
    // }

    // function addZero(){
    //     calculation += '0';
    //     console.log(calculation);
    // }

    // function addDecimal(){
    //     calculation += ".";
    //     console.log(calculation);
    // }

    // function divide(){
    //     calculation += "/";
    //     console.log(calculation);
    // }

    // function clearCalculation(){
    //     calculation = '';
    //     console.log (`Cleared. ${calculation}`);
    // }

    // function equals(){
    //     try {
    //         calculation = eval(calculation);
    //         document.getElementById("result").textContent = `Result. ${calculation}`
    //         console.log(`Result. ${calculation}`);
    //     } catch (e) {
    //         console.error('Error in calculation:', e);
    //         calculation = '';
    //     }
    // }
}