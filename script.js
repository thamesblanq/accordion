let btns = document.querySelectorAll('#btn');
let questions = document.querySelectorAll('#question');
let answers = document.querySelectorAll('.answer');
/* console.log(answers) */


for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', ()=> {
        answers[i].classList.toggle('show');
        questions[i].classList.toggle('small');
        if(questions[i].classList.contains('small')){
            btns[i].textContent = 'x';
        }else{
            btns[i].textContent = '-';
        }
    })
    
}

    