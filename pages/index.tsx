import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { TokenContext, TokenProvider } from '../components/tokenContext'
import { useUserApi } from '../hooks/api/user.api'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserApi()
  const { push } = useRouter()


  const {
    token,
    setToken
  } = useContext(TokenContext)

  useEffect(() => {
    if(token)
      push("/select")
  }, [])

  const handleLogin = async () => {
    const { token:_token } = await login({
      name,
      password
    })
    setToken(`Bearer ${_token}`)
    push("/select")
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    handleLogin()
  }

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
          login {' '}
        </p>


        <form className={styles.stack} onSubmit={handleSubmit}>
          <p>
            name
          </p>
          <input value={name} onChange={event => setName(event.target.value)}/>
          <p>
            password
          </p>
          <input value={password} onChange={event => setPassword(event.target.value)} />
          <button>
            login
          </button>
          <Link href={"/create"}>
            create acount
          </Link>
        </form>
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

export default Home
