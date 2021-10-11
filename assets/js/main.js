
let tasks = getArrayFromLocalStorage()
console.log(tasks)
let id = localStorage.getItem('id')
id = Math.floor(id)
renderTasks() 

// function clearLocalStorage(tasks) {    
//    localStorage.clear()
// }
// clearLocalStorage(tasks)

function checkId(){    
    if (id === ''){
        id = 0
    }
    else {
        id = id + 1       
    }
    return id
}

function saveTask() {  
    let id = checkId()    
    const form = document.querySelector('form')
    const divMess = document.querySelector('.messageToUser')
    const message = document.createElement('div')
    divMess.innerHTML = ''
    divMess.appendChild(message)
    
    const cheakForm = ifEmpty()
    
    if (cheakForm){      
        
        message.innerHTML = ''    
        divMess.appendChild(message)
        let task = {} 
        const taskId = id
        const taskContent = form.elements['task'].value
        const dateOfTask = form.elements['date'].value
        const timeOfTask = form.elements['time'].value

        task.taskContent = taskContent
        task.dateOfTask = dateOfTask
        task.timeOfTask = timeOfTask
        task.taskId = id
       
        
        tasks.push(task)
        renderTasks()  
        saveToStorage()                    
    }
    else {
            message.innerHTML = "Please fill all the details." 
            divMess.appendChild(message)           
    }   
  
}


function saveToStorage(){
        const tasksStringify = JSON.stringify(tasks)      
        localStorage.setItem('tasks', tasksStringify) 
        localStorage.setItem('id', id) 
}  


function ifEmpty(){
    const form = document.querySelector('form')
    if (
        form.elements['task'].value != '' &&
        form.elements['date'].value != '' &&
        form.elements['time'].value != ''){
            return true
        }
        return false   
}


function getArrayFromLocalStorage() {
    const arrayStringify = localStorage.getItem('tasks')
    let array
    if (arrayStringify) {        
        array = JSON.parse(arrayStringify)
    }
    else {
        array = []
    }
    return array
}


function creatTask(text){
    const mainDiv = document.createElement('div')
    mainDiv.classList.add ('innerTask')
    const containerDiv = document.createElement('div')
    containerDiv.classList.add ('card')
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
    

    containerDiv.appendChild(mainDiv)
    taskContentDiv.setAttribute('id', 'div' + id)

    containerDiv.addEventListener("mouseover", function() {showDeleteBut(id)});
    containerDiv.addEventListener("mouseout", function() {hideDeleteBut(id)});

    return containerDiv
}

function creatCards(){
    const taskContentDiv = document.createElement('div')
    let taskFill  
    
    for (let i=0; i<tasks.length; i++){
        taskFill = creatTask(tasks[i])            
        taskContentDiv.appendChild(taskFill)       
    }                 

    return taskContentDiv
}

function deleteTask(numToDelete){   

    const deleletCard = document.getElementById('div'+ numToDelete)
    deleletCard.remove()
    
    const nTasks = tasks.filter(
        function (obj){
            if (obj.taskId != numToDelete){               
                return true
            }
            return false
        }
    )
tasks = nTasks
saveToStorage()
renderTasks()
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
    const div = document.querySelector('.cards')   
    div.innerHTML = '' 
    const cards  = creatCards(tasks)
    div.appendChild(cards)
}

function deleteForm(){
    const form = document.querySelector('form')
    form.reset()
}







