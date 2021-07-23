import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>Process Urges/Feelings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Process
        </h1>

        <div className="flex m-6">
          <Link href="/urges">
            <a
              className="p-6 m-2 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Urges</h3>
            </a>
          </Link>
          <Link href="/feelings">
            <a
              className="p-6 m-2 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold text-center">Feelings</h3>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
