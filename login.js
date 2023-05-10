const form = document.querySelector('form');

const storageKey = 'user_data';

function login(regusername, regpassword) {
    const data = JSON.parse(localStorage.getItem(storageKey));
    const user = data.find((user) => user.username === regusername && user.password === regpassword);

    if (user) {
        alert('Login berhasil!');
        window.location.href = "Halaman Utama.html";
    } else {
        alert('Username atau password salah!');
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const regusername = form.username.value;
    const regpassword = form.password.value;

    login(regusername, regpassword);

    form.reset();
});
