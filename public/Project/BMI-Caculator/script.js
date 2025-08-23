const form=document.querySelector('form');

//  this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    results.style.display='block';
    if(height === ''|| height < 0 || isNaN(height)){
        results.innerHTML =`Please give valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please give valid weight ${weight}`
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //Show Result
        if(bmi< 18.6){
            results.innerHTML=`<p>Your BMI is ${bmi}</p>
                                <p>You are Under Weight </p>`
        }else if(bmi===18.6 || bmi<24.9){
            results.innerHTML=`<p>Your BMI is ${bmi}</p>
                                <p>You are Perfectly Fit</p>`
        }else{
            results.innerHTML=`<p>Your BMI is ${bmi}</p>
                                <p>You are Over Weight</p>`
        }
        
    }
})

