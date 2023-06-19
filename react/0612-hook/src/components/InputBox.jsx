import { useFormInput } from "../Hook/useFormInput";


export default function InputBox() {
  const firstNameProps = useFormInput('');
  const lastNameProps = useFormInput('');

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
      <br/>
    </>
  );
}