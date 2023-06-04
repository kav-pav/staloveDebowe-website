import type { FC } from 'react';

import styles from './typewriter.module.scss';

export const Typewriter: FC<{}> = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <span
        className={styles.type}
        style={{ '--n': '1035' } as React.CSSProperties}
      >
        {`import { Box, Typography, Paper, Button } from '@mui/material';`}
        <br />
        {`import { Link } from 'react-router-dom';`}
        <br />
        {`import { Helmet } from 'react-helmet';`}
        <br />
        {`import { AppRoute } from 'appSettings/AppRoute';`}
        <br />
        {`import * as styles from './Home.styles';`}
        <br />
        {`import type { HomeProps } from './Home.types';`}
        <br />
        <br />
        {`export const Home = ({ title }: HomeProps) => {`}
        <br />
        &nbsp; return (
        <br />
        &nbsp;&nbsp;{`<>`}
        <br />
        &nbsp;&nbsp;&nbsp;
        {`<Helmet>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`<title>{title}</title>`}
        <br />
        &nbsp;&nbsp;&nbsp;
        {`</Helmet>`}
        <br />
        &nbsp;&nbsp;&nbsp;
        {`<Box sx={styles.layout}>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`<Paper sx={styles.container}>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Typography variant="h1">Welcome on my website</Typography>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Box sx={styles.buttonsContainer}>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Button`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`component={Link}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`to={AppRoute.myProjects}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`variant="contained"`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`size="large"`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` Scroll down`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`<Typography variant="h4">Have a good day!</Typography>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Box>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{` </Paper>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`</Box>`}
        <br />
        &nbsp;&nbsp;&nbsp;{`</>`}
        <br />
        &nbsp;&nbsp; );
        <br />
        &#09;&nbsp;
        {`};`}
      </span>
    </div>
  );
};
