import Link from "next/link"
import { ReactNode } from 'react'


const AboutLayout = ({ children }: {children: ReactNode}) => {

    return <div>
        <h2>About Layout</h2>
        <ul>
            <li>
                <Link href={'/about/contact'}>Contact</Link>
            </li>
            <li>
                <Link href={'/about/team'}>Team</Link>
            </li>
        </ul>
        {children}
    </div>

}

export default AboutLayout