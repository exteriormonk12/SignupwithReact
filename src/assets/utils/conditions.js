export function ValidateEmail() {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let userEmail = document.getElementById('emailadress');
  let userEmailText = userEmail.value;
  let emailhas = regex.test(userEmailText);

  if(emailhas === false) {
    document.getElementById('messageErrorText').innerHTML = 'Valid email required';
    userEmail.style.backgroundColor = 'hsl(5, 77.20%, 84.50%)';
    userEmail.style.borderColor = 'hsl(5, 77.20%, 84.50%)';
  }
}