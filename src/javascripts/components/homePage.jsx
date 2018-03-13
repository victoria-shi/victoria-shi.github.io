import React from 'react';
import $ from 'jquery'; 
// import GitHubCalendar from 'github-calendar';

import PageLayout from 'javascripts/components/pageLayout.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.elements = {};
  }

  componentDidMount() {
    // const self = this;
    // const calendarXhr = GitHubCalendar('.calendar', 'victoria-shi');
    // calendarXhr.then((resp) => {
    //   self.render();
    // })
  }

  render() {
    return (
      <PageLayout>
        <div className="homePage">
          <div className="calendar" ref={(calendar) => { this.elements.calendar = $(calendar); }}/>
        </div>
      </PageLayout>
    )
  }
}

export default HomePage;