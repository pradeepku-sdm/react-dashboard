import { Link } from "react-router-dom"
export const Homepage = () => {
    return <div>
        <h1>Home Page</h1>
        <button className="btn btn-main">
            <Link to='/dashboard'>Dashboard</Link>
        </button>
        <button className="btn btn-main">
            <Link to='/login'>Login</Link>
        </button>
        <button className="btn btn-main">
            <Link to='/signup'>Signup</Link>
        </button>
    </div>
}