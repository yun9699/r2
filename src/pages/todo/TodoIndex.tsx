import {Link, Outlet} from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout.tsx";

function TodoIndex() {
    return (
        <BasicLayout>
            <div> Todo Index Page</div>

            <div className='flex items-center gap-3 justify-center border-2 rounded-2xl h-1/6 bg-blue-500'>
                <Link to='/todo/list' className='font-extrabold m-2 p-2 text-white text-2xl '>List</Link>
                <Link to='/todo/add' className='font-extrabold m-2 p-2 text-white text-2xl '>Add</Link>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default TodoIndex;