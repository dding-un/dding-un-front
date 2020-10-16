// src/components/common/Footer.jsx
import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import { github, facebook, instagram } from 'assets/svg'

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <IconWrap>
          <div className="icon">
            <a href="https://github.com/cod1ngdog"><img src={github} alt="" /></a>
          </div>
          <div className="icon">
            <a href="https://facebook.com/codingdog.official" ><img src={facebook} alt="" /></a>
          </div>
          <div className="icon">
            <a href="https://instagram.com/codingdog.official" ><img src={instagram} alt="" /></a>
          </div>
        </IconWrap>
        <TextWrap>
          <div className="copy">ⓒ2020 Codingdog</div>
        </TextWrap>
      </FooterInner>
    </FooterWrap>
  )
}

const FooterWrap = styled.div`
  height: 200px;
  background: ${oc.gray[6]};
`

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  font-size: 1.25rem;
`

const IconWrap = styled.div`
  display: flex;
  div + div { margin-left: 2rem; }
  .icon {
    img { height: 50px; width: 50px; }
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .link { cursor: pointer; }
  .link + .link:before { content: '\\2022'; margin: 0.5rem; font-size: 1rem; }
  .copy { margin-top: 2rem; color: white; font-size: 1rem; }
`

export default Footer