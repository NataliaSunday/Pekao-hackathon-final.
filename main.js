document.getElementById('saldo-front').addEventListener('click', function(){
    document.getElementById('header-saldo-front').style.display = 'none';
    document.getElementById('header-saldo-back').style.display = 'block';
});

document.getElementById('saldo-back').addEventListener('click', function(){
    document.getElementById('header-saldo-back').style.display = 'none';
    document.getElementById('header-saldo-front').style.display = 'block';
});