import React from 'react'
import State from './test/state'
import StateMany from './test/stateMany'
const States: React.FC<Record<string, unknown>> = function () {
  return (
    <>
      <State />
      <hr />
      <StateMany />
    </>
  )
}
export default States
