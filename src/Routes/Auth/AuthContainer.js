import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";

export default () => {
  const [action, setAction] = useState("logIn");
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      name={name}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
    />
  );
};
