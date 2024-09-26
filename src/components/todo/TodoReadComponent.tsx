import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ITodo} from "../../types/todo.ts";
import {getOne} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import useCustomMove from "../../hooks/useCustomMove.ts";
import useCustomML from "../../hooks/useCustomML.ts";

const initialState:ITodo = {
    mno:0,
    title:'',
    writer:'',
    dueDate:''
}

function TodoReadComponent() {

    const {mno} = useParams()

    const [todo, setTodo] = useState(initialState)
    const {loading, setLoading} = useCustomML()

    const {moveToModify, moveToList} = useCustomMove(Number(mno))


    useEffect(() => {
        const mnoNum = Number(mno)
        setLoading(true)
        getOne(mnoNum).then(result => {
            setTodo(result)
            setLoading(false)
        })
    },[mno])

    return (
        <div className='flex flex-col space-y-4 w-96 mx-auto'>

            {loading && <LoadingComponent></LoadingComponent>}

            <label className="text-sm font-semibold text-gray-700">MNO</label>
            <input
                type="text"
                name="mno"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                value={todo.mno}
                readOnly={true}
            />

            <label className="text-sm font-semibold text-gray-700">Title</label>
            <input
                type="text"
                name="title"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                value={todo.title}
                readOnly={true}
            />
            <label className="text-sm font-semibold text-gray-700">Writer</label>
            <input
                type="text"
                name="writer"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                value={todo.writer}
                readOnly={true}
            />
            <label className="text-sm font-semibold text-gray-700">DueDate</label>
            <input
                type="date"
                name="dueDate"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                value={todo.dueDate}
                readOnly={true}
            />

            <div className='flex justify-center gap-2'>
                <button type="button"
                        className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"

                        onClick={moveToList}
                >LIST
                </button>

                <button type="button"
                        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                        onClick={moveToModify}
                >MODIFY
                </button>

            </div>

        </div>
    );
}

export default TodoReadComponent;