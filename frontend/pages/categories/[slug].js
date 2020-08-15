import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card'

const Category = ({ category, blogs }) => {
    return (
        <React.Fragment>
            <Layout>
                <main>
                    <div className="contianer-fluid">

                        <header>
                            <div className="col-md-12 pt-3 ">
                                <h1 className="display-4 font-weight-bold text-center">
                                    {category.name}
                                </h1>

                                {blogs.map((b, i) => {
                                    return <Card key={i} blog={b} />
                                })}


                            </div>

                        </header>

                    </div>


                </main>


            </Layout>

        </React.Fragment>
    )


}


Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return { category: data.category, blogs: data.blogs }
        }


    })


}


export default Category;