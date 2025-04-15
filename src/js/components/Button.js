import '../views/App.css'

export function Button({text, callback}) {
  return (
    <>
  <button type="button" 
            id='subscription' 
            onClick={() => callback()}>{text}
  </button>
    </>
  )
}

export function SuccessButton({text, callback}) {
  return (
    <>
  <button type="button" 
            id='subscription' 
            onClick={() => callback()}>{text}
  </button>
    </>
  )
}