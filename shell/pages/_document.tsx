import Document, { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
          <ToastContainer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
