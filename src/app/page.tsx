'use client'

import styles from './page.module.css'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from '../store/store'
import { getResources } from '../store/slices/mainSlice'

export default function Home() {
    const dispatch = useDispatch()
    const { cardDetails } = useSelector((state) => state.cards)

    useEffect(() => {
        dispatch(getResources())
    }, [])
    return <main className={styles.main}>{JSON.stringify(cardDetails)}</main>
}
