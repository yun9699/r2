import BasicLayout from "../layouts/BasicLayout.tsx";

import {useCallback} from "react";
import useCount from "../hooks/useCount.ts";

function MainPage() {

    const {countState, inc} = useCount()

    const handleClick = useCallback(() => {
        inc()
    },[])

    return (
        <BasicLayout>

            <div className='text-7xl underline'>Main Page {countState.num}</div>

            <button onClick={handleClick}>CLICK</button>

        </BasicLayout>
    );
}

export default MainPage;