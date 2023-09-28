import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="buttons__tasklistButtons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__tasklistButton">{
                    hideDoneTasks ? "Odkryj ukończone" : "Ukryj ukończone"}
                </button>
    
                <button 
                    className="buttons__tasklistButton"
                    disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                </button>
            </>
        )}
    </div>
) 

export default Buttons