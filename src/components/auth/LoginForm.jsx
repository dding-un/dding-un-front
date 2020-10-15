// src/components/auth/LoginForm.jsx
import React from 'react'
import styled from 'styled-components'
import KaKaoLogin from 'react-kakao-login'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import oc from 'open-color'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: `${oc.teal[6]};`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${oc.teal[6]}`,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: `${oc.teal[6]}`,
      },
    },
  },
})(TextField)

const LoginForm = () => {
  return (
    <LoginFormWrap>
      <div className="login-box">
        <CssTextField
          id="outlined-required"
          type="text"
          label="아이디"
          variant="outlined"
        />
        <CssTextField
          id="outlined-password-input"
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button>로그인</Button>
        <KaKaoBtn
        jsKey={'4f3559a3cfceb5fbb436cfe4e7021471'}
        buttonText='카카오 계정으로 로그인'
        onSuccess={result => console.log('성공', result)}
        onFailure={result => console.log('실패', result)}
        getProfile={true}
      />
      </div>
    </LoginFormWrap>
  )
}

const LoginFormWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 350px;
    width: 500px;
    padding: 2rem;
    border: 1px solid black;
    div ~ div { margin-top: 1rem; }
    div { width: 100%; }
  }
`

const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  height: 55px;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid ${oc.teal[6]};
  border-radius: 5px;
  background: white;
  color: ${oc.teal[6]};
  cursor: pointer;
  transition: background .3s, color .3s;
  &:hover {
    background: ${oc.teal[6]};
    color: white;
  }
`

const KaKaoBtn = styled(KaKaoLogin)`
  margin-top: 1rem;
  padding: 0;
  width: 100%;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default LoginForm