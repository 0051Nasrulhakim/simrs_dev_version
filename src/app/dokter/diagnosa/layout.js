import React from 'react';
import dynamic from 'next/dynamic';
const MenuDiagnosa = dynamic(() => import('./menuDiagnosa'))

export default function DiagnosaLayout({ children }) {

    return (
        <section>
            <div className='border mt-[-0.8%] border-t-1 border-sky-900'>
                <div className='ml-4 mr-4 mb-2'>
                    <MenuDiagnosa/>
                    <div className='border p-2 border-gray-700 mb-10 rounded-tl-md rounded-tr-md'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
