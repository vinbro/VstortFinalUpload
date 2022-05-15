document.querySelector('.submit').addEventListener('click', loadUsers);

function loadUsers() {
    fetch('http://localhost:3000/users').then(respones => respones.json()).then(data => checkUsers(data));
}
function checkUsers(users) {
    users.forEach(user => {
        if (document.querySelector('.eu').value == user.e || document.querySelector('.eu').value == user.u) {
            if (document.querySelector('.p').value == user.p) {
                alert(`Loged in as ${user.u}`)
                localStorage.trustFactor = 'true';
                localStorage.userName = user.u;
                document.location.reload(true)
            }
        }
    });
}
if (localStorage.trustFactor === 'true') {
    document.querySelector('.form').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('.signOut').style.display = 'block';
    document.querySelector('.signOut').style.marginTop = '20%';

}