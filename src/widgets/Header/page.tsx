import Link from "next/link"


const Header = () => {
    return (
        <header>
            Header
            <Link href={'/'}>Home</Link>
            <Link href={'/blob'}>Blob</Link>
            <Link href={'/about'}>About</Link>
        </header>
    )
}

export default Header