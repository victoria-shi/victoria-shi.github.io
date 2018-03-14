import React from 'react';
import $ from 'jquery';
// import GitHubCalendar from 'github-calendar';

import CalendarParser from 'github-calendar-parser';

import 'css/components/code/githubContributionsGraph.scss';

class GithubContributionsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.elements = {};
    this.model = {
      legend: [ //todo: parse from data
        '#ebedf0',
        '#c6e48b',
        '#7bc96f',
        '#239a3b',
        '#196127'
      ]
    };
    this.state = {
      loading: true,
      dayInfo: {}
    };

    this.fetchCalendar = this.fetchCalendar.bind(this);
    this.parseCalendar = this.parseCalendar.bind(this);
    this.clearDay = this.clearDay.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.renderDay = this.renderDay.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  fetchCalendar(callback) {
    // console.log('legend');
    // console.log(Legend);
    const self = this;
    fetch("https://urlreq.appspot.com/req?method=GET&url=https://github.com/victoria-shi").then(response => {
      return response.text();
    }).then((response) => { self.parseCalendar(response); });
  }

  parseCalendar(response) {
    let $body = $(response);
    let $calendar = $body.find('.js-contribution-graph');
    let parsed = CalendarParser($calendar.find('svg').get(0).outerHTML);
    this.model = $.extend({}, this.model, parsed);
    console.log(this.model);
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
    this.fetchCalendar();
  }

  clearDay() {
    this.setState({
      dayInfo: {}
    });
  }

  selectDay(data) {
    const newDayInfo = {
      date: data.date,
      count: data.count
    };
    this.setState({
      dayInfo: newDayInfo
    });
  }

  renderDay(data, index) {
    const MINSIZE = 8;
    const MAXSIZE = 16;
    const stepSize = (MAXSIZE - MINSIZE) / (this.model.legend.length - 1);
    const level = this.model.legend.indexOf(data.fill);
    const dotSize = MINSIZE + (level * stepSize);
    return (
      <div key={index} className="day"
        onMouseOver={() => { this.selectDay(data); }}
        onMouseOut={() => { this.clearDay(); }}
      >
        <div className={`dot ${level === 0 ? 'hollow' : '' }`} style={{height: dotSize, width: dotSize}}/>
      </div>
    );
  }

  renderWeek(data, index) {
    const self = this;
    const weekContent = data.map((dayData, index) => {
      return self.renderDay(dayData, index);
    });
    return (
      <div key={index} className="week">
        {weekContent}
      </div>
    );
  }

  renderHeader() {
    const days = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
    const daysContent = days.map((day, index) => {
      return ( <div key={index} className="day">{day}</div>);
    });
    return (
      <div key={-1} className="header">{daysContent}</div>
    );
  }

  render() {
    const self = this;
    let graphContent = false;
    if (this.state.loading === false) {
      graphContent = this.model.weeks.map((weekData, index) => {
        return self.renderWeek(weekData, index);
      });
      graphContent.unshift(this.renderHeader());
    }
    let infoContent = false;
    if (!$.isEmptyObject(this.state.dayInfo)) {
      infoContent = (
        <div className="graphInfo">
          <div className="dateInfo">
            Contributions on <span className={`date ${this.state.dayInfo.count === 0 ? 'disabled' : ''}`}>{this.state.dayInfo.date.toDateString()}</span>
          </div>
          <div className="commits">
            <span className={`num ${this.state.dayInfo.count === 0 ? 'disabled' : ''}`}>{this.state.dayInfo.count}</span> contributions
          </div>
        </div>
      )
    } else if (this.state.loading === false) {
      infoContent = (
        <div className="graphInfo">
          <div className="dateInfo">
            Last contributed on <span className="date">{this.model.last_contributed.toDateString()}</span>
          </div>
          <div className="commits">
            <span className="num">{this.model.last_year}</span> contributions in the last year
          </div>
        </div>
      )
    }
    return (
      <div className="githubContributionsGraph">
        <div className="graphContainer">
          <div className="graph">
            {graphContent}
          </div>
        </div>
        {infoContent}
      </div>
    )
  }
}

export default GithubContributionsGraph;