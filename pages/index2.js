import Head from 'next/head'
// import Countries from '../components/Countries'
import dynamic from 'next/dynamic'

const Countries = dynamic(
  () => import('../components/Countries'),
  { ssr: false }
)

export default function Home(props) {
  return (
    <div >
    <Head>Countries</Head>
      <Countries  data={props.data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital`)
  const data = await res.json()
  
  
  return {
      props: 
          {data}
      
  }
  }
