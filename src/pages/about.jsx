import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={container}>
        <h1 className={heading}>About</h1>
        <p className={paragraph}>
          Some Nasty About Text
        </p>
      </div>
    </Layout>
  )
}
