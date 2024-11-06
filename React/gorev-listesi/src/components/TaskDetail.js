import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { Alert, Input, ListGroup, ListGroupItem, Button } from "reactstrap";
import alertify from "alertifyjs";

function TaskDetail(){
    const {taskId} = useParams();

    const {taskList, setTaskList} = useContext(TaskContext);

    const[ updatedTask, setUpdatedTask] = useState('');

    const task = taskList[taskId];
    const navigate = useNavigate();

    if(!task){
        return <Alert color="danger">Görev Bulunamadı!</Alert>
    }

    const handleUpdateTask = () =>{
        if(updatedTask.trim() === ''){
            alertify.error('Görev adı boş olamaz');
            return;
        }

        const newTaskList = [...taskList];
        newTaskList[taskId] = updatedTask;
        setTaskList(newTaskList);

        alertify.success('Görev Başarıyla Güncellendi!');
        setUpdatedTask('');
    }
    const handleDeleteTask = () =>{
        const newTaskList = taskList.filter((_,index)=>index !== parseInt(taskId));

        setTaskList(newTaskList);
        alertify.success('Görev başarıyla silindi!');

        navigate('/');
    }

    return(
        <div className="container mt-4">
            <h1>Görev Detayı</h1>
            <ListGroup>
                <ListGroupItem><strong>Görev:</strong>{task}</ListGroupItem>
            </ListGroup>
            <div className="mt-4">
                <Input
                type="text"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                placeholder="Görev güncelle"
                className="mb-2"
                ></Input>
                <Button color="primary" onClick={handleUpdateTask} className="me-2">Güncelle</Button>
                <Button color="danger" onClick={handleDeleteTask} className="me-2">Sil</Button>
            </div>
        </div>        
    );
}
export default TaskDetail;