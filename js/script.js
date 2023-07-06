function addTask(){
    //pegando o valor do input (nome da tarefa) 
    const taskName = document.querySelector('#task-name').value;

    // filtrando se o campo está vazio ou não 
    if(taskName){

        //clonar template 
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        // alterar e adicionar título
        newTask.querySelector('.task-title').textContent = taskName;

        // remover as classes desnecessarias
        newTask.classList.remove('template');

        newTask.classList.remove('hide');

        // add tarefa na lista
        const list = document.querySelector('#task-lists');

        list.appendChild(newTask);
        console.log(newTask);

        // remover task
        const removebtn = newTask.querySelector('.trash-btn').addEventListener('click' , function(){
            removeTask(this);
        });

        // add evento de completar tarefa 
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click' , function(){
            completeTask(this);
        })
        // limpar texto 
        document.querySelector('#task-name').value = '';
    }
}

function removeTask(task){
    task.parentNode.remove(true);
}

function completeTask(task){
    // task.parentNode.classList.add('complete');
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('complete')
}
const addBtn = document.querySelector('#btn');

addBtn.addEventListener('click' , function(e){
    e.preventDefault();

    addTask();
})