import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { Alert, ListGroup, ListGroupItem, Button, Input } from "reactstrap";

function TaskList(){

    const{ taskList, addTask} = useContext(TaskContext)
    
    const [newTask, setNewTask] = useState('');

    const[error, setError] = useState('');

    const handleAddTask = () =>{
        if(newTask.trim() === ''){
            setError('Görev adı boş olamaz!');
            return;
        }
        addTask(newTask);

        setNewTask('');
        setError('');
    };

    return(
        <div className="container mt-4">
            <h1 className="mb-4">Görev Listesi</h1>
            {taskList.length === 0 ? (
                <Alert color="warning">Henüz bir görev eklenmedi.</Alert>
            ) : (
            <ListGroup>
               {taskList.map((task, index) =>(
                <ListGroupItem key={index}>{task} - <Link to={`/task/${index}`}>Detaya Git</Link></ListGroupItem>
               ))}
            </ListGroup>
            )}
            <Input
                type="text"
                className="mt-3"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                placeholder="Yeni Görev Ekle"
            />
            <Button color="primary" className="mt-2" onClick={handleAddTask}>Görev Ekle</Button>
            {error && <Alert color="danger" className="mt-2">{error}</Alert>}

        </div>
    );
}

export default TaskList;