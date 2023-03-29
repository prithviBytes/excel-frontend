import Head from 'next/head'
import dynamic from 'next/dynamic'

const Table = dynamic(() => import("@/Components/Table"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Excel</title>
        <meta name="description" content="Manage your spreadsheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Table />
      </main>
    </>
  )
}
