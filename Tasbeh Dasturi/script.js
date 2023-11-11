const input = document.querySelector('input')
const add_number = document.querySelector('.add_number')
const del_number = document.querySelector('.del_number')

add_number.addEventListener('click', () => {
    input.value++
})

del_number.addEventListener('click', () => {
    input.value = 0
})