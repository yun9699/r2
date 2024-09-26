import LoadingPage from "../pages/LoadingPage.tsx";
import {lazy, Suspense} from "react";


const Loading = <LoadingPage></LoadingPage>
const ProductIndex = lazy(() => import("../pages/product/ProductIndexPage"))
const ProductAdd = lazy(() => import("../pages/product/ProductAddPage"))

const productRouter = {
    path: '/product',
    element: <Suspense fallback={Loading}><ProductIndex/></Suspense>,
    children: [
        {
            path: "add",
            element: <Suspense fallback={Loading}><ProductAdd/></Suspense>,
        }
    ]

}

export default productRouter