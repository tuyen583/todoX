import  Task from '../model/Task.js';


export const getAllTasks = async (req, res) => {
    try {
        const tasks =  await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    }   
    catch (error) {     
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
export const createTask = async (req, res) => {   
    try { 
        const { title } = req.body;
        const newTask = new Task({ title });
        await newTask.save();
        res.status(201).json(newTask);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }  
}

export const updateTask = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, // lấy id từ tham số URL
            { title, status, completedAt },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Nhiệm vụ ko tồn tại' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Lỗi khi update nhiệm vụ:", error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const deleteTask = async (req, res) => {       
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Nhiệm vụ ko tồn tại' });
        }
            res.status(200).json({ message: 'Nhiệm vụ đã được xóa thành công' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}