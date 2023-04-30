import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  path: string;
  blankTarget: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Portfolio",
    path: "/docs/hyperdocs/portfolio",
    blankTarget: "_parent"
  },
  {
    title: "Resume",
    path: "/docs/hyperdocs/resume",
    blankTarget: "_parent"
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/elbouchouki-ahmed/",
    blankTarget: "_blank"
  },
  {
    title: "Cover Letter",
    path: "http://localhost:3000/docs/category/cover-letter",
    blankTarget: "_parent"
  },

  {
    title: "GEIW evaluation",
    path: "/docs/hyperdocs/geiw-evaluation",
    blankTarget: "_parent"
  },
  {
    title: "DH2 evaluation",
    path: "/docs/hyperdocs/dh2-evaluation",
    blankTarget: "_parent"
  },
  {
    title: "Course evaluation",
    path: "/docs/hyperdocs/course-evaluation",
    blankTarget: "_parent"
  },
];

function Feature({ title, path, blankTarget }: FeatureItem) {
  return (
    <div className={styles.child}>
      <a href={path} className={styles.btn} target={blankTarget}>
        {title}
      </a>
    </div>
  );
}




export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {
          FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))
        }
      </div>
    </section >
  );
}

