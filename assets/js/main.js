let tasks = []

function saveTask() {
    const form = document.querySelector('form')
    let task = {}

    const taskContent = form.elements['task'].value
    const dateOfTask = form.elements['date'].value
    const timeOfTask = form.elements['time'].value

    task.taskContent = taskContent
    task.dateOfTask = dateOfTask
    task.timeOfTask = timeOfTask

    tasks.push(task)
    randerTasks(tasks)
}

function creatTask(text){
    const mainDiv = document.createElement('div')
    mainDiv.classList.add ('innerTask')

    const taskContentDiv = document.createElement('div')
    taskContentDiv.innerHTML = text.taskContent
    taskContentDiv.classList.add ('taskText')   
    
    const dateOfTaskDiv = document.createElement('div')
    dateOfTaskDiv.innerHTML = text.dateOfTask
    dateOfTaskDiv.classList.add ('smallerFont')


    const timeOfTaskDiv = document.createElement('div')
    timeOfTaskDiv.innerHTML = text.timeOfTask
    timeOfTaskDiv.classList.add ('smallerFont')

    mainDiv.appendChild(taskContentDiv)
    mainDiv.appendChild(dateOfTaskDiv)
    mainDiv.appendChild(timeOfTaskDiv)

    return mainDiv
}

function creatCard(){
    const taskContentDiv = document.createElement('div')
    let task

    for (let i in tasks){
        task = creatTask(tasks[i])
        console.log(tasks[i])
    }
    taskContentDiv.appendChild(task)
    taskContentDiv.classList.add('card')
    return taskContentDiv
}

function randerTasks(){
    const div = document.querySelector('.cards')    
    const cards  = creatCard(tasks)
    div.appendChild(cards)
}

function deleteForm(){
    const form = document.querySelector('form')
    form.reset()
}
