import '../views/App.css'
import { Button } from "../components/Button.js";
import { Input } from "../components/Input.js";
import { TextContainer } from "../components/TextContainer.js";
import { ImageContainer } from "../components/ImageContainer.js";
import { useNavigate } from "react-router";

export function App() {
  const navigate = useNavigate();

  const validateEmail = () => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let userEmail = document.getElementById("emailadress");
    let userEmailText = userEmail.value;
    let emailhas = regex.test(userEmailText);

    if (emailhas === false) {
      document.getElementById("messageErrorText").innerHTML =
        "Valid email required";
      userEmail.style.backgroundColor = "hsl(5, 77.20%, 84.50%)";
      userEmail.style.borderColor = "hsl(5, 77.20%, 84.50%)";
    } else {
      localStorage.setItem('user-email', userEmailText);
      navigate("/SuccessCard");
    }
  };

  return (
    <div class="formData">
      <div class="formText">
        <div class="textContainer">
          <TextContainer></TextContainer>

          <div class="emailContainer">
            <div class="messageContainer">
              <div class="textDiv">
                <label class="emailText">Email address</label>
                <br></br>
              </div>

              <div class="messageError">
                <label class="messageErrorText" id="messageErrorText"></label>
              </div>
            </div>

            <Input placeholder="email@company.com"></Input>
          </div>

          <Button
            text="Subscribe to monthly newsletter"
            callback={validateEmail}
          />
        </div>
      </div>
      <ImageContainer></ImageContainer>
    </div>
  );
}

export default App;
