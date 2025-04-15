import '../views/SuccessApp.css'
import { SuccessButton } from '../components/Button.js'
import { SuccessTextContainer } from '../components/SuccessTextContainer.js'
import { useNavigate } from "react-router";
import Image from '../../assets/images/icon-success.svg'

function SuccessApp() {
  const userEmailValue = localStorage.getItem('user-email');
  const navigate = useNavigate();

  const Suscriptionclick = () => {
    navigate("/InitialCard");
  };

  return(
    <div class="formSuccessData">
      <div class="formSuccessText">

        <div class="formSuccessIMG">
          <img 
          alt="formSuccessPicture"
          src={ Image } /> 
        </div>

        <div class='textSuccessContainer'>
          <SuccessTextContainer text={userEmailValue}></SuccessTextContainer>
        </div>
          <SuccessButton text='Dismiss message' callback={Suscriptionclick}></SuccessButton>
    </div>
    </div>
  )
}

export default SuccessApp;