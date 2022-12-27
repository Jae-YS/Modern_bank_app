import React from 'react'
import styles from '../style'

const Button = ({styles}) => (
  <button type="button" className={`font-poppins font-medium
  text-[18px] text-primary outline-none ${styles} rounded-[10px]
  py-4 px-6 bg-blue-gradient`}>
    Get Started
  </button>
)

export default Button;