import {Link} from 'react-router-dom';
import "./nav.css"
function Nav() {
    return (
        <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link>Topics</Link></li>
            <li><Link>Topics</Link></li>
        </ul>
    )
}
export default Nav