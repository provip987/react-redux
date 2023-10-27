import { useDispatch } from 'react-redux'
import { add } from '../List/task';
import { useRef } from 'react';

function AddTask() {
    const taskName = useRef()
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(add(taskName.current.value));
    }

    return (
        <>
        <div className="form-add-task">
            <label>Task name:</label>
            <input type="text" placeholder="Input name of task" ref={taskName} />
            <button onClick={addTask}>Add</button>
        </div>
        </>
    );
}

export default AddTask;