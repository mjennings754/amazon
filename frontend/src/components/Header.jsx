import logo from '../assets/images.png';
import banner from '../assets/banner.png'
import { Link } from 'react-router';
function Header() {
    return (
    <>
    <header>
    <Link to={"/"}><img src={logo} width={100} height={100} /></Link>
    <img src={banner} width={400} />
    <button>Sign in</button>
    <button>Create an amazon account</button>
    </header>
    </>
    )
}

export default Header;