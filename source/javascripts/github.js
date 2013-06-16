var github = {
  showRepos: function(options) {
    this.options = options;
    this._getData();
  },
  _getData: function() {
    $.getJSON("https://api.github.com/users/"+this.options.user+"/repos?callback=?", $.proxy(this._getDataCallback, this));
  },
  _getDataCallback: function(data) {
    var repos = [];
    if (!data || !data.data) { return; }
    for (var i = 0; i < data.data.length; i++) {
      if (this.options.skip_forks && data.data[i].fork) { continue; }
      repos.push(data.data[i]);
    }
    repos.sort(function(a, b) {
      var aDate = new Date(a.pushed_at).valueOf(),
          bDate = new Date(b.pushed_at).valueOf();

      if (aDate === bDate) { return 0; }
      return aDate > bDate ? -1 : 1;
    });

    if (this.options.count) { repos.splice(this.options.count); }
    this._render(this.options.target, repos);
  },
  _render: function(target, repos) {
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length && i < 5; i++) {
      fragment += 
        '<div class="header-content-block">' + 
          '<a href="'+repos[i].html_url+'">' + repos[i].name +
          '<img class="social_icon" src="/images/glyphicons_381_github.png" alt="github icon" title="Github"/>' + 
          '</a>' + 
          '<div class="repo-desc">';
      var desc_length = 70;
      if (repos[i].description.length > desc_length) {
        fragment += repos[i].description.substr(0, desc_length) + "...";
      } else {
        fragment += (repos[i].description||'&nbsp;');
      }

      fragment += 
          '</div>' +
        '</div>';
    }
    t.innerHTML = fragment;
  }
};