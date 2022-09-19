import React, { FC } from 'react'
import SelectionCityForm from '../../components/SelectionCityForm/SelectionCityForm'
import { Card } from '../../components/ui/Card'
import styles from './Welcome.module.sass'

const Welcome: FC = () => {
  return (
    <Card>
      <SelectionCityForm />
    </Card>
  )
}

export default Welcome
