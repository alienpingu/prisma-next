import Head from 'next/head'
import Link from 'next/link'

// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { PrismaClient } from "@prisma/client";
import { useState } from "react";
// const prisma = new PrismaClient();

export default function Dashboard(props) {
  const [profiles, setProfiles] = useState([
      {
        id: 0,
        title: 'Titolo del questionario',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.',
        factory: 'Azienda 1',
        step: [65, 100]
      },
      { 
        id: 1,
        title: 'Titolo del questionario',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.',
        factory: 'Azienda 1',
        step: [65, 100]
      },
      {
        id: 2,
        title: 'Titolo del questionario',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.',
        factory: 'Azienda 1',
        step: [65, 100]
      },
      {
        id:3,
        title: 'Titolo del questionario',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.',
        factory: 'Azienda 1',
        step: [65, 100]
      },
      {
        id:4,
        title: 'Titolo del questionario',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.',
        factory: 'Azienda 1',
        step: [65, 100]
      },

    ]);
  return (
    <div>
      <Head>
        <title>E2C - Dashboard</title>
        <meta name="description" content="Your profiles" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Easy2Check</a>
        </div>
      </nav>
      <main className="container mt-5 pt-5">
        {
          profiles.map((element, index) => {
            return(<div key={index} className="card m-3">
                    <div className="card-body">
                      <h5 className="card-title">{element.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{element.factory}</h6>
                      <p className="card-text">{element.description}</p>
                      <Link  href={`/profile/${element.id}`}>
                        <a className="card-link">Go to profile</a>
                      </Link>
                    </div>
                  </div>)
          })
        }
      </main>
    </div>
  )
}