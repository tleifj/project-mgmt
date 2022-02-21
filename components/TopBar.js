// import { useSession, signOut } from "next-auth/react"
import styled from 'styled-components'
import Link from 'next/link'

const StyledTopbar = styled.section`
    padding: 30px;
    margin-bottom: 30px;
    text-align: right;

`;

const Topbar = () => {
    // const { data: session, status } = useSession()
    return (
        <StyledTopbar>
            {/* {(status === "authenticated") &&
                <p>Signed in as {session.user.email} <button onClick={() => signOut({ redirect: false })}>Sign out</button></p>
            }
            {(status !== "authenticated") &&
                <p><Link href="/signup">
                <a >Log in or Sign Up</a>
              </Link></p>
            } */}
            <Link href="/">
                <a >Account</a>
            </Link>
        </StyledTopbar>
    )
}

export default Topbar;