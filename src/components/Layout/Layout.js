// @flow strict
import React from "react";
import Helmet from "react-helmet";
import type { Node as ReactNode } from "react";
import { useSiteMetadata } from "../../hooks";
import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string,
};

const Layout = ({ children, title, description, socialImage = "" }: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />

        <meta
          property="og:image"
          content="https://og-mlkgi530p-htlin222.vercel.app/api/blog?templateTitle=${metaImageUrl}"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

<meta
  property="og:image"
  content="https://og-mlkgi530p-htlin222.vercel.app/api/blog?templateTitle=${metaImageUrl}"
/>;
export default Layout;
