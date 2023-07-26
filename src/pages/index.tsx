import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { responsiveImageSizes } from "gatsby-plugin-image/dist/src/image-utils"



const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = React.useState({})


  // fetch api/blackhawk and alert the response on click
  const clickHandler = async () => {
    try{
      const response = await fetch("/api/blackhawk?this-is-a-test=1")
      const data = await response.json()
      setData(data)
    } catch (e) {
      alert(e)
    }
    }

  return (
    <main>
      <button onClick={clickHandler}>Click me!</button>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
