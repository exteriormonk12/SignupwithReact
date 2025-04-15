import '../views/App.css'
import Image from '../../assets/images/illustration-sign-up-desktop.svg'

export function ImageContainer() {
  return (
    <div class="formImage">
        <img 
        alt="formPicture" 
        src={ Image } />
    </div>
  )
}