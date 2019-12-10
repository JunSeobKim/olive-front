import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const LOGO = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin: 0px 50px 50px 50px;
`;

export default () => {
  const [action, setAction] = useState("logIn");
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  return (
    <Wrapper>
      <LOGO>TOUCH N GO</LOGO>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"이메일"} {...name} />
            <Input placeholder={"비밀번호"} {...password} type="password" />
            <Button text={"로그인"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"이름"} {...name} />
            <Input placeholder={"이메일"} {...email} />
            <Input placeholder={"비밀번호"} {...password} type="password" />
            <Input
              placeholder={"비밀번호 확인"}
              {...confirmPassword}
              type="password"
            />
            <Button text={"회원가입"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            새 계정 만들기{" "}
            <Link onClick={() => setAction("signUp")}>회원가입</Link>
          </>
        ) : (
          <>
            로그인 하기 <Link onClick={() => setAction("logIn")}>로그인</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
