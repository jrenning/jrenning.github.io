import React from 'react'
import Card from '../components/shared/Card';
import PageHeader from '../components/shared/PageHeader'

function ABoutPage() {
  return (
    <div>
      <PageHeader name="About Me" />
      <Card margin_y={12}>
        <p className="indent-10">
          My name is Jack Renning. I am a student at the University of Iowa
          studying Chemical Engineering with a focus in Data Science. I made
          this portfolio as a showcase of some of my work experience and
          projects.
        </p>
        <p>Some things outside of classes that I am involved in include:</p>
        <li>The American Institute of Chemical Engineers</li>
        <li>
            TA for CBE:2110 Computational Tools for Chemical Engineers
        </li>
        <li>Running Club at the University of Iowa</li>
        <p className='indent-10'>
          Outside school I enjoy running outside, hanging out with friends,
          hiking, cooking, reading, playing with my dog, and fiddling with
          whatever catches my interest.
        </p>
      </Card>
    </div>
  );
}

export default ABoutPage