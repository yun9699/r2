import BasicLayout from "../layouts/BasicLayout.tsx";
import useCount from "../hooks/useCount.ts";
import CheckAuth from "../components/common/CheckAuth.tsx";

function Contact() {

    const {countState,dec} = useCount()

    return (
        <BasicLayout>
            <CheckAuth>
                <h1 onClick={dec}>Contact Page  {countState.num}</h1>
            </CheckAuth>
        </BasicLayout>
    );
}

export default Contact;