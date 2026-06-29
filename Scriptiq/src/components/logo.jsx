import React from 'react'
import logoImg from '../Scriptiq_Logo.png'

function Logo({width = '100px'}) {
  return (
    <img src={logoImg} alt="ScriptIQ" style={{width}} />
  )
}

export default Logo