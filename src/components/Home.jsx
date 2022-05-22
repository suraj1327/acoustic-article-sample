import React from 'react'
import cms from './../assets/cms.jpg';
import './../styles/home.scss';

export default function Home() {
  return (
    <div>
        <p className='leftParagraph'>A Sample application to demonstrate Content Articles!</p>
        <img src={cms} className="sampleImageClass" alt="Article Home"/>
    </div>
  )
}
