
// dropdown 
export const dropBerapaKali = (event, setState) => {
    var val = event.target.value
    var keterangan_tambahan = document.getElementById('keterangan_tambahan')
    setState(val);
    if(val != '' || val != null || val != ""){
        keterangan_tambahan.readOnly = false
    }else{
        keterangan_tambahan.readOnly = true
    }
};

export const dropJenisObat = (event, setState) => {
    let val = event.target.value
    let nama_obat = document.getElementById('nama_obat');
    let komposisi = document.getElementById('komposisi');
    let label_komposisi = document.getElementById('labelKomposisi');
    if(val == 'Racikan'){
        nama_obat.readOnly = true
        nama_obat.value = '';
        nama_obat.placeholder="Silahkan Buat Komposisi Obat" 
        komposisi.hidden = false;
        label_komposisi.hidden = false;
    }else{
        nama_obat.placeholder ="Masukkan Nama Obat"
        nama_obat.readOnly = false
        label_komposisi.hidden = true;
        komposisi.hidden = true;
        komposisi.value = '';
        
    }
};


export const dropWaktuMinum = (event, setState) => {
    setState(event.target.value);
};

export const dropKondisi = (event, setState) => {
    setState(event.target.value);
};

// keyup keterangan tambahan
// export const setKeteranganTambahan = (event, setState) => {
//     let val = event.target.value
//     setState(val);
// };