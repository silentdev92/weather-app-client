import React, { FC } from 'react'
import styles from './Button.module.sass'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  text,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={styles.root}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
