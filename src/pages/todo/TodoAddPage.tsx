import TodoAddComponent from "../../components/todo/TodoAddComponent.tsx";
import CheckAuth from "../../components/common/CheckAuth.tsx";

function TodoAddPage() {
    return (
        <div>
            <div>Todo Add Page</div>

            <CheckAuth>
                <TodoAddComponent/>
            </CheckAuth>

        </div>
    );
}

export default TodoAddPage;