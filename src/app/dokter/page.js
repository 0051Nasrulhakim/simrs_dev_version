import React from 'react'
import TabelDashDokter from './tabelDashDokter'

export default function Page( {params}) {
  return (
    <div>
       <div>My Post: {params.idPasien}</div>
       <TabelDashDokter/>
    </div>
  )
}
