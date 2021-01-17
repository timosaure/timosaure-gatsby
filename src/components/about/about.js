import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Image from "../image"
import SkillItem from "./skill_item"
import OtherSkillItems from "./other_skill_items"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            portrait {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            skills {
              logo {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              description
            }
            other_skills {
              childImageSharp {
                fixed(height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
              publicURL
            }
            sections
          }
        }
      }
    }
  `)

  const sections = data.allDataJson.edges[0].node.sections.map(
    (section, index) => <p key={index}>{section}</p>
  )
  const skills = data.allDataJson.edges[0].node.skills.map((skill, index) => (
    <SkillItem key={index} skill={skill} />
  ))

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <h1 className="title has-text-centered">About</h1>
        <div className="columns portfolio-item-row">
          <div className="column is-6">
            <Image image={data.allDataJson.edges[0].node.portrait} />
          </div>
          <div className="column is-6 content">{sections}</div>
        </div>
        <div className="content">{skills}</div>
        <div className="content">
          <OtherSkillItems
            skills={data.allDataJson.edges[0].node.other_skills}
          />
        </div>
      </div>
    </section>
  )
}

export default About
