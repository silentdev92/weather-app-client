import React, { FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card } from '../Card'
import styles from './Modal.module.sass'

interface ModalProps {
  children: ReactNode
  show: boolean
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ children, show, onClose }) => {
  const closeHandler = () => onClose()

  return (
    <CSSTransition
      addEndListener={(node: HTMLElement, done: () => void) => {
        node.addEventListener('transitionend', done, false)
      }}
      in={show}
      timeout={300}
      classNames="fade"
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.root} onClick={closeHandler}>
        <div className={styles.main} onClick={(e) => e.stopPropagation()}>
          <Card>
            <div className={styles.icon} onClick={closeHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {children}
          </Card>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Modal
