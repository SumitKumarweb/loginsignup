

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var passwordRegEx=  /^[A-Za-z]\w{7,14}$/; 

const savedCredentials = localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")) : [];

document.getElementById("signBtn")?.addEventListener("click", ()=> {
    const email = document.getElementById("emailSignUp").value;
    const password = document.getElementById("passwordSignUp").value;

    if(!emailRegEx.test(email)){
        alert("Correct Your Email Address");
        return;
    } 
    if(!passwordRegEx.test(password)){
        alert("Min 7 digit password and Max is 16");
        return;
    }

    const isCrentialFound = savedCredentials.some((credential) =>  credential.email === email);
 
    if(isCrentialFound){
        alert("Your Already User");
        return
    };

    savedCredentials.push({email,password});
    localStorage.setItem("credentials",JSON.stringify(savedCredentials));
    alert("You Successfully Sign Go to Login page");
})

// Login Page

document.getElementById("loginBtn")?.addEventListener("click", ()=>{
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    if(!emailRegEx.test(email)){
        alert("Correct Your Email Address");
        return;
    } 
    if(!passwordRegEx.test(password)){
        alert("Min 7 digit password and Max is 16");
        return;
    }

    const isCrentialFoundEmail = savedCredentials.some((credential) =>  credential.email === email);
    const isCrentialFoundPassword = savedCredentials.some((credential) =>  credential.password === password);

    
    
    if(isCrentialFoundEmail && isCrentialFoundPassword){
        alert("Your are Login");
        return
    };
    if(!isCrentialFoundEmail && !isCrentialFoundPassword){
        alert("Your id not found. Please SignUp");
    }
  
})