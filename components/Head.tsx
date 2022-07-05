import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="My name is Son Pham. Welcome to my portfolio."
      />
      <meta
        name="keywords"
        content="son pham, nextjs, portfolio, vscode"
      />
      <meta property="og:title" content="Son Pham's Portfolio" />
      <meta
        property="og:description"
        content="A front-end developer."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Son Pham',
};
