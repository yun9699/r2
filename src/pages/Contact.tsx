import BasicLayout from "../layouts/BasicLayout.tsx";
import useCounts from "../hooks/useCounts.ts";

function Contact() {

    const {countState, dec} = useCounts()

    return (
        <BasicLayout>

            <h1 onClick={dec}> Contact Page {countState.num}</h1>
        </BasicLayout>
    );
}

export default Contact;