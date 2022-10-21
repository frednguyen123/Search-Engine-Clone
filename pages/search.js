import Head from "next/head";
import Header from "../components/Header";

const Search = () => {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        </div>
    );
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    
    const data = 
}
