import type { NextPage } from 'next'
import Head from 'next/head'
import CharacterSheet from '../features/character/CharacterSheet'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <CharacterSheet />
  )
}

export default IndexPage
