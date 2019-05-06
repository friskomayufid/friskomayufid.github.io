// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }: Object) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <span
          className={styles['author__bio-twitter']}
          href='#'
        >
          <strong>{author.name}</strong>
        </span>
      </p>
    </div>
  );
};

export const Author = () => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor data={data} />}
  />
);

export default Author;
