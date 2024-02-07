import Link from "next/link"
import "../styles/header.css"
function Header (props){
    return (
        <div className="header">
            <div className="logo">
                <Link href="/">AS</Link>
            </div>
            <Link className="about" href="https://github.com/SpectralGT">About</Link>
        </div>
    )
}

export default Header