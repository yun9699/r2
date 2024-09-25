
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";
import useTodoList from "../../hooks/useTodoList.ts";
import {ITodo} from "../../types/todo.ts";


function TodoListComponent() {

    const {loading, pageResponse, moveToRead} = useTodoList()

    const listLI = pageResponse.content.map( (todo:ITodo) => {

        const {mno,title,writer,dueDate} = todo

        return (
            <li key={mno} onClick={() => moveToRead(mno)}>
                {mno} - {title} - {writer} - {dueDate}
            </li>
        )
    })

    return (
        <div>
            {loading && <LoadingComponent></LoadingComponent>}
            <div>Todo List Component</div>

            <ul>
                {listLI}
            </ul>

            <PageComponent pageResponse={pageResponse}  ></PageComponent>
        </div>
    );
}

export default TodoListComponent;