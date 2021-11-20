// this file has a dynamic routing with an identifier in brackets as a filename
// this file will be rendered at domain.com/news/anything-else

import { useRouter } from "next/router";

const DetailPage = () => {
  // holds details about the path
  const router = useRouter();

  // holds details for the path that is inserted after news/
  router.query.newsId;

  return <h1>The detail page</h1>;
};

export default DetailPage;
