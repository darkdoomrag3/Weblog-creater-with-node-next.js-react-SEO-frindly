
import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'



const CategoryTag = () => {
    return (


        <Layout>

            <Admin>


                <div className="col-md-12 pt-5 pb-5">Manage categories and tags</div>
                <div className="row">
                    <div className="col-md-4">
                        <p>Categories</p>
                    </div>
                    <div className="col-md-8">
                        <p>Tags</p>
                    </div>


                </div>


            </Admin>
        </Layout>

    )
}

export default CategoryTag