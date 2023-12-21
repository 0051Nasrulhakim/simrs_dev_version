"use client"
import React, { useState, useEffect } from 'react'

export default function TabelDashDokter() {
  const [customers, setCustomers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const tesclick = (e) => {
    setSelectedIndex(e);
  }
  const handleItemDoubleClick = (index) => {
    // Tambahkan logika atau tindakan yang ingin Anda lakukan saat elemen di-double click
    alert(index)
    console.log(`Melihat detail untuk item dengan indeks: ${index}`);
  };

  useEffect(() => {
    const newCustomer = [
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },

    ]
    setCustomers(newCustomer)
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="text-left text-gray-600 bg-gray-100">
            <th className="px-4 py-2 w-1/12 border-b border-gray-200">ID</th>
            <th className="px-4 py-2 w-1/3 border-b border-gray-200">Name</th>
            <th className="px-4 py-2 w-1/6 border-b border-gray-200">Negara</th>
            <th className="px-4 py-2 w-2/12 border-b border-gray-200">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {
            customers.map((customer, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-200 ${index === selectedIndex ? 'bg-blue-200' : ''}`}
                onClick={() => tesclick(index)}
                onDoubleClick={() => handleItemDoubleClick(index)}
              >
                <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.name}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.country.name}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.balance}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>

  )
}
