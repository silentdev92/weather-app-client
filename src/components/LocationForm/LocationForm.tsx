import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useLazyGetLocationQuery } from '../../store/location/api'
import {
  selectCurrentLocation,
  selectRecentLocations,
} from '../../store/location/selectors'
import { removeRecentLocation } from '../../store/location/slice'
import { LocationData } from '../../store/location/types'
import { Button } from '../ui/Button'
import styles from './LocationForm.module.sass'
import { usePageNavigation } from '../../hooks/usePageNavigation'

interface LocationFormProps {
  onSubmit: (data: LocationData) => void
}

const LocationForm: FC<LocationFormProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>('')
  const debounced = useDebounce(search, 500)

  const [dropdown, setDropdown] = useState<LocationData[]>([])
  const [selected, setSelected] = useState<LocationData | null>(null)

  const dispatch = useAppDispatch()
  const recentLocations = useAppSelector(selectRecentLocations)
  const isRecentLocation = (id: number): boolean => {
    for (const location of recentLocations) {
      if (location.id === id) return true
    }
    return false
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const clickHandler = () => {
    if (!search.length) setDropdown(recentLocations)
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

  const location = useAppSelector(selectCurrentLocation)
  const { navigateToWelcomePage } = usePageNavigation()

  const removeHandler = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation()
    if (location?.id === id) navigateToWelcomePage()
    dispatch(removeRecentLocation(id))
  }

  const submitHandler = () => {
    if (selected) onSubmit(selected)
  }

  const [fetchLocations, { data, isLoading, isFetching }] =
    useLazyGetLocationQuery()

  useEffect(() => {
    if (!search.length) setDropdown(recentLocations)
  }, [search, recentLocations])

  useEffect(() => {
    if (debounced.length > 0 && !selected) {
      fetchLocations({ q: debounced, limit: 5 })
    }
  }, [debounced])

  useEffect(() => {
    setDropdown(data!)
  }, [data])

  return (
    <form className={styles.root} onSubmit={submitHandler}>
      <div className={styles.title}>Select Location</div>
      <div className={styles.select}>
        <input
          type="text"
          value={search}
          onChange={changeHandler}
          onClick={clickHandler}
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
            {dropdown.map((location) => (
              <div
                key={location.id}
                className={styles.item}
                onClick={() => {
                  selectHandler(location)
                }}
              >
                <div className={styles.text}>
                  {location.name}, {location.country.name}
                </div>
                {isRecentLocation(location.id) && (
                  <div
                    className={styles.icon}
                    onClick={(e) => {
                      removeHandler(e, location.id)
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
                )}
              </div>
            ))}
          </div>
        )}
        {(isLoading || isFetching) && (
          <div className={styles.loader}>Loading...</div>
        )}
      </div>
      <div className={styles.submit}>
        <Button text="Confirm" type="submit" disabled={!selected} />
      </div>
    </form>
  )
}

export default LocationForm
