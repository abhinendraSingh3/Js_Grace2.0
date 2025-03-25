const form=document.getElementById("form")
const username=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('Password')
const cnfpas=document.getElementById('Confirm')
const btn=document.getElementById('btn')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinput();
    
})
const validateinput=(e)=>{
    const tusername=username.value.trim();
    const tpassword=password.value.trim();
    const pasval=password.value;
    const tcnfpas=cnfpas.value.trim();
    const cnfval=cnfpas.value;
    const temail=email.value.trim();
    const chmail=email.value

    if(tusername ===""){
        oerror(username,"Username is required")
    }
        else{
         osuccess(username)
        }
    if(tpassword ===""){
        oerror(password,"Password is required")
    }
        else if(tpassword.length<8){
            oerror(password,"please enter password more than 8 digits")
        }
        else{
            osuccess(password)
        }

    if(tcnfpas ===""){
        oerror(cnfpas,"Please enter password for confirmation")
    }
        else if(pasval !=cnfval){
            oerror(cnfpas,"Entered password does not match")
        }

        else{
            osuccess(cnfpas)
        }


    if(temail ===""){
        oerror(email,"Email is required")
    }
        else{
            checkmail(chmail)
        }
    
    
}
const oerror=(elemen,msg)=>{
    const parentele = elemen.parentElement;
    console.log('not fine');
    const errortar=parentele.querySelector('.error')
    errortar.innerText=msg

}
function osuccess(sEl){
    const parentEl = sEl.parentElement;
    const success=parentEl.querySelector('.error')
    success.innerText=""
    console.log("everythingh fine")

}

function checkmail(elemen){
    let emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(elemen)){
        oerror(email,"Kindly provide valid email")
        console.log("nopes")
    }
    else{
        osuccess(email)
    }
}


