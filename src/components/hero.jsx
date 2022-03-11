import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
    container,
    image,
    text,
  } from "./hero.module.css"

export function Hero() {
    return (
        <div className={container}>
            <div className={text}>Hero</div>
        </div>
        );
}