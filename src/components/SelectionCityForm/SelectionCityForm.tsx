import React from 'react'
import { Button } from '../ui/Button'
import styles from './SelectionCityForm.module.sass'

const SelectionCityForm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Select City</div>
      <div className={styles.select}>
        <input type="text" />
        <div className={styles.items}>
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className={styles.item}
              onClick={() => {
                console.log('item')
              }}
            >
              <div className={styles.text}>dfsfsfde</div>
              <div
                className={styles.icon}
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('icon')
                }}
              >
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
            </div>
          ))}
        </div>
      </div>
      <div className={styles.submit}>
        <Button text="Submit" onClick={() => {}} />
      </div>
    </div>
  )
}

export default SelectionCityForm
