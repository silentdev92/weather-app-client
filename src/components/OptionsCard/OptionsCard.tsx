import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import {
  addToRecentLocations,
  setCurrentLocation,
} from '../../store/location/slice'
import { LocationData } from '../../store/location/types'
import { toggleUnits } from '../../store/weather/slice'
import { LocationForm } from '../LocationForm'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Modal } from '../ui/Modal'
import styles from './OptionsCard.module.sass'

const OptionsCard: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const changeLocationHandler = (location: LocationData) => {
    dispatch(setCurrentLocation(location))
    dispatch(addToRecentLocations(location))
    setModalIsOpen(false)
  }

  const changeUnitsHandler = () => {
    dispatch(toggleUnits())
  }

  return (
    <div className={styles.root}>
      <Card>
        <div className={styles.main}>
          <div className={styles.button}>
            <Button
              text="Change location"
              onClick={() => setModalIsOpen(true)}
            />
          </div>
          <div className={styles.button}>
            <Button text="Change units" onClick={changeUnitsHandler} />
          </div>
        </div>
      </Card>
      <Modal show={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <LocationForm onSubmit={changeLocationHandler} />
      </Modal>
    </div>
  )
}

export default OptionsCard
