const form = document.querySelector('form');

const storageKey = 'user_data';

function storeData(username, password, email, accountType) {
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    data.push({ username, password, email, accountType });
    localStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = form.regusername.value;
    const password = form.regpassword.value;
    const email = form.regemail.value;
    const accountType = form.accountType.value;

    storeData(username, password, email, accountType);

    alert('Registrasi berhasil!');

    form.reset();
});
