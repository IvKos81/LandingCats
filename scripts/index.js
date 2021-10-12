/*Прокрутка наверх*/

let totopButton = document.querySelector('.button_totop');

totopButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

/*Сортировка*/

let catalogueList = document.querySelector('.catalogue_list');
let cards = document.querySelectorAll('.card');
let sortPrice = document.querySelector('.sortprice')
let sortAge = document.querySelector('.sortage')

let sortByPrice = () => {
            let sorted = [...cards].sort((a,b)=>{
                return a.querySelector('.card_price').getAttribute('value') - b.querySelector('.card_price').getAttribute('value')
            })

            catalogueList.innerHTML = '';

            for (cards of sorted) {
            catalogueList.appendChild(cards)
        }
} 

let sortByAge = () => {
            let sorted = [...cards].sort((a,b)=>{
                return a.querySelector('.text_primary').getAttribute('value') - b.querySelector('.text_primary').getAttribute('value');
            })

            catalogueList.innerHTML = '';

            for (cards of sorted) {
            catalogueList.appendChild(cards);
        }
} 

sortPrice.addEventListener('click',()=>{
    sortByPrice();
})

sortAge.addEventListener('click',()=>{
    sortByAge();
})

/*Всплывающее окно*/

let favourites = document.querySelectorAll('.card_favourite');
console.log(favourites)

for (let i=0; i<favourites.length; i++) {

    favourites[i].addEventListener('click', ()=>{
        if (favourites[i].classList.contains('favouriteyes')) {
            setTimeout("alert('Убрано из избранного')",300)
        } else {
            setTimeout("alert('Добавлено в  избранное')",300)
        }
        favourites[i].classList.toggle("favouriteyes");

    })
}

/*Валидация*/

const validate = (form_id,email) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }

 let buttonSubmit = document.querySelector('.promo_button');
 buttonSubmit.addEventListener('click', ()=>{
     validate('form_id','email');
 })