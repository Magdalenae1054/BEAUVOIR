document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('txtLogIn').value;
    var password = document.getElementById('txtPassword').value;

    if (username && password) {
        var storedUsers = JSON.parse(localStorage.getItem('usersData')) || [];
        
        var validUser = storedUsers.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (validUser) {
            localStorage.setItem('loggedInUser', username);
            localStorage.setItem('firstName', validUser.firstName); // Dodano - postavljanje imena u localStorage
            localStorage.setItem('lastName', validUser.lastName); // Dodano - postavljanje prezimena u localStorage

            window.location.href = '3d.html';
        } else {
            alert('Neispravno korisničko ime ili lozinka');
        }
    } else {
        alert('Molimo unesite korisničko ime i lozinku.');
    }
});
