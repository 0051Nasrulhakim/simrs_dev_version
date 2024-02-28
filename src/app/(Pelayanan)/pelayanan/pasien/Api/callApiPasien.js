const callApi = async () => {

    const response = await fetch('http://localhost:300/api/pasien/findAll', {
        method: 'POST', // Atau method yang sesuai
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // nomor_rm: 2147483647,
            userKey: "nasrulrahasia"
        })
    });

    const status = await response.status
    if (status !== 200) {

        return status

    } else {
        const data = await response.json();
        return await data;
    }

}

const findByRm = async (nomorRm) => {
    const response = await fetch('http://localhost:300/api/pasien/findRm', {
        method: 'POST', // Atau method yang sesuai
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomor_rm: parseInt(nomorRm),
            userKey: "nasrulrahasia"
        })
    });

    const status = await response.status
    if (status !== 200) {

        return status;

    } else {
        const data = await response.json();
        return await data;
    }
}

const findByBpjs = async (nomorBpjs) => {

    const response = await fetch('http://localhost:300/api/pasien/findBpjs', {
        method: 'POST', // Atau method yang sesuai
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomor_bpjs: parseInt(nomorBpjs),
            userKey: "nasrulrahasia"
        })
    });

    const status = await response.status
    if (status !== 200) {

        return status;

    } else {
        const data = await response.json();
        return await data;
    }

}

export {
    callApi,
    findByRm,
    findByBpjs
}
