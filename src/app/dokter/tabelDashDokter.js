"use client"
import React, { useState, useEffect } from 'react'

export default function TabelDashDokter() {
  const [customers, setCustomers] = useState([]);

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
    <div class="overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left text-gray-600 bg-gray-100">
            <th class="px-4 py-2 w-1/12 border-b border-gray-200">ID</th>
            <th class="px-4 py-2 w-1/3 border-b border-gray-200">Name</th>
            <th class="px-4 py-2 w-1/6 border-b border-gray-200">Negara</th>
            <th class="px-4 py-2 w-2/12 border-b border-gray-200">Email</th>
          </tr>
        </thead>
        <tbody class="text-gray-600">
          {
            customers.map((customer, index) => (
              <tr class="hover:bg-gray-200">
                <td class="px-4 py-2 border-b border-gray-200">{index+1}</td>
                <td class="px-4 py-2 border-b border-gray-200">{customer.name}</td>
                <td class="px-4 py-2 border-b border-gray-200">{customer.country.name}</td>
                <td class="px-4 py-2 border-b border-gray-200">{customer.balance}</td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>

  )
}
