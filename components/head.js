
import Head from 'next/head'


export default function PageHead ({title, description}){
    return <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" href="/favicon.ico" />

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,700,400italic,700italic|Fira+Sans:400,700,400italic,700italic" rel="stylesheet" />

</Head>
}