import {lazy, Suspense} from "react";
import LoadingComponent from "../components/common/LoadingComponent.tsx";


const Loading = <LoadingComponent/>
const Signin = lazy(() => import("../pages/member/SigninPage.tsx"))
const Join = lazy(() => import("../pages/member/MemberJoinPage.tsx"))

const memberRouter = {
    path: "/member",
    children: [
        {
            path: "signin",
            element: <Suspense fallback={Loading}><Signin/></Suspense>,
        },
        {
            path: "join",
            element: <Suspense fallback={Loading}><Join/></Suspense>,
        },
    ]
}

export default memberRouter