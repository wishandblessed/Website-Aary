// Data profil
const profileData = {
    name: "John Due",
    nim: "123456789",
    class: "01SIF009",
    program: "Sistem Informasi",
    address: "Jl. Taman Puring, Tangerang Selatan",
    school: "SMK ADIYASA INFORMASI",
    major: "MULTIMEDIA",
    email: "john.due@gmail.com",
    phone: "0812-1234-5678",
    picture:"c:\Users\Ariyati\OneDrive\Dokumen\Jhondue.jpg",
};


document.getElementById("name").textContent = profileData.name;


document.getElementById("profile-picture").src = c:\Users\Ariyati\OneDrive\Dokumen\Jhondue.jpg;


document.getElementById("info").innerHTML = `
    <ol type='1'>
    <p><li>NIM: ${profileData.nim}</p>
    <p><li>Nama: ${profileData.name}</p>
    <p><li>Kelas: ${profileData.class}</p>
</ol>
    <ul type="circle">
    <p><li>Program Studi:</b> ${profileData.program}</p>
    <p><li>Alamat: ${profileData.address}</p>
    <p><li>Asal Sekolah: ${profileData.school}</p>
</ul>
    <ol type='I'>
    <p><li>Jurusan:</b> ${profileData.major}</p>
    <p><li>Email:</b> ${profileData.email}</p>
    <p><li>Telepon:</b> ${profileData.phone}</p>
</ol>
`;