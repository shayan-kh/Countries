import Head from 'next/head'
import Countries from '../components/Countries'
import useSWR from 'swr'

export default function Home() {
    const {data , error} = useSWR('https://restcountries.eu/rest/v2/all?fields=name;capital')
    if (error) {
        return <p>Failed to load Data</p>
    }
    if (!data) {
        return <p>Loading....</p>
    }
  return (
    <div >
    <Head>Countries</Head>
      <Countries  data={data} />
    </div>
  )
}

