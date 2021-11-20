// this page will be rendered at the / or home page

import { Fragment } from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <Fragment>
      <h1>the home page</h1>;
      <ul>
        <li>
          {/* with link the request is not sent and the page will act as a SPA */}
          <Link href="/news/nextJs-is-great">NextJS is great</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
