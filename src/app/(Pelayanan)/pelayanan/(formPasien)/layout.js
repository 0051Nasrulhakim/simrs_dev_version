import React from 'react';

export default function formPasienLayout({ children }) {
    
    return (
        <section className='mt-4'>
            <div className='border mt-2 border-t-1 bg-slate-100 rounded-md'> 
                <div className='ml-4 mr-4 mb-3 mt-7'>
                    <div className='border p-2 border-gray-400 mb-7 rounded-sm bg-white'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
