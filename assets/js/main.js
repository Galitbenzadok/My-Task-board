let tasks = []

let id = 0

function saveTask() {
    const form = document.querySelector('form')
    let task = {} 
    const taskId = id
    const taskContent = form.elements['task'].value
    const dateOfTask = form.elements['date'].value
    const timeOfTask = form.elements['time'].value

    task.taskContent = taskContent
    task.dateOfTask = dateOfTask
    task.timeOfTask = timeOfTask
    task.taskId = id
    id++

    // tasks = getArrayFromLocalStorage()
    tasks.push(task)
    // const tasksStringify = JSON.stringify(tasks)
    // localStorage.setItem('tasks', tasksStringify)  
    renderTasks()     
}


// function getArrayFromLocalStorage() {
//     const arrayStringify = localStorage.getItem('tasks')
//     let array
//     if (arrayStringify) {
//         array = JSON.parse(arrayStringify)
//     }
//     else {
//         array = []
//     }
//     return array
// }


function creatTask(text){
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('id', text.taskId)
    mainDiv.classList.add ('innerTask')
    const id = text.taskId

    const taskContentDiv = document.createElement('div')
    taskContentDiv.innerHTML = text.taskContent
    taskContentDiv.classList.add ('taskText')   
    mainDiv.appendChild(taskContentDiv)
    
    const dateOfTaskDiv = document.createElement('div')
    dateOfTaskDiv.innerHTML = text.dateOfTask
    dateOfTaskDiv.classList.add ('smallerFont')
    mainDiv.appendChild(dateOfTaskDiv)

    const timeOfTaskDiv = document.createElement('div')
    timeOfTaskDiv.innerHTML = text.timeOfTask
    timeOfTaskDiv.classList.add ('smallerFont')
    mainDiv.appendChild(timeOfTaskDiv)  
    
    const deleteDiv = document.createElement('div') 
    deleteDiv.innerHTML = "<button class='deleteBut hidden' id='but" + id + "' onclick='deleteTask(" + id + ")'>X</button>"
    mainDiv.appendChild(deleteDiv)  

    mainDiv.addEventListener("mouseover", function() {showDeleteBut(id)});
    mainDiv.addEventListener("mouseout", function() {hideDeleteBut(id)});

    return mainDiv
}

function creatCard(){
    const taskContentDiv = document.createElement('div')
    taskContentDiv.classList.add('card')
    const deleteDiv = document.createElement('div') 
    let taskFill
    let butId
   
    for (let i=0; i<tasks.length; i++){
        taskFill = creatTask(tasks[i]) 
        butId = i       
    }

    taskContentDiv.appendChild(taskFill)  
    taskContentDiv.appendChild(deleteDiv)  
    taskContentDiv.setAttribute('id', 'div' + butId)
    return taskContentDiv
}

function deleteTask(numToDelete){   
    const nTasks = tasks.filter(
        function (obj){
            if (obj.taskId != numToDelete){               
                return true
            }
            return false
        }
    )
tasks = nTasks
const deleletCard = document.getElementById('div'+ numToDelete)
deleletCard.remove()
}
  
 
function showDeleteBut(num){
    const but = document.getElementById('but'+ num)
    but.classList.remove('hidden')
}

function hideDeleteBut(num){
    const but = document.getElementById('but'+ num)
    but.classList.add('hidden')
 }

function renderTasks(){
    // tasks = getArrayFromLocalStorage()
    const div = document.querySelector('.cards')    
    const cards  = creatCard(tasks)
    div.appendChild(cards)
}

function deleteForm(){
    const form = document.querySelector('form')
    form.reset()
}

// renderTasks() 





