import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/debounce'
import { useLazyGetLocationQuery } from '../../store/location/api'
import { LocationData } from '../../store/location/types'
import { Button } from '../ui/Button'
import styles from './LocationForm.module.sass'

interface LocationFormProps {
  onSubmit: (data: LocationData) => void
}

const LocationForm: FC<LocationFormProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>('')
  const debounced = useDebounce(search, 500)

  const [dropdown, setDropdown] = useState<LocationData[]>([])
  const [selected, setSelected] = useState<LocationData | null>(null)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const selectHandler = (location: LocationData) => {
    setSelected(location)
    setSearch(`${location.name}, ${location.country.name}`)
    setDropdown([])
  }

  const unselectHandler = () => {
    setSelected(null)
    setSearch('')
  }

  const submitHandler = () => {
    if (selected) onSubmit(selected)
  }

  const [fetchLocations, { data, isLoading, isFetching }] =
    useLazyGetLocationQuery()

  useEffect(() => {
    if (!search.length) setDropdown([])
  }, [search])

  useEffect(() => {
    if (debounced.length > 0 && !selected) {
      fetchLocations({ q: debounced, limit: 5 })
    }
  }, [debounced])

  useEffect(() => {
    setDropdown(data!)
  }, [data])

  return (
    <div className={styles.root}>
      <div className={styles.title}>Select Location</div>
      <div className={styles.select}>
        <input
          type="text"
          value={search}
          onChange={changeHandler}
          disabled={!!selected}
        />
        {!!selected && (
          <div className={styles.icon} onClick={unselectHandler}>
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
        )}
        {!isLoading && !isFetching && !!dropdown && !!dropdown.length && (
          <div className={styles.dropdown}>
            {dropdown.map((location, idx) => (
              <div
                key={idx}
                className={styles.item}
                onClick={() => {
                  selectHandler(location)
                }}
              >
                <div className={styles.text}>
                  {location.name}, {location.country.name}
                </div>
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
        )}
        {(isLoading || isFetching) && (
          <div className={styles.loader}>Loading...</div>
        )}
      </div>
      <div className={styles.submit}>
        <Button text="Submit" onClick={submitHandler} disabled={!selected} />
      </div>
    </div>
  )
}

export default LocationForm
