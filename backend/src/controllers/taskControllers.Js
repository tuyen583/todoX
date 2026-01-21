export const getAllTasks = (req, res) => {
  res.send('Get all tasks');
}
export const createTask = (req, res) => {   
    res.send('Create a new task');      
}

export const updateTask = (req, res) => {
    res.send(`Update task with ID ${req.params.id}`);  
}

export const deleteTask = (req, res) => {       
    res.send(`Delete task with ID ${req.params.id}`);
}