import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

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
} from '../images'
const Taro = () => {
  let defaultTaro = taro_body

  const [taroState, setTaroState] = useState(defaultTaro)

  const pants = () => {
    console.log(taroState)
    defaultTaro = defaultTaro === taro_body ? taro_body2 : taro_body
    setTaroState(defaultTaro)
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
          Click
        </Button>

        <Row>
          <Col className="d-flex justify-content-center flex-column">
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
