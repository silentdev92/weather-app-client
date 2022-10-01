import React, { FC } from 'react'
import { LocationForm } from '../../components/LocationForm'
import { Card } from '../../components/ui/Card'
import styles from './Welcome.module.sass'

const Welcome: FC = () => {
  return (
    <Card>
      <LocationForm onSubmit={(loc) => console.log(loc)} />
    </Card>
  )
}

export default Welcome
