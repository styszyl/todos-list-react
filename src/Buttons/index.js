import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="tasklistButtons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="tasklistButton hideDoneTasksButton">{
                    hideDoneTasks ? "Odkryj ukończone" : "Ukryj ukończone"}
                </button>
    
                <button 
                    className="tasklistButton markAllDoneTasksButton"
                    disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
) 

export default Buttons