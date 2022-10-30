(function( $ ) {
	'use strict';

	

})( jQuery );

const getbmivalue = () => {
    let weight = document.getElementById('bmi-weight').value;
    let height = document.getElementById('bmi-height').value; //height in cm
    let bmiValue = document.querySelector('.bmi-value');
    let data = document.querySelector('.bmi-data');
    //convert height from cm to meters
    height = height / 100;
        
    let newBmiValue = weight / (height * height); // BMI formula

    newBmiValue = newBmiValue.toFixed(1);

    bmiValue.innerText = newBmiValue;
    bmiValue.style.visibility = "visible"; 

    if(newBmiValue <= 18.4) {
        data.innerText = "Thin";
    }else if(newBmiValue >= 18.5 && newBmiValue <= 25 ) {
        data.innerText = "Normal";
    }else if(newBmiValue > 25 ){
        data.innerText = "Overweight";
    }
    data.style.visibility = "visible";     
}