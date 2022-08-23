import { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from "react";
import { ChatWith } from '../components/chatWith'
import { UserPage, useUserApi } from "../hooks/api/user.api";
import styles from '../styles/Home.module.css'



const Select: NextPage = () => {

    const [users, setUsers] = useState<UserPage>()

    const { page } = useUserApi();

    const handleUser = async () => {
        const _users = await page({
            page: 0,
            size: 20
        })
        setUsers(_users)
    }

    useEffect(()=>{
        handleUser()
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
                    Chat App
                </h1>

                <p className={styles.description}>
                    chat with your friend {' '}
                </p>

                <div className={styles.grid}>
                    {users?.users.map(user => (
                        <ChatWith id={user.id} name={user.name} key={user.id} />
                    ))}
                </div>
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

export default Select