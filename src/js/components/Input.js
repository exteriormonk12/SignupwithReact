import '../views/App.css'

export function Input({text}) {
  return (
  <input 
  type='text' 
  id='emailadress' 
  class='emailadress' 
  placeholder={text}
  />
)
}