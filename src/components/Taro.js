import React, { useState, useEffect } from 'react'
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
  character07,
  character08,
  character09,
  character10,
  character11,
  character12,
  character13,
  egg,
  eggRight,
  eggLeft,
  birthday,
  card01_01,
  card01_02,
  card01_03,
  card01_04,
  card02_01,
  card02_02,
  card02_03,
  card02_04,
  card03_01,
  card03_02,
  card03_03,
  card03_04,
  card04_01,
  card04_02,
  card04_03,
  card04_04,
  card05_01,
  card05_02,
  card05_03,
  card05_04,
  card06_01,
  card06_02,
  card06_03,
  card06_04,
  card07_01,
  card07_02,
  card07_03,
  card07_04,
  card08_01,
  card08_02,
  card08_03,
  card08_04,
  card09_01,
  card09_02,
  card09_03,
  card09_04,
  card10_01,
  card10_02,
  card10_03,
  card10_04,
  card11_01,
  card11_02,
  card11_03,
  card11_04,
  card12_01,
  card12_02,
  card12_03,
  card12_04,
  card13_01,
  card13_02,
  card13_03,
  card13_04,
  card14_01,
  card14_02,
  card14_03,
  card14_04,
  card15_01,
  card15_02,
  card15_03,
  card15_04,
  card16_01,
  card16_02,
  card16_03,
  card16_04,
} from '../images'

import {
  spin01,
  spin02,
  spin03,
  spin04,
  spin05,
  spin06,
  characterAudio01,
  characterAudio02,
  characterAudio03,
  characterAudio04,
  characterAudio05,
  characterAudio06,
  characterAudio07,
  characterAudio08,
  characterAudio09,
  characterAudio10,
  characterAudio11,
  characterAudio12,
  characterAudio13,
  characterMp401,
  characterMp403,
  characterMp404,
} from '../audio'

