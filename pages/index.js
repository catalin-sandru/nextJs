// this page will be rendered at the / or home page

import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1>the home page</h1>;
      <ul>
        <li>
          {/* using an anchor tag the page will send a request to the server and the page will reload */}
          <a href="/news/nextJs-is-great">NextJS is great</a>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
