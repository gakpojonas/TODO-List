'Use strict';


function myFunction(){
    if(document.querySelector('#container input').value.length === 0){
        alert('Please Enter a Task')
    }else{
        document.querySelector('#task').innerHTML += `
        <center>
        <div class="tasks">
        <span>${document.querySelector('#container input').value}</span>
        <button class="delete">Remove</button>
        </div>
        </center>
        `
    }


    const deleteField = document.querySelectorAll('.delete');
    for(let  i = 0; i< deleteField.length; i++){
        deleteField[i].onclick = function(){
        this.parentNode.remove();
        }
    }

    document.querySelector('#container input').value = '';

}

