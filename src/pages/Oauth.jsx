// src/pages/Oauth.jsx
import React from 'react'
import qs from 'qs'
import axios from 'axios'

const Oauth = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
    // 문자열 맨 앞의 ?를 생력
  });
  const login = ({ grant_type, client_id, redirect_uri, code, client_secret }) => axios.post(`https://kauth.kakao.com/oauth/token`, { grant_type, client_id, redirect_uri, code, client_secret })
  const showCode = query.code
  const kakaologin = () => {
    login('authorization_code', 'ebe3d82f71c1cf8f540b8e2129716067', 'http://localhost:3000/oauth', showCode, '4Dnj9bp26NmN3Z7dOpCGqEa4GDS9w3Gl')
  }
  return (
    <>
      <div>{showCode}</div>
      <div onClick={kakaologin}>로그인</div>
    </>
  )
}

export default Oauth