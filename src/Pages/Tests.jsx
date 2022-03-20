import { useEffect, useContext } from "react"
import React from 'react'
import { Context } from "../Context"
import Select from 'react-select';
import Downshift from 'downshift'

export default function Tests() {
  const items = [
    { name: 'ПИРВА КАФИДРА' },
    { name: 'ВТОРА КАФИДРА' },
    { name: 'ТРЕТЯ КАФИДРА' },
    { name: 'ЧЕТВЭРТА КАФИДРА' },
    { name: 'ПЯТА КАФИДРА' },
  ]



  const { setCurrentPage } = useContext(Context)
  useEffect(() => setCurrentPage('/tests'), [])
  return (
    <div>

      <Downshift
        onChange={selection => alert(`You selected ${selection.name}`)}
        itemToString={item => (item ? item.name : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>

            <input placeholder="Кафедра" className="ApplicationContainer__Input" {...getInputProps()} />
            <ul {...getMenuProps()}>
              {isOpen
                ? items
                  .filter(item => !inputValue || item.name.includes(inputValue))
                  .map((item, index) => (
                    <li className="li"
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          backgroundColor:

                            highlightedIndex === index ? '#bbbfc9' : '#cad5f4',

                          maxWidth: '550px',
                          minHeight: '31px',
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          marginTop: '1px',
                          position: 'absolute',



                          borderRadius: '4px',









                        },
                      })}
                    >
                      {item.name}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )
        }
      </Downshift >



    </div >
  )
}

