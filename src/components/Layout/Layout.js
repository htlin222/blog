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
  const encodedTitle = encodeURIComponent(title.trim()); // 使用 encodeURIComponent 更安全的方式進行編碼
  const metaImageUrl = `https://og-mlkgi530p-htlin222.vercel.app/api/blog?templateTitle=${encodedTitle}`;
  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="林協霆" />
        <meta name="og:description" content={description} />
        <meta property="og:site_name" content="林協霆醫師的個人網站" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:logo" content="https://oncologist.tw/photo.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
