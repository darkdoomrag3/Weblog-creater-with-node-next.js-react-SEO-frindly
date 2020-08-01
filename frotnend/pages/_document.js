import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    //this code is for server side rendering for all pages in our app we dont want to use every page on server side rederin
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (


            <Html lang="en">
                <Head >


                    <meta charSet="UTF-8" />

                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>


        )
    }
}

export default MyDocument
