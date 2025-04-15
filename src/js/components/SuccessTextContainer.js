import '../views/SuccessApp.css'

export function SuccessTextContainer({text}) {
  return (
    <>
    <div class="textSuccessContainer">
          <h1 id='topHead'>Thanks for suscribing!</h1>
        
          <p id='successP'>A confirmation email has been sent to {text+' '}
            Please open it and click the button inside to confirm your subscription.</p>
      </div>
    </>
  )
}