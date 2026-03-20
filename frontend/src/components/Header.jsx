import logo from '../assets/images.png';
import banner from '../assets/banner.png'
function Header() {
    return (
    <>
    <header>
    <img src={logo} width={100} height={100} />
    <img src={banner} width={400} />
    <button>Sign in</button>
    <button>Create an amazon account</button>
    </header>
    </>
    )
}

export default Header;