import React from 'react'
import dynamic from 'next/dynamic'
import { DataProvider } from './DataContext'
const ServerComponent = dynamic(() => import('./menuDokter'))

export default function LayoutDokter({ children }) {
    return (
        <section>
            <ServerComponent />
            <DataProvider>
                {children}
            </DataProvider>
        </section>
    )
}
