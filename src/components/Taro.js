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
  birthday,
} from '../images'

import { spin01, spin02, spin03, audio01, audio05 } from '../audio'

const Taro = () => {
  const [started, setStarted] = useState(false)
  const [taroState, setTaroState] = useState(taro_body)
  const [snipper, setSnipper] = useState(taro_spinner)
  const [butt, setButt] = useState(taro_butt)
  const [spinAnimation, setSpinAnimation] = useState('none')
  const [eggAnimation, setEggAnimation] = useState('none')
  const [eggShake, setEggShake] = useState('')
  const [eggDisplay, setEggDisplay] = useState('none')
  const [eggLeftAni, setEggLeftAni] = useState('none')
  const [eggRightAni, setEggRightAni] = useState('none')
  const [bigEggDisplay, setbigEggDisplay] = useState('none')
  const [next, setNext] = useState(0)

  // const randomSpinSf = () => {
  //   return 'spin0' + Math.ceil(Math.random() * 3) + 'sf'
  // }
  const randomSpinSf = () => {
    return Math.floor(Math.random() * 3)
  }

  const spin01sf = new Audio(spin01)
  const spin02sf = new Audio(spin02)
  const spin03sf = new Audio(spin03)
  // const randomSpin = randomSpinSf()
  const sfArr = [spin01sf, spin02sf, spin03sf]
  const spinSf = () => {
    sfArr[randomSpinSf()].play()
    // console.log(sfArr[randomSpinSf()])
  }

  const pants = () => {
    taroState === taro_body ? setTaroState(taro_body2) : setTaroState(taro_body)
    taroState === taro_body ? setButt() : setButt(taro_butt)
    taroState === taro_body ? setSnipper() : setSnipper(taro_spinner)
    taroState === taro_body ? setEggDisplay('none') : setEggDisplay('block')
  }

  const spin = () => {
    setSpinAnimation('rotate 0.8s forwards')
    setEggDisplay('block')
    setEggAnimation('eggAnimation 1s forwards')
    setTimeout(() => {
      setEggShake('animate__bounce')
    }, 1000)
  }

  const open = () => {
    setSpinAnimation('none')
    setEggLeftAni('left 1s forwards')
    setEggRightAni('right 1s forwards')
    setbigEggDisplay('flex')
    setEggShake('')
    setTimeout(() => {
      setNext(1)
    }, 1000)
  }

  const reset = () => {
    setEggLeftAni('none')
    setEggRightAni('none')
    setbigEggDisplay('none')
    setEggDisplay('none')
    setEggAnimation('none')
    setNext(0)
  }

  return (
    <>
      {started || (
        <>
          <Container className="d-flex justify-content-center align-items-center">
            <Button
              onClick={() => {
                setStarted(true)
              }}
            >
              start
            </Button>
          </Container>
        </>
      )}

      {started && (
        <>
          <Button
            className="backBtn position-absolute"
            style={{ opacity: `${next}` }}
            onClick={() => {
              reset()
            }}
          >
            轉下一顆
          </Button>

          <Container
            className="position-absolute align-items-center justify-content-center bigEgg"
            style={{ display: `${bigEggDisplay}` }}
          >
            <div className="eggLeftWrap" style={{ animation: `${eggLeftAni}` }}>
              <img className="w-100" src={eggLeft} alt="" />
            </div>
            <div
              className="eggRightWrap"
              style={{ animation: `${eggRightAni}` }}
            >
              <img className="w-100" src={eggRight} alt="" />
            </div>
          </Container>
          <Container
            className="position-absolute align-items-center justify-content-center hbcard"
            style={{ display: `${bigEggDisplay}` }}
          >
            <div className="cardWarp ">
              <img className="w-100" src={birthday} alt="" />
            </div>
          </Container>

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
                  onMouseOver={() => {
                    spinSf()
                  }}
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
                  onClick={() => {
                    open()
                  }}
                  style={{
                    animation: `${eggAnimation}`,
                    display: `${eggDisplay}`,
                  }}
                >
                  <img
                    className={`w-100 animate__animated ${eggShake} animate__infinite`}
                    src={egg}
                    alt=""
                  />
                </div>
                <div className="taroWrap">
                  <img src={taroState} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default Taro
