
// PROGRAM TO CALCULATE THE DAILY WAGES OF WORKERS

    let formElement = document.querySelector(`form`);
    // form event listener to collect number of working hours from form
    formElement.addEventListener(`submit`,(e)=>{
        e.preventDefault()
        let hoursvalue = document.querySelector(`#hoursvalue`).value;
        let modalcontent = document.querySelector(`#answerTag`);
        // calculating total wages for either regular hour workers/overtime workers
        if (hoursvalue < 5) {
            hoursvalue *=1000;
        }
        else{
            let workinghoursValue = hoursvalue -4;
            hoursvalue = (workinghoursValue*1200) + 4000
        }
        // display the output in the popup and make popup visible
        modalcontent.textContent = hoursvalue.toString();
        document.querySelector(`.modalContainer`).classList.toggle(`displayNot`)

    })


// cancel popup button 

let cancelform = document.querySelector(`#modalClose`);
cancelform.addEventListener(`click`,()=>document.querySelector(`.modalContainer`).classList.toggle(`displayNot`) )
