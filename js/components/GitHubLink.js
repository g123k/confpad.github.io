const { h } = window.preact;
const htm = window.htm;

const html = htm.bind(h);

const GitHubLink = ({ conferenceId }) => {
  let year = conferenceId.substr(0, 4);
  let link = `https://github.com/confpad/confpad.github.io/blob/master/data/conferences/${year}/${conferenceId}.yaml`;

  return html`
    <div class="mv3 br2 pa3 dark-green bg-washed-green">
      <span>This page was generated from <a href="${link}" target="_blank" rel="noopener" class="link underline dark-green">this YAML</a> file. Found a typo, want to add some data? Just edit it on GitHub.</span>
    </div>
  `;
};

export default GitHubLink;
