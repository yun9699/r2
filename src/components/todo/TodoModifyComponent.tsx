import {useLocation, useNavigate, useParams} from "react-router-dom";
import {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {deleteOne, getOne, putOne} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import {ITodo} from "../../types/todo.ts";
import ResultModal from "../common/ResultModal.tsx";

const initialState:ITodo = {
    mno:0,
    title:'',
    writer:'',
    dueDate:''
}

function TodoModifyComponent() {

    const {mno} = useParams()

    const [todo, setTodo] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const [result, setResult] = useState<string>('')

    const location = useLocation()
    const navigate = useNavigate()
    const queryString = location.search

    const moveToList = () => {
        navigate({pathname:'/todo/list', search:`${queryString}`})
    }

    const moveToRead = () => {
        navigate({pathname:`/todo/read/${mno}`, search:`${queryString}`})
    }


    useEffect(() => {
        const mnoNum = Number(mno)
        setLoading(true)
        getOne(mnoNum).then(result => {
            setTodo(result)
            setLoading(false)
        })
    },[mno])

    const handleClickDelete = () => {

        setLoading(true)
        deleteOne(Number(mno)).then(data => {

            console.log(data.result)
            if(data.result === 'success'){
                setResult(mno +' 삭제되었습니다.')
            }

            setTimeout(() => {
                setLoading(false)
            }, 600)

        })

    }

    const closeCallback = () => {

        const msg:string = result

        setResult('')

        if(msg === mno +' 수정되었습니다.'){
            moveToRead()
        }else {
            moveToList()
        }


    }

    const handleClickModify = () => {

        setLoading(true)
        putOne(todo).then( (modifyResult:ITodo) => {
            console.log(modifyResult)

            setResult(mno +' 수정되었습니다.')

            setTimeout(() => {
                setLoading(false)
            }, 600)

        })
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {

        // @ts-ignore
        todo[e.target.name] = e.target.value

        setTodo({...todo})

    }


    return (
        <div className='flex flex-col space-y-4 w-96 mx-auto'>

            {loading && <LoadingComponent></LoadingComponent>}

            {result && <ResultModal msg={result} callback={closeCallback }></ResultModal>}

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
                onChange={ event => handleChange(event)}

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
                onChange={ event => handleChange(event)}
            />

            <div className='flex justify-center gap-2'>
                <button type="button"
                        className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"

                        onClick={moveToList}
                >LIST
                </button>

                <button type="button"
                        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                        onClick={handleClickModify}
                >MODIFY
                </button>

                <button type="button"
                        className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                        onClick={handleClickDelete}
                >DELETE
                </button>

            </div>

        </div>
    );


}

export default TodoModifyComponent;