import React from 'react'
import Card from '../components/shared/Card';
import PageHeader from '../components/shared/PageHeader'

function ABoutPage() {
  return (
    <div>
      <PageHeader name="About Me" />
      <Card margin_y={12}>
        <p>
          My name is Jack Renning. I am a student at the University of Iowa
          studying Chemical Engineering with a focus in Data Science. I made
          this portfoilo as a showcase of some of my work experience and
          data-related projects.
        </p>
        Some things outside of classes that I am involved in include:
        <li>The American Institute of Chemical Engineers</li>
        <li>
          Vice President of Eats and Treats Cooking Club at the University of
          Iowa
        </li>
        <li>Running Club at the University of Iowa</li>
        <p>
          {" "}
          Outside school I enjoy running outside, hanging out with friends,
          hiking, cooking, reading, playing with my dog, and fiddling with
          whatever catches my interest.
        </p>
      </Card>
    </div>
  );
}

export default ABoutPage