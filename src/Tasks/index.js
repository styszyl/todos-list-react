import "./style.css"

const Tasks = ({tasks, hideDone}) => (
    <div className="taskList">
        <ul className="taskList__ul">
            {tasks.map(task => (
                <li key={task.id} className={`taskList__item ${task.done & hideDone ? "hidden" : " "}`}>
                    <button className={`taskList__checkbox taskList__checkbox--green 
                    ${task.done ? " taskList__checkbox--greenDone" : " "}`}>✔</button>
                    <div className={`taskList__content ${task.done ? " taskList__content--done" : " "}`}>{task.content}</div>
                    <button className=" taskList__checkbox taskList__checkbox--deleteButton">🗑</button>
                </li>
            ))}
        </ul>
    </div>
)

export default Tasks;