import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';

import 'css/components/aboutMe.scss';

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
    this.model = {
      humorLinks: [
        { text: 'Here are', url: 'https://webaim.org/blog/user-agent-string-history/', title: 'History of the browser user-agent string' },
        { text: 'some of', url: 'https://uxdesign.cc/the-worst-volume-control-ui-in-the-world-60713dc86950', title: 'The worst volume control UI in the world' },
        { text: 'my favorite', url: 'https://xkcd.com/1930/', title: 'XKCD: Calendar Facts'},
        { text: 'funny', url: 'https://twitter.com/JanelleCShane/status/969239712190746624', title: 'Do neural nets dream of sheep?' },
        { text: 'programming', url: 'http://localstarboy.tumblr.com/post/171295891812/what-people-think-programming-is-vs-how-it', title: 'Programming: expectations vs reality' },
        { text: 'things', url: 'https://xkcd.com/1883/', title: 'XKCD: Supervillain Plan', title: 'XKCD: Supervillain Plan' },
        { text: '(these', url: 'https://xkcd.com/323/', title: 'XKCD: Ballmer Peak' },
        { text: 'are all', url: 'https://www.reddit.com/r/Ooer/', title: 'The power of CSS...' },
        { text: 'links!).', url: 'https://sharenator.com/Developer_s_Reaction_Gifs/', title: 'Developer Reaction GIFs' },
      ],
      inspirationLinks: [
        { text: 'And', url: 'http://www.ignasimonreal.com/', title: 'Ignasi Monreal' },
        { text: "here", url: 'http://www.runefisker.com/', title: 'Rune Fisker' },
        { text: 'are', url: 'https://woonyoung.tumblr.com/', title: 'Woonyoung Jung' },
        { text: 'a', url: 'http://www.harukimurakami.com/', title: 'Haruki Murakami' },
        { text: 'whole', url: 'http://thanuka.com/', title: 'Tomer Hanuka' },
        { text: 'bunch', url: 'https://vimeo.com/101675469', title: 'Satoshi Kon' },
        { text: 'of', url: 'http://petemajari.ch/portfolio/ampad/', title: 'Pete Majarich' },
        { text: 'people', url: 'http://fuckyeahyusukenakamura.tumblr.com/', title: 'Yusuke Nakamura' },
        { text: 'whose', url: 'http://www.sachinteng.com/', title: 'Sachin Teng' },
        { text: 'work', url: 'https://dribbble.com/viethuynh', title: 'Viet Huynh' },
        { text: 'inspires', url: 'http://www.khoavu.com/', title: 'Khoa Vu' },
        { text: 'me.', url: 'https://k-eke.tumblr.com/', title: 'Kévin Gemin' },
      ]
    };
    this.state = {
      humorLink: '',
      inspirationLink: ''
    };

    this.renderHumorLink = this.renderHumorLink.bind(this);
    this.renderInspirationLink = this.renderInspirationLink.bind(this);
  }

  renderHumorLink(link) {
    this.setState({
      humorLink: link.title
    });
  }

  renderInspirationLink(link) {
    this.setState({
      inspirationLink: link.title
    });
  }

  render() {
    const self = this;
    const video = (
      <iframe src="https://player.vimeo.com/video/216193075" width="480" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    );
    const humor = this.model.humorLinks.map((link, index) => {
      return (
        <a key={index} href={link.url} target="_blank"
          onMouseOver={() => { self.renderHumorLink(link); }}
        >
          {link.text}
        </a>
      );
    });
    const inspiration = this.model.inspirationLinks.map((link, index) => {
      return (
        <a key={index} href={link.url} target="_blank"
          onMouseOver={() => { self.renderInspirationLink(link); }}
        >
          {link.text}
        </a>
      );
    });
    return (
      <PageLayout>
        <div className="aboutMe">
          <img src="/images/victoria.jpg" />
          <div className="bio">
            <h1>This is fine!<a href="http://gunshowcomic.com/648" target="_blank">*</a></h1>
            <p>Hey! I'm Victoria Shi. I'm a front end engineer. I graduated from UC Berkeley in 2016 with a degree in Computer Science, and have been working in the Bay Area since.</p>
            <p>Besides programming, I'm also interested in art, design, and film.</p>
            <div className="links">
              {humor}
              <span className={`linkInfo ${this.state.humorLink ? '' : 'hidden'}`}>{this.state.humorLink}</span>
            </div>
            <div className="links">
              {inspiration}
              <span className={`linkInfo ${this.state.inspirationLink ? '' : 'hidden'}`}>{this.state.inspirationLink}</span>
            </div>
            <p>Let's get to know each other! Email me at <a href="mailto:victoria.shi@berkeley.edu">victoria.shi@berkeley.edu</a></p>
            <p>Or, find me on <a href="https://www.linkedin.com/in/vshiberkeley/" target="_blank">LinkedIn</a>, <a href="https://github.com/victoria-shi" target="_blank">Github</a>, or <a href="https://www.behance.net/vshi" target="_blank">Behance</a>.</p>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default AboutMePage;