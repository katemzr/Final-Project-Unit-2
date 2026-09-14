import Animation from "./Animation";


const Header = () => {
    return (
        <header className="title-bar">
            <img src="/logo.png" alt="orange puzzle piece logo" className="header-logo" />
            <div id="lastpiece">
                The Last Piece
            </div>
            <Animation/>
            {/*<img src="/logo.png" alt="orange puzzle piece logo" className="header-logo" /> */}
        </header>
    )
}
export default Header;