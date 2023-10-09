import "./style.css";

const Buttons = ({tasks, hideDone}) => (
    <div className="buttons__tasklistButtons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__tasklistButton">{
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