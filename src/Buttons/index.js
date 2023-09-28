import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="tasklistButtons">
        {tasks.length > 0 && (
            <>
                <button className="tasklistButton hideDoneTasksButton">{
                    hideDoneTasks ? "Odkryj ukończone" : "Ukryj ukończone"}
                </button>
    
                <button 
                    className="tasklistButton markAllDoneTasksButton"
                    disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                </button>
            </>
        )}
    </div>
) 

export default Buttons