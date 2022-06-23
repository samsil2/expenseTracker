const usernameField = document.querySelector("#usernameField");
const usernameFeedbackArea = document.querySelector(".invalid_feedback");
const  usernameSuccessOutput = document.querySelector(".usernameSuccessOutput");

const emailField = document.querySelector("#emailField");
const emailFeedBackArea = document.querySelector(".emailFeedBackArea");

const passwordField = document.querySelector("#passwordField");
const showPasswordToggle = document.querySelector(".showPasswordToggle");
//pass show & hide
showPasswordToggle.addEventListener("click", (e) => {
    if(showPasswordToggle.textContent==="SHOW"){
        showPasswordToggle.textContent= "HIDE";

        passwordField.setAttribute("type", "text");
    }
    else {
        showPasswordToggle.textContent="SHOW";

        passwordField.setAttribute("type", "password");
    }

})

// username validation
usernameField.addEventListener("keyup", (e) => {
  const usernameVal = e.target.value;
  //success msg
  usernameSuccessOutput.style.display = 'block';

  usernameSuccessOutput.textContent = `Checking ${usernameVal}`;

  usernameField.classList.remove('is-invalid');
  usernameFeedbackArea.style.display = "none";

  if (usernameVal.length > 0) {
        fetch('/auth/username', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body:JSON.stringify({username: usernameVal})
    })
      .then((response) => {
            return response.json();
        })
      .then((data) => {
        console.log("data", data);

        usernameSuccessOutput.style.display = 'none';


        if(data.username_error){
            usernameField.classList.add('is-invalid');
            usernameFeedbackArea.style.display = "block";
            usernameFeedbackArea.innerHTML= `<p>${data.username_error}</p>`;
        }
      });
  }
});

// email validation
emailField.addEventListener("keyup", (e) => {
  const emailVal = e.target.value;

  emailField.classList.remove("is-invalid");
  emailFeedBackArea.style.display = "none";

  if (emailVal.length > 0) {
        fetch('/auth/emailValidation', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body:JSON.stringify({email: emailVal})
    })
      .then((response) => {
            return response.json();
        })
      .then((data) => {
        console.log("data", data);

        if(data.email_error){
            emailField.classList.add('is-invalid');
            emailFeedBackArea.style.display = "block";
            emailFeedBackArea.innerHTML= `<p>${data.email_error}</p>`;
        }
      });
  }
});

