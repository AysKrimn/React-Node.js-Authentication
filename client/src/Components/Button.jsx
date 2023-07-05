import React from 'react'

export default function Button(props) {

  const { butonName } = props

  return (

    <button type='submit'>{butonName}</button>
  )
}
