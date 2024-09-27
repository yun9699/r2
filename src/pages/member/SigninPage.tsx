import BasicLayout from "../../layouts/BasicLayout.tsx";
import SigninComponent from "../../components/member/SigninComponent.tsx";

function SigninPage() {
    return (
        <BasicLayout>
            <div>Signin Page</div>
            <div className='w-1/2 justify-center h-full'>
                <SigninComponent></SigninComponent>
            </div>

        </BasicLayout>
    );
}

export default SigninPage;