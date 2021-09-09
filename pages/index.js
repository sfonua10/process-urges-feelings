import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Modal } from '../components/urges/modal';

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const milestones = [
    "Urges",
    "Learn & Move on",
    "Coaching",
    "Thoughtwork",
    "Videos"
  ]
  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>Process Urges/Feelings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showModal && <Modal setShowModal={setShowModal} mainText="Milestones" modalList={milestones} />}
      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Process
        </h1>

        <div className="grid grid-cols-2">
          <Link href="/urges">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Urges</h3>
            </a>
          </Link>
          <Link href="/feelings">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Feelings</h3>
            </a>
          </Link>
          <Link href="/commitment">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Commitments</h3>
            </a>
          </Link>
          <Link href="/thoughtBoard">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Thought Board</h3>
            </a>
          </Link>
          <Link href="/covenants">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Covenants</h3>
            </a>
          </Link>
          <Link href="/templeQuestions">
            <a
              className="p-6 m-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Temple Questions</h3>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
