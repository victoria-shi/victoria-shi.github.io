import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';
import ResumeSection from 'javascripts/components/resume/resumeSection.jsx';
import RoleSection from 'javascripts/components/resume/roleSection.jsx';

import 'css/components/resume.scss';

class ResumePage extends React.Component {
  constructor(props) {
    super(props);
    this.model = {
      roles: [
        {
          title: 'Frontend Engineer',
          company: 'HealthTap',
          dates: [new Date(2016, 6), new Date()],
          description: [
            { text: 'Build and maintain the HealthTap web app.' },
            {
              text: 'Technical lead, Interactive Care Plans product',
              class: 'bold',
              description: [
                { text: 'Own and drive the entire engineering effort.' },
                { text: 'Coordinate 15+ engineers to successfully deliver the product on time.' }
              ]
            },
            {
              text: 'Frontend team lead, globalization and internationalization',
              class: 'bold',
              description: [
                { text: 'Enable translation of site into Mandarin Chinese, Spanish, and other languages.' },
                { text: 'Enable localization of dates and times, currencies, and other locale-sensitive information.' },
                { text: 'Enforce globalization best practices among web team.' }
              ]
            },
            {
              text: 'Frontend team lead, enterprise projects',
              class: 'bold',
              description: [
                { text: 'Interface with enterprise healthcare providers (Bupa Healthcare Group, Discovery Limited) and provide software solutions for thousands of their patients, doctors, and nurses. ' }
              ]
            }
          ]
        },
        {
          title: 'UI/UX Designer, MyGreenCar Project',
          company: 'Berkeley Lab',
          dates: [new Date(2015, 9), new Date(2016, 5)],
          description: [
            { text: 'Design and develop the MyGreenCar web app.' },
            { text: 'Create design mockups and final designs, images and assets for the project.' },
            { text: 'Build front end of the web app.' }
          ]
        },
        {
          title: 'UI/UX Designer',
          company: 'Twindom',
          dates: [new Date(2015, 5), new Date(2015, 7)],
          description: [
            { text: 'Design and implement new UI/UX for both web and mobile.' },
            { text: 'Develop iOS app for users to view their Twindom 3D scans.' },
            { text: 'Wordpress / Magento / Swift' }
          ]
        },
        {
          title: 'Teaching Assistant, CS10 Course',
          company: 'UC Berkeley',
          dates: [new Date(2014, 0), new Date(2016, 5)],
          description: [
            { text: 'Lead biweekly labs and weekly discussion sections.' },
            { text: 'Support students at weekly office hours.' },
            { text: 'Draft and grade class homework, lab assignments, quizzes, projects, and exams.' }
          ]
        }
      ]
    }
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent(data, index) {
    const content = [];
    if (data.description && data.description.length > 0) {
      data.description.forEach((d, index) => {
        content.push(this.renderContent(d, index));
      });
    } else {
      return (<li key={index}>{data.text}</li>);
    }
    return (
      <div>
        <li className={data.class || ''}>{data.text}</li>
        <li style={{ listStyleType: 'none' }}>
          <ul>{content}</ul>
        </li>
      </div>
    );
  }

  render() {
    const self = this;
    const roleSections = this.model.roles.map((role, index) => {
      const roleContent = [];
      role.description.forEach((d, index) => { roleContent.push(self.renderContent(d, index)); });
      return (
        <RoleSection key={index} title={role.title} company={role.company} dates={role.dates}>
          <ul>{roleContent}</ul>
        </RoleSection>
      );
    })
    return (
      <PageLayout>
        <div className="resume">
          <ResumeSection index={1} title='Education' class="education">
            <p>University of California, Berkeley</p>
            <p>BA Computer Science</p>
            <p>May 2016</p>
          </ResumeSection>
          <ResumeSection index={2} title='Stack' class="stack">
            <span>Javascript</span>
            <span>jQuery</span>
            <span>React</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Sass</span>
            <span>Rails</span>
            <span>Python</span>
          </ResumeSection>
          <ResumeSection index={3} title='Software' class="software">
            <span>Adobe Creative Suite</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </ResumeSection>
          <ResumeSection index={4} title='Experience' class='experience'>
            {roleSections}
          </ResumeSection>
          <ResumeSection index={5} title='Contact' class="contact">
            <a href="mailto:victoria.shi@berkeley.edu">victoria.shi@berkeley.edu</a>
            <a href="tel:1-626-232-5813">(626) 232-5813</a>
            <p>1375 Montecito Ave Apt. 2</p>
            <p>Mountain View, CA 94043</p>
          </ResumeSection>
        </div>
      </PageLayout>
    )
  }
}

export default ResumePage;