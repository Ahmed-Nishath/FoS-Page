const form=document.querySelector('form');
const selectOpt=document.getElementById('course-select');

form.addEventListener('submit', event =>{
    validatePersonalDetails();
    validateCourse();
    if(isValidForm() == true){
        form.submit;
    }
    else{
        event.preventDefault();
    }
});

function optionSelector(){
    let optVisibility=document.getElementById('Combination-select-container').style;
    if(selectOpt.value=="bio" || selectOpt.value=="phy"){
        optVisibility.visibility="visible";
    }
    else{
        optVisibility.visibility="hidden";
    }
}

function isValidForm(){
    const inputContainers=form.querySelectorAll('li');
    let result=true;
    inputContainers.forEach((container) =>{
        if(container.classList.contains('error')){
            result=false;
        }
    });
    return result;
}

function validatePersonalDetails(){
    const fname=document.getElementById('name');
    const gender=document.getElementById('male');
    const dob=document.getElementById('dob');
    const nic=document.getElementById('nic');
    const address=document.getElementById('address');
    const telephone=document.getElementById('telephone');
    const Zscore=document.getElementById('Zscore');
    
    let isNameValid=true;
    let fnameSplit=fname.value.trim().split(".");
    if(fname.value==null || fname.value.trim() ===''){
        setError(fname, ' * Name is required');
    }
    else{
        if(fnameSplit.length>=2){
            for(let i=0; i<fnameSplit.length; i++){
                if(fnameSplit[i]==null || fnameSplit[i]=='' || fnameSplit[i]==' '){
                    setError(fname, ' * Please provide name with your initials');
                    isNameValid=false;
                }
            }
            if(isNameValid){
                setSuccess(fname);
            }
        }  
        else{
            setError(fname, ' * Please provide name with your initials');
        }  
    }

    if(document.getElementById('male').checked || document.getElementById('female').checked){
        setSuccess(gender);
    }
    else{
        setError(gender, ' * Please select your gender');
    }

    if(dob.value==null || dob.value.trim() ===''){
        setError(dob, ' * Date of birth is required');
    }
    else{
        let date=dob.value.trim().split("/");
        if(date.length==3 && date[0]<=31 && date[0]>=1 && date[1]<=12 && date[1]>=1 && date[2]<=2008 && date[2]>=1990){
            setSuccess(dob); 
        }
        else{
            setError(dob, ' * Check the format of Date of birth and type it correctly');
        }
    }    

    if(nic.value==null || nic.value.trim() ===''){
        setError(nic, ' * NIC number is required');
    }
    else{
        if(!isNaN(nic.value.trim()) &&  nic.value.trim().length==10 && nic.value.trim()>0){
            setSuccess(nic);
        }
        else{
            setError(nic, ' * NIC number should be 10 numbers only');
        }
    }

    if(address.value==null || address.value.trim() ===''){
        setError(address, ' * Address is required');
    }
    else{
        setSuccess(address);
    }

    if(telephone.value==null || telephone.value.trim() ===''){
        setError(telephone, ' * Mobile number is required');
    }
    else{
        if(!isNaN(telephone.value.trim()) &&  telephone.value.trim().length==10 && telephone.value.trim()>0){
            setSuccess(telephone);
        }
        else{
            setError(telephone, ' * Mobile number should only contain 10 numbers');
        }
    }

    if(Zscore.value==null || Zscore.value.trim() ===''){
        setError(Zscore, ' * Z score is required');
    }
    else{
        if(!isNaN(Zscore.value.trim()) && Zscore.value.trim()<=4.0){
            setSuccess(Zscore);
        }
        else{
            setError(Zscore, ' * Please enter the Z score as it is in Result');
        }
    }
}

function validateCourse(){
    if(selectOpt.value){
        setSuccess(selectOpt);
    }
    else{
        setError(selectOpt,' * Select the Stream');
    }

    const pref1=document.getElementById('1st-pre');
    const pref2=document.getElementById('2nd-pre');
    const pref3=document.getElementById('3rd-pre');
    const pref4=document.getElementById('4th-pre');
    const pref5=document.getElementById('5th-pre');

    if(pref1.value==null || pref1.value===''){
        setError(pref1, ' * Select an option here')
    }
    else{
        setSuccess(pref1);
    }

    if(pref2.value==null || pref2.value===''){
        setError(pref2, ' * Select an option here')
    }
    else{
        setSuccess(pref2);
    }

    if(pref3.value==null || pref3.value===''){
        setError(pref3, ' * Select an option here')
    }
    else{
        setSuccess(pref3);
    }

    if(pref4.value==null || pref4.value===''){
        setError(pref4, ' * Select an option here')
    }
    else{
        setSuccess(pref4);
    }

    if(pref5.value==null || pref5.value===''){
        setError(pref5, ' * Select an option here')
    }
    else{
        setSuccess(pref5);
    }

    if(selectOpt.value=="CM" || selectOpt.value=="SOR"){
        setSuccess(pref1);
        setSuccess(pref2);
        setSuccess(pref3);
        setSuccess(pref4);
        setSuccess(pref5);
    }
}

const setError = (element, msg) =>{
    const inputs=element.parentElement;
    const errDisplay=inputs.querySelector('.error');

    errDisplay.innerText=msg;
    inputs.classList.add('error');
    inputs.classList.remove('success');
}

const setSuccess = element =>{
    const inputs=element.parentElement;
    const errDisplay=inputs.querySelector('.error');

    errDisplay.innerText='';
    inputs.classList.remove('error');
}