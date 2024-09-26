import {useDispatch} from "react-redux";
import {useAppSelector} from "./rtk.ts";
import {decrement, increment} from "../slices/countSlice.ts";


const useCounts = () => {
    const dispatch = useDispatch();
    const countState = useAppSelector(state => state.count);

    const inc = () => {
        dispatch(increment(null))
    }

    const dec = () => {
        dispatch(decrement(null))
    }

    return {countState,inc,dec}
}

export default useCounts;