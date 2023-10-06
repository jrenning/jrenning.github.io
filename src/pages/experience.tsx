import React from 'react'
import Skills from '../components/experience/Skills'
import Timeline from '../components/experience/Timeline'
import PageHeader from '../components/shared/PageHeader'

function ExperiencePage() {
  return (
    <div className='dark:bg-dark_background'>
        <PageHeader name="My Experience" />

        <Timeline />
        <PageHeader name="Skills" />
        <Skills />
    </div>
  )
}

export default ExperiencePage