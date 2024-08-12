const input = document.getElementById('input');
const ul = document.getElementById('ul');

function addTask(){
    if(input.value === ''){
        alert("Введите задачу")
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value= '';
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    saveData();
}

ul.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', ul.innerHTML);
}

function showTask(){
    ul.innerHTML = localStorage.getItem('data');
}
showTask();