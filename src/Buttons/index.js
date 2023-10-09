import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone}) => (
    <div className="buttons__tasklistButtons">
        {tasks.length > 0 && (
            <>
                <button onClick = {toggleHideDone} className="buttons__tasklistButton">{
                    hideDone ? "Odkryj ukończone" : "Ukryj ukończone"}
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