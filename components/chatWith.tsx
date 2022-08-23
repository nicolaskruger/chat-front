import Link from "next/link";
import { FC } from "react";
import styles from '../styles/Home.module.css'


type User = {
    name: string,
    id: number
}

const ChatWith: FC<User> = ({name, id}) => {
    return (
        <a href={`/chat/${id}` }className={styles.card}>
            <h2>{name}</h2>
            <p>talk some shit with some friend</p>
        </a>
    )
}

export {
    ChatWith
}