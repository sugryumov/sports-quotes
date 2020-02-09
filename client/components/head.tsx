import NextHead from 'next/head';

const defaultDescription = '';
const defaultKeywords = '';

const Head = (props: { title: any; description?: any; keywords?: any }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="shortcut icon" href="/public/favicon.ico" />
  </NextHead>
);

export default Head;
