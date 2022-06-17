import logo from "../static/logo.png";

function Header(){
    return (
        <div>
            <header className="header">
                <img src={logo} className='logo' />
            </header>
        </div>
    );
}

export default Header;