const Taro = () => {
  const [started, setStarted] = useState(false)
  const [taro, setTaro] = useState(false)

  const [spinAnimation, setSpinAnimation] = useState('none')
  const [eggAnimation, setEggAnimation] = useState('none')
  const [eggShake, setEggShake] = useState('')
  const [eggDisplay, setEggDisplay] = useState('none')
  const [eggLeftAni, setEggLeftAni] = useState('none')
  const [eggRightAni, setEggRightAni] = useState('none')
  const [bigEggDisplay, setbigEggDisplay] = useState('none')
  const [next, setNext] = useState(0)

  // let [currentCard, setCurrentCard] = useState(1)

  const spin01sf = new Audio(spin01)
  const spin02sf = new Audio(spin02)
  const spin03sf = new Audio(spin03)
  const spin04sf = new Audio(spin04)
  const spin05sf = new Audio(spin05)
  const spin06sf = new Audio(spin06)
  const sfArr = [spin01sf, spin02sf, spin03sf, spin04sf, spin05sf, spin06sf]
  const randomSpinSf = () => {
    return Math.floor(Math.random() * sfArr.length)
  }
  const spinSf = () => {
    sfArr[randomSpinSf()].play()
  }

  const pants = () => {
    taro ? setTaro(false) : setTaro(true)
  }

  const eggArr = [
    card01_01,
    card02_01,
    card03_01,
    card04_01,
    card05_01,
    card06_01,
    card07_01,
    card08_01,
    card09_01,
    card10_01,
    card11_01,
    card12_01,
    card13_01,
    card14_01,
    card15_01,
    card16_01,
  ]
  const eggLeftArr = [
    card01_02,
    card02_02,
    card03_02,
    card04_02,
    card05_02,
    card06_02,
    card07_02,
    card08_02,
    card09_02,
    card10_02,
    card11_02,
    card12_02,
    card13_02,
    card14_02,
    card15_02,
    card16_02,
  ]
  const eggRightArr = [
    card01_03,
    card02_03,
    card03_03,
    card04_03,
    card05_03,
    card06_03,
    card07_03,
    card08_03,
    card09_03,
    card10_03,
    card11_03,
    card12_03,
    card13_03,
    card14_03,
    card15_03,
    card16_03,
  ]
  const cardArr = [
    card01_04,
    card02_04,
    card03_04,
    card04_04,
    card05_04,
    card06_04,
    card07_04,
    card08_04,
    card09_04,
    card10_04,
    card11_04,
    card12_04,
    card13_04,
    card14_04,
    card15_04,
    card16_04,
  ]
  const [numbers, setNumbers] = useState([])
  const [clicks, setClicks] = useState(0)
  const [randomNumber, setRandomNumber] = useState(0)

  // 在元件掛載時或者每次點擊後執行
  useEffect(() => {
    if (numbers.length === 0 || clicks >= eggArr.length) {
      setNumbers(
        Array.from({ length: eggArr.length }, (_, i) => i).sort(
          () => Math.random() - 0.5
        )
      )
    }
  }, [clicks])

  const spin = () => {
    setRandomNumber(numbers[clicks] ?? 0)

    if (clicks >= eggArr.length) {
      setClicks(0)
    } else {
      setClicks(clicks + 1)
    }
    console.log('QQQQ', numbers, clicks, randomNumber)

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
    // console.log('open', numbers, clicks, randomNumber)
  }

  const [characterNumber, setCharacterNumber] = useState(0)
  const [character01Ani, setCharacter01Ani] = useState('none')
  const [character02Ani, setCharacter02Ani] = useState('none')
  const [character03Ani, setCharacter03Ani] = useState('none')
  const [character11Ani, setCharacter11Ani] = useState('none')
  const characterSF01 = new Audio(characterAudio01)
  const characterSF02 = new Audio(characterAudio02)
  const characterSF11 = new Audio(characterAudio11)

  const nextCard = () => {
    setEggLeftAni('none')
    setEggRightAni('none')
    setbigEggDisplay('none')
    setEggDisplay('none')
    setEggAnimation('none')
    setNext(0)
    // console.log('next', numbers, clicks, randomNumber)

    setCharacterNumber(characterNumber + 1)
    if (characterNumber === 0) {
      setCharacter01Ani('down 3s ease-in-out forwards')
      setTimeout(() => {
        setCharacter01Ani('none')
      }, 3000)
      characterSF01.play()
    } else if (characterNumber === 1) {
      setCharacter11Ani('down 3s ease-in-out forwards')
      setTimeout(() => {
        setCharacter11Ani('none')
      }, 3000)
      characterSF11.play()
    }
    // currentCard === 5 ? setCurrentCard(1) : setCurrentCard(currentCard + 1)
    // console.log(currentCard)
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
        <div className="outside">
          <div
            className="character11 position-absolute"
            style={{ animation: character11Ani }}
          >
            <img src={character11} alt="" />
          </div>
          <div
            className="character02 position-absolute"
            style={{ animation: character02Ani }}
          >
            <img src={character02} alt="" />
          </div>
          <div
            className="character01 position-absolute"
            style={{ animation: character01Ani }}
          >
            <img src={character01} alt="" />
          </div>
          <Button
            className="backBtn position-absolute"
            style={{ opacity: `${next}` }}
            onClick={() => {
              nextCard()
            }}
          >
            轉下一顆
          </Button>

          <Container
            className="position-absolute align-items-center justify-content-center bigEgg"
            style={{ display: `${bigEggDisplay}` }}
          >
            <div className="eggLeftWrap" style={{ animation: `${eggLeftAni}` }}>
              <img className="w-100" src={eggLeftArr[randomNumber]} alt="" />
            </div>
            <div
              className="eggRightWrap"
              style={{ animation: `${eggRightAni}` }}
            >
              <img className="w-100" src={eggRightArr[randomNumber]} alt="" />
            </div>
          </Container>
          <Container
            className="position-absolute align-items-center justify-content-center hbcard"
            style={{ display: `${bigEggDisplay}` }}
          >
            <div className="cardWarp ">
              {/* TODO: */}
              <img className="w-100" src={cardArr[randomNumber]} alt="" />
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
                  className="spinnerWrap position-absolute"
                  onMouseOver={() => {
                    spinSf()
                  }}
                  onClick={() => {
                    spin()
                  }}
                  style={{ animation: `${spinAnimation}` }}
                >
                  <img src={taro ? '' : taro_spinner} alt="" />
                </div>

                <div className="buttWrap position-absolute">
                  <img src={taro ? '' : taro_butt} alt="" />
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
                    src={eggArr[randomNumber]}
                    alt=""
                  />
                </div>
                <div className="taroWrap">
                  <img src={taro ? taro_body2 : taro_body} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  )
}

export default Taro
