import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Image from "../image"
import SkillItem from "./skill_item"
import OtherSkillItems from "./other_skill_items"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Portfolio from "../portfolio/portfolio"

const About = ({ data }) => {
  const { t } = useTranslation()

  const sections = data.sections.map((section, index) => (
    <p key={index}>{section}</p>
  ))
  const skills = data.skills.map((skill, index) => (
    <SkillItem key={index} skill={skill} />
  ))

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <h1 className="title has-text-centered">{t("about")}</h1>
        <div className="columns mb-6">
          <div className="column is-6">
            <Image image={data.portrait} />
          </div>
          <div className="column is-6 content">{sections}</div>
        </div>
        <hr />
        <Portfolio items={data.portfolio} />
        <hr />
        <section className="content mb-6">
          <h2 className="title is-4">{t("skills")}</h2>
          {skills}
        </section>
        <hr />
        <section className="content mb-6">
          <h2 className="title is-4">{t("otherSkills")}.</h2>
          <OtherSkillItems skills={data.other_skills} />
        </section>
      </div>
    </section>
  )
}

export default About
