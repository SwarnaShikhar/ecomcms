{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'


import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'
import { Header } from '../../../payload/payload-types'


export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
