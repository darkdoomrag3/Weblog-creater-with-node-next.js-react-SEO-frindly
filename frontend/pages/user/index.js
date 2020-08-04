import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';


const userIndex = () => {
    return (
        <Layout>

            <Private>
                <h2>User dashboard</h2>
            </Private>
        </Layout>
    );
};

export default userIndex;
