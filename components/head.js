
import Head from 'next/head'


export default function PageHead ({title, description}){
    return <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" href="/favicon.ico" />
</Head>
}