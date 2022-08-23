import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { UserDto, useUserApi } from "../../hooks/api/user.api"
import styles from '../../styles/Home.module.css'

const Chat: NextPage = () => {

    const { id } = useRouter().query

    const { byId } = useUserApi();

    const [user, setUser] = useState<UserDto>();

    const fetchUser = async () => {
        const _id = Number(id);
        const _user = await byId(_id)
        setUser(_user)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Chat App</title>
                <meta name="description" content="chat app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {user?.name}
                </h1>

                <p className={styles.description}>
                    login {' '}
                </p>

            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Chat
