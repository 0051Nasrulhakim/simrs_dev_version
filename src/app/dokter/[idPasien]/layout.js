import React from 'react'
import dynamic from 'next/dynamic'
import { DataProvider } from './DataContext'
const SubMenuDokter = dynamic(() => import('./menuDokter'))
const CardIdentitasPasien = dynamic(() => import('./cardIdentitasPasien'))

export default function LayoutDokter({ children }) {
    return (
        <section>
            <CardIdentitasPasien/>
            <SubMenuDokter />
            <DataProvider>
                {children}
            </DataProvider>
        </section>
    )
}
