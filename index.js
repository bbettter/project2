const container = document.querySelector('.container').addEventListener('click', event => {
    if (event.target.classList('textcenter')){
        event.target.style.color = 'red'
    }
})