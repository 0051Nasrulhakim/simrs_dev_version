const callLogin = (username, password, selectedRole) => {
    // Lakukan sesuatu dengan selectedRole dan username, misalnya kirimkan ke server untuk proses login
    console.log('Logging in with role:', selectedRole);
    console.log('Username:', username);

    // Contoh: Kirimkan data login ke server
    fetch('http://localhost:300/api/pegawai/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jabatan: selectedRole,
            username: username,
            password: password
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Tangani respons dari server, misalnya periksa apakah login berhasil
            console.log('Login response:', data);
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
};

export default callLogin;
