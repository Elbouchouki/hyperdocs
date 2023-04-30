import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import logo from '@site/static/img/elbouchouki_bg.png';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={logo} style={{ width: 280, borderRadius: '50%' }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          This is my hyperdocs as project for english course 2022/2023
        </p>
      </div>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/category/hyperdocs">
          Access my hyperdocs
        </Link>
      </div>
    </header>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}'s hyperdoc`}
      description="Elbouchouki's hyperdoc"
    >
      <Head>
        <meta name="image" property="og:image" content="img/preview.png" />
        <meta
          name="description"
          property="og:description"
          content="Elbouchouki's hyperdoc "
        />
        <meta name="author" content="elbouchouki ahmed" />
        <meta name="author" content="Elbouchouki" />
      </Head>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
