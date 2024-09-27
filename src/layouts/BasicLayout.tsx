import {Link} from "react-router-dom";
import Depth1Menu from "../components/common/Depth1Menu.tsx";

function BasicLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* 로고 */}
                    <Link to="/" className="text-2xl font-bold text-blue-500">MyLogo</Link>

                    <Depth1Menu />

                    {/* 모바일 메뉴 버튼 */}
                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {/* Content Layout with Aside and Main */}
            <div className="flex flex-1">

                {/* Main Content */}
                <main className="flex-1 bg-white p-8">
                    {children}

                </main>
            </div>


        </>
    );
}

export default BasicLayout;