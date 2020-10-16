// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import oc from 'open-color'

const Header = () => {
  const [state, setState] = useState({
    sbackground: 'inherit',
    scolor: 'white',
    bBack: `${oc.teal[4]}`,
    bColor: `white`,
    drop: '',
    shadow: ''
  })
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setState({
        sbackground: window.scrollY < 80 ? `${oc.gray[9]}` : 'rgba(255, 255, 255, 0.9)',
        scolor: window.scrollY < 80 ? 'white' : 'black',
        bBack: window.scrollY < 80 ? `${oc.teal[4]}` : 'inherit',
        bColor: window.scrollY < 80 ? 'white' : `${oc.teal[4]}`,
        shadow: window.scrollY < 80 ? '' : '0 1px 1px 0 rgba(81, 99, 120, 0.2)',
        drop: window.scrollY < 80 ? '' : 'saturate(180%) blur(20px)'
      })
    })
  }, [])
  let { sbackground, scolor, bBack, bColor, shadow, drop } = state
  return (
    <>
      <HeaderWrap drop={drop} sbackground={sbackground} scolor={scolor} shadow={shadow} >
        <HeaderInner>
          <div>
            <div className="logo"><Link to="/">천하제일<br/>명언대회</Link></div>
            <div className="menu">
              <div className="menu rank">
                <Link to="/rank">랭킹</Link>
                <div className="under"></div>
              </div>
              <div className="menu chat">
                <Link to="/chat">채팅방</Link>
                <div className="under"></div>
              </div>
            </div>
          </div>
          <div>
            <Button bBack={bBack} bColor={bColor}><Link to="/login">로그인</Link></Button>
          </div>
        </HeaderInner>
      </HeaderWrap>
      <Space />
    </>
  )
}

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: ${(props => props.drop)};
  background: ${(props => props.sbackground)};
  color: ${(props => props.scolor)};
  box-shadow: ${(props => props.shadow)};
  transition: background .3s, color .3s;
  z-index: 99;
`

const HeaderInner = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  & > div {
    display :flex;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    width: 80px;
    margin-right: 100px;
    cursor: pointer;
    letter-spacing: -2px;
    line-height: 95%;
    a {
      text-decoration: none;
      color: ${oc.teal[4]};
    }
  }
  .menu {
    display: flex;
    font-size: 1.25rem;
    font-weight: 400;
    align-items: center;
    cursor: pointer;
    div + div { margin-left: 2rem; }
    .chat {
      position: relative;
      &:hover {
        .under {
          width: 100%;
        }
      }
    }
    .today {
      position: relative;
      &:hover {
        .under {
          width: 100%;
        }
      }
    }
    .rank {
      position: relative;
      &:hover {
        .under {
          width: 100%;
        }
      }
    }
    .under {
      position: absolute;
      overflow: hidden;
      top: 25px;
      height: 3px;
      width: 0;
      background: ${oc.teal[4]};
      transition: width .3s;
    }
  }
`

const Button = styled.button`
  height: 35px;
  width: 75px;
  background: ${(props => props.bBack)};
  border: 1px solid ${oc.teal[4]};
  color: ${(props => props.bColor)};
  border-radius: 5px;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all .3s;
  &:hover {
    border: 1px solid ${(props => props.bBack===`${oc.teal[4]}` ? `${oc.teal[6]}` : `${oc.teal[4]}`)};
    background: ${(props => props.bBack===`${oc.teal[4]}` ? `${oc.teal[6]}` : `${oc.teal[4]}`)};
    color: ${(props => props.bColor==='white' ? 'white' : 'white')};
  }
`

const Space = styled.div`
  height: 70px;
  background: ${oc.gray[9]};
`

export default Header