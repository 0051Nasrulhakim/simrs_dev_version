"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import FontAwesomeIcon from '../../fontawesome';
import { faClockRotateLeft, faUserDoctor, faFlaskVial, faStethoscope, faSuitcaseMedical, faPills, faNotesMedical, faHouseMedicalFlag, faReceipt } from '@fortawesome/free-solid-svg-icons';

export default function MenuDokter() {
  const [activeMenu, setActiveMenu] = useState('');
  const pathname = usePathname();
  const params = useParams();
  const path1 = 'dokter'

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  useEffect(() => {

    // Update activeMenu based on the current route
    console.log(params.idPasien)
    switch (pathname) {
      case `/${path1}/${params.idPasien}/riwayat`:
        setActiveMenu('nav-riwayat');
        break;
      case `/${path1}/${params.idPasien}/assesment/dokter`:
        setActiveMenu('nav-assesment');
        break;
      case `/${path1}/${params.idPasien}/assesment/perawat`:
        setActiveMenu('nav-assesment');
        break;
      case `/${path1}/${params.idPasien}/penunjang`:
        setActiveMenu('nav-penunjang');
        break;
      case `/${path1}/${params.idPasien}/diagnosa/diagnosa`:
        setActiveMenu('nav-diagnosa');
        break;
      case `/${path1}/${params.idPasien}/diagnosa/prosedur`:
        setActiveMenu('nav-diagnosa');
        break;
      case `/${path1}/${params.idPasien}/tindakan`:
        setActiveMenu('nav-tindakan');
        break;
      case `/${path1}/${params.idPasien}/resep`:
        setActiveMenu('nav-resep');
        break;
      case `/${path1}/${params.idPasien}/perencanaan`:
        setActiveMenu('nav-perencanaan');
        break;
      case `/${path1}/${params.idPasien}/soap`:
        setActiveMenu('nav-soap');
        break;
      case `/${path1}/${params.idPasien}/selesai`:
        setActiveMenu('nav-selesai');
        break;
      default:
        setActiveMenu('nav-riwayat');
    }
  }, [params.idPasien, pathname]);

  return (
    <div>
      <div className='flex flex-row bg-sky-900 mt-2 text-white'>
        <Link
          href="/dokter/[idPasien]/riwayat" as={`/dokter/${params.idPasien}/riwayat`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-riwayat' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-riwayat'
          onClick={() => handleMenuClick('nav-riwayat')}
        >
          <FontAwesomeIcon icon={faClockRotateLeft} className='mr-1' />
          Riwayat
        </Link>
        <Link
          href="/dokter/[idPasien]/assesment/dokter" as={`/dokter/${params.idPasien}/assesment/dokter`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-assesment' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-assesment'
          onClick={() => handleMenuClick('nav-assesment')}
        >
          <FontAwesomeIcon icon={faUserDoctor} className='mr-1' />
          Assesment
        </Link>
        <Link
          href="/dokter/[idPasien]/penunjang" as={`/dokter/${params.idPasien}/penunjang`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-penunjang' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-penunjang'
          onClick={() => handleMenuClick('nav-penunjang')}
        >
          <FontAwesomeIcon icon={faFlaskVial} className='mr-1' />
          Penunjang
        </Link>
        <Link
          href="/dokter/[idPasien]/diagnosa/diagnosa" as={`/dokter/${params.idPasien}/diagnosa/diagnosa`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-diagnosa' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-diagnosa'
          onClick={() => handleMenuClick('nav-diagnosa')}
        >
          <FontAwesomeIcon icon={faStethoscope} className='mr-1' />
          Diagnosa & Prosedur
        </Link>
        <Link
          href="/dokter/[idPasien]/tindakan" as={`/dokter/${params.idPasien}/tindakan`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-tindakan' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-tindakan'
          onClick={() => handleMenuClick('nav-tindakan')}
        >
          <FontAwesomeIcon icon={faSuitcaseMedical} className='mr-1' />
          Tindakan
        </Link>
        <Link
          href="/dokter/[idPasien]/resep" as={`/dokter/${params.idPasien}/resep`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-resep' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-resep'
          onClick={() => handleMenuClick('nav-resep')}
        >
          <FontAwesomeIcon icon={faPills} className='mr-1' />
          Resep
        </Link>
        <Link
          href="/dokter/[idPasien]/perencanaan" as={`/dokter/${params.idPasien}/perencanaan`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-perencanaan' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-perencanaan'
          onClick={() => handleMenuClick('nav-perencanaan')}
        >
          <FontAwesomeIcon icon={faHouseMedicalFlag} className='mr-1' />
          Perencanaan
        </Link>
        <Link
          href="/dokter/[idPasien]/soap" as={`/dokter/${params.idPasien}/soap`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-soap' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-soap'
          onClick={() => handleMenuClick('nav-soap')}
        >
          <FontAwesomeIcon icon={faNotesMedical} className='mr-1' />
          SOAP
        </Link>
        <Link
          href="/dokter/[idPasien]/selesai" as={`/dokter/${params.idPasien}/selesai`}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-selesai' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-selesai'
          onClick={() => handleMenuClick('nav-selesai')}
        >
          <FontAwesomeIcon icon={faReceipt} className='mr-1' />
          Selesai
        </Link>
      </div>
    </div>
  );
}
