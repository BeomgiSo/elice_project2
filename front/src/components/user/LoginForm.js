import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./user.css";
import { textAlign } from "@mui/system";
function LoginForm({ setOpen, handleClose }) {
  const [findPW, setFindPW] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(email);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = password.length >= 4;
  //
  // 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div id="modal">
      <div id="button" style={{ textAlign: "right" }}>
        <Button variant="text" className="closebutton" onClick={handleClose}>
          x
        </Button>
      </div>

      <img src="image/dice.png" alt="주사위" />
      {!findPW ? (
        <>
          <div className="login">
            <input
              className="login-input"
              name="email"
              type="text"
              placeholder="E-MAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailValid && (
              <div className="text-success">
                이메일 형식이 올바르지 않습니다.
              </div>
            )}

            <input
              className="login-input"
              name="password"
              type="text"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordValid && (
              <div className="text-success">비밀번호는 4글자 이상입니다.</div>
            )}
          </div>

          <Button
            className="login-button"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            LOGIN
          </Button>

          <div className="sns-login">sns 로그인</div>

          <Button
            variant="text"
            className="login-bottom"
            onClick={() => setFindPW(true)}
          >
            ID/PW찾기
          </Button>
          <span className="login-bottom">|</span>
          <Button variant="text" className="login-bottom" onClick={() => navigate("/register")}>
            회원가입
          </Button>
        </>
      ) : (
        <>
          <div id="findPw">비밀번호 재설정</div>

          <input
            className="login-input"
            name="email"
            type="text"
            placeholder="E-MAIL"
          />

          <Button className="login-button">찾기</Button>

          <div className="findPW-detail">
            <div>
              입력한 E-Mail로 임시 비밀번호를 보내드립니다.
              <br />
              <br />
              입력후 찾기 버튼을 눌러주세요.
            </div>
          </div>
          <div className="or">or</div>
          <div className="findPW-detail">
            아직 회원이 아니시면 회원가입을 해주세요.
          </div>
          <Button variant="text" className="login-bottom" onClick={() => navigate("/register")}>
            회원가입
          </Button>
        </>
      )}
    </div>
  );
}

export default LoginForm;
