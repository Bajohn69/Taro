import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import 'animate.css'

import {
  taro_body,
  taro_body2,
  taro_butt,
  taro_spinner,
  character01,
  character02,
  character03,
  character04,
  character05,
  character06,
  egg,
  eggRight,
  eggLeft,
} from '../images'
const Taro = () => {
  const [taroState, setTaroState] = useState(taro_body)
  const [snipper, setSnipper] = useState(taro_spinner)
  const [butt, setButt] = useState(taro_butt)
  const [spinAnimation, setSpinAnimation] = useState('none')
  const [eggAnimation, setEggAnimation] = useState('none')
  const [eggDiplay, setEggDiplay] = useState('none')

  const pants = () => {
    taroState === taro_body ? setTaroState(taro_body2) : setTaroState(taro_body)
    taroState === taro_body ? setButt() : setButt(taro_butt)
    taroState === taro_body ? setSnipper() : setSnipper(taro_spinner)
    taroState === taro_body ? setEggDiplay('none') : setEggDiplay('block')
  }

  const spin = () => {
    setSpinAnimation('rotate 0.8s forwards')
    setEggAnimation('eggAnimation 1s forwards')
    setTimeout(() => {
      setSpinAnimation('none')
    }, 800)
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Button
          onClick={() => {
            pants()
          }}
          className="m-5"
        >
          穿還是不穿?
        </Button>

        <Row>
          <Col className="d-flex justify-content-center flex-column position-relative">
            <div
              className="snipperWrap position-absolute"
              onClick={() => {
                spin()
              }}
              style={{ animation: `${spinAnimation}` }}
            >
              <img src={snipper} alt="" />
            </div>

            <div className="buttWrap position-absolute">
              <img src={butt} alt="" />
            </div>
            <div
              className="eggWrap position-absolute"
              style={{ animation: `${eggAnimation}`, display: `${eggDiplay}` }}
            >
              <img className="w-100" src={egg} alt="" />
            </div>
            <div className="taroWrap">
              <img src={taroState} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Taro
