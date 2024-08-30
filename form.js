const multiStep = document.querySelector("[data-maulti-step]");

const formStep = [...multiStep.querySelectorAll("[data-step]")]

let currentStep = formStep.findIndex(step =>{
    return step.classList.contains("active")
})

if(currentStep < 0){
   currentStep = 0;
   showForm()
}
let incrementor
multiStep.addEventListener("click", e =>{
    if (e.target.matches('[data-next]')){
        incrementor = 1              
    } 
    else if(e.target.matches('[data-prev]')) {
        incrementor = -1     
    } 

    if(incrementor == null) return
   
    let allInp = [...multiStep.querySelectorAll("input")]
    let allvalid = allInp.every(inp => inp.reportValidity())
    if(allvalid){
        currentStep += incrementor
        showForm()
    }    
    
})

function showForm(){
    formStep.forEach((step,index)=>{
        step.classList.toggle("active", index === currentStep)
    })
}