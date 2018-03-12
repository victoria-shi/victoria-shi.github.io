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
            'Tech lead - interactive care plans',
            'Web frontend lead - globalization',
            'Web frontend lead - enterprise partnerships (Bupa Healthcare Group, Discovery Limited) ',
          ]
        },
        {
          title: 'UI/UX Designer, MyGreenCar Project',
          company: 'Berkeley Lab',
          dates: [new Date(2015, 9), new Date(2016, 5)],
          description: []
        },
        {
          title: 'UI/UX Designer',
          company: 'Twindom',
          dates: [new Date(2015, 5), new Date(2015, 7)],
          description: []
        }
      ]
    }
  }

  render() {
    const roleSections = this.model.roles.map((role, index) => {
      return (
        <RoleSection
          key={index} title={role.title} company={role.company}
          dates={role.dates} description={role.description}
        />
      );
    })
    return (
      <PageLayout>
        <div className="resume">
          <ResumeSection index={1} title='Education'>
            <p>University of California, Berkeley</p>
            <p>BA Computer Science</p>
            <p>May 2016</p>
          </ResumeSection>
          <ResumeSection index={2} title='Stack'>
            <p>Javascript / jQuery / React></p>
            <p>HTML5 / CSS3 / Sass</p>
            <p>Rails / Python</p>
          </ResumeSection>
          <ResumeSection index={3} title='Software'>
            <p>Adobe Creative Suite / Photoshop / Illustrator</p>
            <p>Balsamiq</p>
          </ResumeSection>
          <ResumeSection index={4} title='Experience' class='experience'>
            {roleSections}
          </ResumeSection>
          <ResumeSection index={5} title='Contact'>
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