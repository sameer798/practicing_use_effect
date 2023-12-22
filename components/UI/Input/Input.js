import React from "react";
import classes from './Input.mofule.css'
const Input = props =>{
return <div
className={`${classes.control} ${
  emailIsValid === false ? classes.invalid : ''
}`}
>
<label htmlFor="email">E-Mail</label>
<input
  type="email"
  id="email"
  value={enteredEmail}
  onChange={emailChangeHandler}
  onBlur={validateEmailHandler}
/>
</div>
}

export default Input