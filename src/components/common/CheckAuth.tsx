import {Navigate} from "react-router-dom";
import useSignin from "../../hooks/useSignin.ts";

function CheckAuth({children}: {children: React.ReactNode}) {

    const {member} = useSignin()

    if(!member) {
        return <Navigate to={'/member/signin'} replace={true}></Navigate>
    }

    return (
        <>
            <div>Check Auth</div>
            {children}
        </>
    );
}

export default CheckAuth;