// src/components/main/Contents.jsx
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { makeStyles } from '@material-ui/core/styles'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import oc from 'open-color'
import { like } from 'assets/img'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(4),
    backgroundColor: `${oc.teal[4]}`,
    '&:hover': {
      backgroundColor: `${oc.teal[5]}`,
    },
  }
}))

const datas = [{
  name: "한규태", saying: "If you wnat to go fast, go alone, If you want to go far, go together", create: "1시간전",
  thumbnail: "https://pbs.twimg.com/media/EDRC63SXYAAGgVC.jpg", like: 30
}, {
  name: "최원준", saying: "나는 왕이다.", create: "10분전",
  thumbnail: "https://d3b39vpyptsv01.cloudfront.net/photo/1/2/905d3b6941f2aa85e24fd302cd75a8c6.jpg", like: 20
}, {
  name: "김용현", saying: "저는 김대리가 아닙니다", create: "5초전",
  thumbnail: "https://4.bp.blogspot.com/-JdQOwyxlKBg/Ut9kEID6tcI/AAAAAAAABes/G8XWnlB9kc8/s1600/beautiful_space_view-wallpaper-2560x1440.jpg", like: 5
}]

const Contents = () => {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [contents, setContents] = useState('')
  const [thumb, setThumb] = useState({ imgFile: null, imgPreview: null })
  const [error, setError] = useState(false)

  const onShow = () => setShow(true)
  const onHide = () => {
    setShow(false)
    setContents('')
    setError(false)
    setThumb(null)
  }
  const onChange = e => setContents(e.target.value)
  const onClick = () => {
    if(contents.length > 30)
      setError(true)
    else {
      datas.push({ name: "유도곤", saying: contents, create: "1초전", like: 0, thumbnail: thumb.imgPreview })
      onHide()
      alert('명언 작성 완료')
    }
  }
  const onThumbChange = (e) => {
    let reader = new FileReader()
    let img = e.target.files[0]
    reader.onloadend = () => setThumb({ imgFile: img, imgPreview: reader.result })
    reader.readAsDataURL(img)
  }

  useEffect(() => {
    console.log(thumb)
  }, [thumb])

  return (
    <ContentsWrap>
      <h1>오늘의 명언</h1>
      <CardWrap>
        { datas.length ?
          (datas.map((data, index) => (
            <Card key={index} thumbnail={data.thumbnail}>
              <div className="info">
                <h2>{data.name}</h2>
                <div className="like">
                  <div>{data.create}</div>
                  <div className="like-icon"><img src={like} alt="" />{data.like}개</div>
                </div>
              </div>
              <div className="description">
                <div className="saying">{data.saying}</div>
              </div>
            </Card>
          )))
          : <div>데이터 없음</div>
        }
      </CardWrap>
      <Fab className={classes.fab} size="large" color="primary" aria-label="add" onClick={onShow}>
        <AddIcon />
      </Fab>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header>
          <Modal.Title>명언 작성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledTextarea onChange={onChange} aria-label="minimum height" rowsMin={3} placeholder="명언을 작성해주세요." />
          <Error error={error}>30자 이하로 입력해주세요 !</Error>
          { thumb && <ThumbImg src={thumb.imgPreview} alt="" /> }
          <ThumbUp>
            <input type="file" name="thumbnail" onChange={onThumbChange} accept="image/*" style={{display:'none'}} />
            <input type="submit" style={{display:'none'}} />
            썸네일 업로드
          </ThumbUp>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>닫기</Button>
          <Button variant="primary" onClick={onClick}>작성</Button>
        </Modal.Footer>
      </Modal>
    </ContentsWrap>
  )
}

const ContentsWrap = styled.div`
  margin: 3rem auto;
  width: 1200px;
`

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  margin-top: 2rem;
`

const Card = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;
  color: white;
  position: relative;
  background-image: url(${props => props.thumbnail});
  background-size: cover;
  background-position: 50%;
  & ~ & {
    margin-bottom: 1rem;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background: white;
    padding: 1rem;
    color: black;
    border-bottom: 1px solid black;
  }
  .like {
      display: flex;
      align-items: center;
      div + div { margin-left: 1rem; }
    }
  .like-icon {
    display: flex;
    align-items: center;
    img {
      width: 35px; height: 35px; cursor: pointer;
    }
  }
  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    height: 430px;
    width: 100%;
    font-size: 2rem;
    word-break: keep-all;
  }
  .saying { text-align: center }
`

const Error = styled.div`
  display: ${props => props.error ? 'flex' : 'none'};
  color: red;
  justify-content: flex-end;
`

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
  font-size: 1.25rem;
`

const ThumbImg = styled.img`
  margin: 1rem auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ThumbUp = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  color: white;
  background: ${oc.teal[4]};
  cursor: pointer;
`

export default Contents
