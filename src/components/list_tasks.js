import { useDispatch, useSelector } from 'react-redux'
import { del } from '../List/task';

function ListTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list); 

    const delTask = (key) => {
        dispatch(del(key));
    }

    return (
        <>
        <div className="list-tasks">
            <h3 className="mb-5">List of tasks:</h3>
            {
                tasks.map(function(task, idx){
                    return (
                        <div className="task" key={idx}>
                            <p>{task}</p>
                            <button onClick={() => delTask(task)}>X</button>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export default ListTasks;