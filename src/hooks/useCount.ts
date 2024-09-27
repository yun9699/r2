import {useAppDispatch, useAppSelector} from "./rtk.ts";
import {decrement, increment} from "../slices/countSlice.ts";

const useCount = () => {
    const dispatch = useAppDispatch();
    const countState = useAppSelector(state => state.count);

    const inc = () => {
        dispatch(increment(null))
    }

    const dec = () => {
        dispatch(decrement(null))
    }

    return {countState,inc, dec}
}

export default useCount