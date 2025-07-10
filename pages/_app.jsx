// pages/_app.jsx
import "../styles/App.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UMKM AZAH BUCKET | Produk Kerajinan Bucket Asli Surabaya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="UMKM Azah Bucket menyediakan berbagai bucket custom dan hantaran, kreatif, dan asli Surabaya." />
        <meta name="keywords" content="UMKM Azah Bucket, bucket custom, produk kreatif, bunga, wisuda, Surabaya" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (untuk tampilan saat dibagikan ke media sosial) */}
        <meta property="og:title" content="UMKM Kultura | Produk Kerajinan Bucket Asli Surabaya" />
        <meta property="og:description" content="Produk Estetik, personal, cocok untuk segala momen dan bebas sesuai permintaan, bernilai seni, buatan UMKM Surabaya." />
        <meta property="og:url" content="https://azahbucket.umkmkremsel.shop" />
        <meta property="og:image" content="https://azahbucket.umkmkremsel.shop/azah.png" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/azah.png" type="image/png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
