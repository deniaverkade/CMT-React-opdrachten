import BookList from '../components/BookList'
import Header from '../components/Header'
import Layout from '../Layout'

const  Home = () => {
    return ( <>
    <Header/>
    <Layout>
      
      <BookList/>
    </Layout>
    </> );
}
 
export default Home;