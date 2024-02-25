import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <header className="bg-gray-800 md:sticky top-z z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
            <div className="title-font font-medium text-white hover:text-gray-300 mb-4 md:mb-0 ">
                <Link to="/" className="ml-3 text-xl">
                    Andrew Hansen
                </Link>
            </div>

            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap gap-4 items-stretch text-base justify-between">
                <ul className="flex">
                    <CustomLink to="/projects" className="mr-5 text-gray-300 hover:text-white">
                        Projects
                        </CustomLink>
                    <CustomLink to="/writing" className="mr-5 text-gray-300 hover:text-white">
                        Writing
                        </CustomLink>
                </ul>
            </nav>
        </div>
    </header>

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

}