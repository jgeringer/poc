import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { responsiveImageSizes } from "gatsby-plugin-image/dist/src/image-utils";

const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = React.useState({});
  const [dataNetlify, setDataNetlify] = React.useState({});

  // fetch api/blackhawk and alert the response on click
  const clickHandler = async () => {
    try {
      const response = await fetch("/api/blackhawk/blackhawk");
      const data = await response.json();
      setData(data);
    } catch (e) {
      alert(e);
    }
  };

  const clickHandlerNetlifyFunction = async () => {
    // run `ntl dev` to run netlify and see the funcitons working...
    const response = await fetch("/.netlify/functions/hello").then(
      (response) => console.log("response", response)
      // response.json()
    );
    setDataNetlify(response);
  };

  return (
    <main>
      <button onClick={clickHandler}>Click me!!</button>
      <button onClick={clickHandlerNetlifyFunction}>Click me Netlify!!</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(dataNetlify, null, 2)}</pre>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
