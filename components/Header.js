import Link from "next/link"

function Header (props){
    return (
        <div className="header">
            <div className="logo">
                <Link href="/">AS</Link>
            </div>
            <Link className="about" href="/">About</Link>
        </div>
    )
}

export default Header