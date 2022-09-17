import React, { FC, ReactNode } from 'react'
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
    <>
      {show && (
        <div className={styles.root}>
          <div className={styles.main}>
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
      )}
    </>
  )
}

export default Modal
