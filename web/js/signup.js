document.querySelector('.signOut').addEventListener('click', () => {
    localStorage.trustFactor = false;
    document.location.reload(true)
})
if (localStorage.trustFactor === 'true') {
    document.querySelector('form').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('.signOut').style.display = 'block';
    document.querySelector('.signOut').style.marginTop = '20%';

}