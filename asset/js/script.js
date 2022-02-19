document.querySelector('.bar').addEventListener('click', function (e) {
    e.preventDefault();

    let spans = document.querySelectorAll('.bar span');

    if (document.querySelector(".bar").classList.contains("off")){
        for (let i = 0; i < spans.length; i++) {
            setTimeout(() => {  spans[i].classList.toggle('white-bar');}, 400);
        }
    }else{
        for (let i = 0; i < spans.length; i++) {
            spans[i].classList.toggle('white-bar');
        }
    }


    if (document.querySelector(".nav-panel").classList.contains("active")){
        setTimeout(() => {  document.querySelector(".nav-panel").classList.toggle('ending-flex');}, 330);
    }else{
        document.querySelector(".nav-panel").classList.toggle('ending-flex');
    }
    document.querySelector('.nav-panel').classList.toggle('active');
    document.querySelector('.bar').classList.toggle('off');
});