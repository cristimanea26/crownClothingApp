import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase";
import Form from "./Form";
import Button from "./Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("incorect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in">
      <div className="sign-in-title">
        <h1>Already have an account</h1>
        <h3>Sign in with your email and password</h3>
      </div>
      <div className="sign-in-form">
        <form onSubmit={handleSubmit}>
          <Form
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <Form
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              buttonType="google"
              onClick={signInWithGoogle}
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
