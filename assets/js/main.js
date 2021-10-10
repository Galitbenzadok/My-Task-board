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
    const deleteDiv = document.createElement('div')    
    let task
    let deleteBut

    for (let i in tasks){
        task = creatTask(tasks[i])  
        deleteDiv.innerHTML = "<button class='deleteBut' onclick = 'ShowOrHideDeleteBut()'>X</button>"
        // deleteDiv.click = ShowOrHideDeleteBut()
    }
    taskContentDiv.appendChild(task)
    taskContentDiv.appendChild(deleteDiv)
    taskContentDiv.classList.add('card')
    return taskContentDiv
}

// function ShowOrHideDeleteBut(){
//     const butDel = document.querySelector('.deleteBut')
//     butDel.classList.add('hidden')    
// }

function randerTasks(){
    const div = document.querySelector('.cards')    
    const cards  = creatCard(tasks)
    div.appendChild(cards)
}

function deleteForm(){
    const form = document.querySelector('form')
    form.reset()
}
