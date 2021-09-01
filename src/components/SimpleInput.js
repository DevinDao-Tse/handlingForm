import { useRef, useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [isNameValid, setIsNameValid] = useState(false)
  const [nameEdited, setIsNameEdited] = useState(false)
  const nameInputRef = useRef();

  //on every keystroke
  const nameInputHandler = (event) => {
    setEnteredName(event.target.value)
  }

  //on form submission
  const formSubmissionHandler = event => {
    event.preventDefault()

    setIsNameEdited(true)

    if (enteredName.trim() === '') {
      setIsNameValid(false)
      return;
    }

    setIsNameValid(true)

    console.log(enteredName)
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)
    setEnteredName('')
  }

  const nameValid = !isNameValid && nameEdited
  const nameInputClasses = nameValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text' id='name'
          onChange={nameInputHandler}
          value={enteredName}
        />
        {nameValid && <p className='error-text'>Field cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
