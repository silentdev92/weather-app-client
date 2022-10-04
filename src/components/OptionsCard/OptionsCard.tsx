import React, { FC } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { toggleUnits } from '../../store/weather/slice'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import styles from './OptionsCard.module.sass'

const OptionsCard: FC = () => {
  const dispatch = useAppDispatch()

  const changeLocationHandler = () => {}

  const changeUnitsHandler = () => {
    dispatch(toggleUnits())
  }

  return (
    <div className={styles.root}>
      <Card>
        <div className={styles.main}>
          <div className={styles.button}>
            <Button text="Change location" onClick={changeLocationHandler} />
          </div>
          <div className={styles.button}>
            <Button text="Change units" onClick={changeUnitsHandler} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default OptionsCard
