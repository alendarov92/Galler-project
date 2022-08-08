import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext)

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    Gallery
                </Link>
            </h1>
            <nav>
                {user.email && <span>Welcome: {user.email }</span>}
                <Link to="/catalogue">Catalogue</Link>
                {user.email
                    ? <div id="user">
                        <Link to="/create">Create</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }

            </nav>
        </header>
    )
}

export default Header;