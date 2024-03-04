const callLogin = async (username, password, selectedRole) => {

    try {
        const response = await fetch('http://localhost:300/api/pegawai/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jabatan: selectedRole,
                username: username,
                password: password
            }),
        });
    
        if (response.ok) {
            // Respons sukses, lanjutkan dengan data respons
            const responseData = await response.json();
            return responseData
            // console.info(responseData)
        } else {
            // Tangkap kesalahan respons
            const errorData = await response.json();
            const data = {
                'status_code': 401,
                'message': errorData.errors
            }
            return data
            // console.error('Gagal melakukan permintaan:', data);
        }
    } catch (error) {
        // Tangkap kesalahan jaringan atau kesalahan lainnya
        console.error('Terjadi kesalahan:', error);
    }

};

export default callLogin;
