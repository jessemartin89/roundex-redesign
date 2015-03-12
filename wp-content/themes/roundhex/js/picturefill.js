


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>picturefill/picturefill.js at 2.2.0 · scottjehl/picturefill</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="scottjehl/picturefill" name="twitter:title" /><meta content="picturefill - A responsive image polyfill for &amp;lt;picture&amp;gt;, srcset, sizes, and more" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/214783?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/214783?v=3&amp;s=400" property="og:image" /><meta content="scottjehl/picturefill" property="og:title" /><meta content="https://github.com/scottjehl/picturefill" property="og:url" /><meta content="picturefill - A responsive image polyfill for &lt;picture&gt;, srcset, sizes, and more" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="32B870CA:3768:3B37E19:5500DA7D" name="octolytics-dimension-request_id" /><meta content="9792711" name="octolytics-actor-id" /><meta content="jessemartin89" name="octolytics-actor-login" /><meta content="acdf1672cebb02d961fb1b3d1721e0f33f657b01bdd35f9f37a83b548893e7ba" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="LFyCYXAEf2Ge+Q5qdvqYyILCh75DOop/HZnEaWz7jNGDYO4Qz5DwWVoih7nlsGPdolEHD0m5Bgf5FJJJz4hSbA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-845daf0c8f04a9119cb376ccd6de834afd5fe701bfda61662e4bc5109ab4cf63.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-ae8485828d2601a1471551947bc8ad813317660b06a2e61b3d487ac31dc00de3.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="8ae36b50ef20a1a8f27ad0e533aa60a3">

      
  <meta name="description" content="picturefill - A responsive image polyfill for &lt;picture&gt;, srcset, sizes, and more">
  <meta name="go-import" content="github.com/scottjehl/picturefill git https://github.com/scottjehl/picturefill.git">

  <meta content="214783" name="octolytics-dimension-user_id" /><meta content="scottjehl" name="octolytics-dimension-user_login" /><meta content="3502120" name="octolytics-dimension-repository_id" /><meta content="scottjehl/picturefill" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3502120" name="octolytics-dimension-repository_network_root_id" /><meta content="scottjehl/picturefill" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/scottjehl/picturefill/commits/2.2.0.atom" rel="alternate" title="Recent Commits to picturefill:2.2.0" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/scottjehl/picturefill/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/scottjehl/picturefill/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/jessemartin89" data-ga-click="Header, go to profile, text:username">
      <img alt="jessemartin89" class="avatar" data-user="9792711" height="20" src="https://avatars1.githubusercontent.com/u/9792711?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">jessemartin89</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="scottjehl/picturefill">This repository</span>
    </li>
      <li>
        <a href="/scottjehl/picturefill/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bGcwIGn+3m5fxD/ZvYV37Nqac8LGZV+3mxIYy7ITRLq9pdijMF0fka1TEJ+mpQmcqXse34eO/dE/1t8KdhOpIg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fAXik07lkhKIgEQxXkcJa/TU0Kzjp1v92WBxw/WVki5vnX4E9cBkVRYsHVc6pmLWk1EVlg/Iqa+PiGsv5eH8RA==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="3502120" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/scottjehl/picturefill/watchers">
          377
        </a>
        <a href="/scottjehl/picturefill/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/scottjehl/picturefill/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qYRrFsPuvjZ4eSMNQkwLxcQYjB1O/fShLa/6RCCRUxFJK51IkozToHrhpyNICsr/I/FS+3joXvnf+PwUsEQUgg==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar scottjehl/picturefill"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/scottjehl/picturefill/stargazers">
          6,577
        </a>
</form>
    <form accept-charset="UTF-8" action="/scottjehl/picturefill/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3aQlcLE6B7hcEMgxNwY5u6GLee1MUBZgRXofFAnEJwC+CQZo+5Gx2A5vcHvv427vL9U1olfurpjglyifMOH9bA==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star scottjehl/picturefill"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/scottjehl/picturefill/stargazers">
          6,577
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/scottjehl/picturefill/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="A5sStMJrdD4+eqqW4A2Rlip6ex5N08pvYWp0tCgJuhB4p+TZkBtSi6QxLiGIHzhA2enroWc6xQLF4KRZj/TVpA==" /></div>
            <button
                type="submit"
                class="minibutton with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of scottjehl/picturefill to your account"
                aria-label="Fork your own copy of scottjehl/picturefill to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/scottjehl/picturefill/network" class="social-count">812</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/scottjehl" class="url fn" itemprop="url" rel="author"><span itemprop="title">scottjehl</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/scottjehl/picturefill" class="js-current-repository" data-pjax="#js-repo-pjax-container">picturefill</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/scottjehl/picturefill/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/scottjehl/picturefill/tree/2.2.0" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /scottjehl/picturefill/tree/2.2.0">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/scottjehl/picturefill/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /scottjehl/picturefill/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/scottjehl/picturefill/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /scottjehl/picturefill/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/scottjehl/picturefill/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /scottjehl/picturefill/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/scottjehl/picturefill/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /scottjehl/picturefill/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/scottjehl/picturefill/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /scottjehl/picturefill/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/scottjehl/picturefill.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:scottjehl/picturefill.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/scottjehl/picturefill" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/scottjehl/picturefill" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save scottjehl/picturefill to your computer and use it in GitHub Desktop." aria-label="Save scottjehl/picturefill to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/scottjehl/picturefill/archive/2.2.0.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of scottjehl/picturefill as a zip file"
                   title="Download the contents of scottjehl/picturefill as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/scottjehl/picturefill/blob/f8727be1740e28718c5c7a3d0cf5844d5aae1dae/dist/picturefill.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4774154cd847bc22a7ebb2f7959dc6a3 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="2.2.0"
    title="2.2.0"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-tag"></span>
    <i>tag:</i>
    <span class="js-select-button css-truncate-target">2.2.0</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/1.2/dist/picturefill.js"
               data-name="1.2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.2">
                1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/2.0.0a/dist/picturefill.js"
               data-name="2.0.0a"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0a">
                2.0.0a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/2.2/dist/picturefill.js"
               data-name="2.2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.2">
                2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/2.2.1-npm/dist/picturefill.js"
               data-name="2.2.1-npm"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.2.1-npm">
                2.2.1-npm
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/2.3/dist/picturefill.js"
               data-name="2.3"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.3">
                2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/2.3-doc-fixes/dist/picturefill.js"
               data-name="2.3-doc-fixes"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.3-doc-fixes">
                2.3-doc-fixes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/afarkas-pf3-proposal/dist/picturefill.js"
               data-name="afarkas-pf3-proposal"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="afarkas-pf3-proposal">
                afarkas-pf3-proposal
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/alternate-type-support/dist/picturefill.js"
               data-name="alternate-type-support"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="alternate-type-support">
                alternate-type-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/build-fix/dist/picturefill.js"
               data-name="build-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="build-fix">
                build-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/findimg-issue215/dist/picturefill.js"
               data-name="findimg-issue215"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="findimg-issue215">
                findimg-issue215
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/gh-pages/dist/picturefill.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/inherent-width/dist/picturefill.js"
               data-name="inherent-width"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="inherent-width">
                inherent-width
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/jcutrell-sourcesrc-notification/dist/picturefill.js"
               data-name="jcutrell-sourcesrc-notification"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="jcutrell-sourcesrc-notification">
                jcutrell-sourcesrc-notification
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/jonathantneal-test-compatibility/dist/picturefill.js"
               data-name="jonathantneal-test-compatibility"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="jonathantneal-test-compatibility">
                jonathantneal-test-compatibility
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/massive-refactor/dist/picturefill.js"
               data-name="massive-refactor"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="massive-refactor">
                massive-refactor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/master/dist/picturefill.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/ricg-logo-414/dist/picturefill.js"
               data-name="ricg-logo-414"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ricg-logo-414">
                ricg-logo-414
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/srcset-parsing/dist/picturefill.js"
               data-name="srcset-parsing"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="srcset-parsing">
                srcset-parsing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/scottjehl/picturefill/blob/user-prefs/dist/picturefill.js"
               data-name="user-prefs"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="user-prefs">
                user-prefs
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/v1.2.0/dist/picturefill.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/v1.1.0/dist/picturefill.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/v1.0.0/dist/picturefill.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/initial/dist/picturefill.js"
                 data-name="initial"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="initial">initial</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.3.0-beta/dist/picturefill.js"
                 data-name="2.3.0-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.0-beta">2.3.0-beta</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.2.0-beta/dist/picturefill.js"
                 data-name="2.2.0-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0-beta">2.2.0-beta</a>
            </div>
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.2.0/dist/picturefill.js"
                 data-name="2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0">2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.1.0-beta2/dist/picturefill.js"
                 data-name="2.1.0-beta2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0-beta2">2.1.0-beta2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.1.0-beta/dist/picturefill.js"
                 data-name="2.1.0-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0-beta">2.1.0-beta</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.1.0/dist/picturefill.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.0.0-beta/dist/picturefill.js"
                 data-name="2.0.0-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0-beta">2.0.0-beta</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.0.0-alpha/dist/picturefill.js"
                 data-name="2.0.0-alpha"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0-alpha">2.0.0-alpha</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/2.0.0/dist/picturefill.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/picturefill/tree/1.2.1/dist/picturefill.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/scottjehl/picturefill/find/2.2.0"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/picturefill/tree/2.2.0" class="" data-branch="2.2.0" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">picturefill</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/picturefill/tree/2.2.0/dist" class="" data-branch="2.2.0" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">picturefill.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Mat Marquis" class="avatar" data-user="439942" height="24" src="https://avatars0.githubusercontent.com/u/439942?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/Wilto" rel="contributor">Wilto</a></span>
        <time datetime="2014-11-19T16:32:06Z" is="relative-time">Nov 19, 2014</time>
        <div class="commit-title">
            <a href="/scottjehl/picturefill/commit/f8727be1740e28718c5c7a3d0cf5844d5aae1dae" class="message" data-pjax="true" title="2.2.0 Stable.">2.2.0 Stable.</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>11</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="Wilto" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=Wilto"><img alt="Mat Marquis" class="avatar" data-user="439942" height="20" src="https://avatars2.githubusercontent.com/u/439942?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gBokiau" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=gBokiau"><img alt="gBokiau" class="avatar" data-user="108301" height="20" src="https://avatars3.githubusercontent.com/u/108301?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jonathantneal" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=jonathantneal"><img alt="Jonathan Neal" class="avatar" data-user="188426" height="20" src="https://avatars2.githubusercontent.com/u/188426?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="attiks" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=attiks"><img alt="Peter Droogmans" class="avatar" data-user="105144" height="20" src="https://avatars0.githubusercontent.com/u/105144?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jefflembeck" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=jefflembeck"><img alt="Jeff Lembeck" class="avatar" data-user="109699" height="20" src="https://avatars3.githubusercontent.com/u/109699?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nschonni" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=nschonni"><img alt="Nick Schonning" class="avatar" data-user="1297909" height="20" src="https://avatars0.githubusercontent.com/u/1297909?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jansepar" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=jansepar"><img alt="Shawn Jansepar" class="avatar" data-user="81582" height="20" src="https://avatars1.githubusercontent.com/u/81582?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="johnbender" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=johnbender"><img alt="John Bender" class="avatar" data-user="23505" height="20" src="https://avatars1.githubusercontent.com/u/23505?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zcorpan" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=zcorpan"><img alt="Simon Pieters" class="avatar" data-user="244772" height="20" src="https://avatars1.githubusercontent.com/u/244772?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pborreli" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=pborreli"><img alt="Pascal Borreli" class="avatar" data-user="77759" height="20" src="https://avatars1.githubusercontent.com/u/77759?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andreruffert" href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js?author=andreruffert"><img alt="André Ruffert" class="avatar" data-user="464300" height="20" src="https://avatars3.githubusercontent.com/u/464300?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mat Marquis" data-user="439942" height="24" src="https://avatars0.githubusercontent.com/u/439942?v=3&amp;s=48" width="24" />
            <a href="/Wilto">Wilto</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="gBokiau" data-user="108301" height="24" src="https://avatars1.githubusercontent.com/u/108301?v=3&amp;s=48" width="24" />
            <a href="/gBokiau">gBokiau</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jonathan Neal" data-user="188426" height="24" src="https://avatars0.githubusercontent.com/u/188426?v=3&amp;s=48" width="24" />
            <a href="/jonathantneal">jonathantneal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Peter Droogmans" data-user="105144" height="24" src="https://avatars2.githubusercontent.com/u/105144?v=3&amp;s=48" width="24" />
            <a href="/attiks">attiks</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Lembeck" data-user="109699" height="24" src="https://avatars1.githubusercontent.com/u/109699?v=3&amp;s=48" width="24" />
            <a href="/jefflembeck">jefflembeck</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nick Schonning" data-user="1297909" height="24" src="https://avatars2.githubusercontent.com/u/1297909?v=3&amp;s=48" width="24" />
            <a href="/nschonni">nschonni</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Shawn Jansepar" data-user="81582" height="24" src="https://avatars3.githubusercontent.com/u/81582?v=3&amp;s=48" width="24" />
            <a href="/jansepar">jansepar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John Bender" data-user="23505" height="24" src="https://avatars3.githubusercontent.com/u/23505?v=3&amp;s=48" width="24" />
            <a href="/johnbender">johnbender</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Simon Pieters" data-user="244772" height="24" src="https://avatars3.githubusercontent.com/u/244772?v=3&amp;s=48" width="24" />
            <a href="/zcorpan">zcorpan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Pascal Borreli" data-user="77759" height="24" src="https://avatars3.githubusercontent.com/u/77759?v=3&amp;s=48" width="24" />
            <a href="/pborreli">pborreli</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="André Ruffert" data-user="464300" height="24" src="https://avatars1.githubusercontent.com/u/464300?v=3&amp;s=48" width="24" />
            <a href="/andreruffert">andreruffert</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="button-group">
        <a href="/scottjehl/picturefill/raw/2.2.0/dist/picturefill.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/scottjehl/picturefill/blame/2.2.0/dist/picturefill.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/scottjehl/picturefill/commits/2.2.0/dist/picturefill.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->


          <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be on a branch to make or propose changes to this file"><span class="octicon octicon-pencil"></span></a>

        <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
           aria-label="You must be on a branch to make or propose changes to this file">
      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        660 lines (551 sloc)
        <span class="file-info-divider"></span>
      21.316 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*! Picturefill - v2.2.0 - 2014-10-30</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">* http://scottjehl.github.io/picturefill</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors &amp; copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-s3">window</span>.matchMedia <span class="pl-k">||</span> (<span class="pl-s3">window</span>.<span class="pl-en">matchMedia</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">	<span class="pl-s1"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">	<span class="pl-c">// For browsers that support matchMedium api such as IE 9 and webkit</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">	<span class="pl-s">var</span> styleMedia <span class="pl-k">=</span> (<span class="pl-s3">window</span>.styleMedia <span class="pl-k">||</span> <span class="pl-s3">window</span>.<span class="pl-sc">media</span>);</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">	<span class="pl-c">// For those that don&#39;t support matchMedium</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">!</span>styleMedia) {</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">		<span class="pl-s">var</span> style       <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">			script      <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">			info        <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">		style.<span class="pl-sc">type</span>  <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>text/css<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">		style.<span class="pl-sc">id</span>    <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>matchmediajs-test<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">		script.<span class="pl-sc">parentNode</span>.<span class="pl-s3">insertBefore</span>(style, script);</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">		<span class="pl-c">// &#39;style.currentStyle&#39; is used by IE &lt;= 8 and &#39;window.getComputedStyle&#39; for all other browsers</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">		info <span class="pl-k">=</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>getComputedStyle<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-s3">window</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">window</span>.getComputedStyle(style, <span class="pl-c1">null</span>) <span class="pl-k">||</span> style.currentStyle;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">		styleMedia <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">			<span class="pl-en">matchMedium</span>: <span class="pl-st">function</span>(<span class="pl-vpf">media</span>) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">				<span class="pl-s">var</span> text <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>@media <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> media <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>{ #matchmediajs-test { width: 1px; } }<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">				<span class="pl-c">// &#39;style.styleSheet&#39; is used by IE &lt;= 8 and &#39;style.textContent&#39; for all other browsers</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">				<span class="pl-k">if</span> (style.styleSheet) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">					style.styleSheet.cssText <span class="pl-k">=</span> text;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">					style.textContent <span class="pl-k">=</span> text;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">				<span class="pl-c">// Test if media query is true or false</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">				<span class="pl-k">return</span> info.<span class="pl-sc">width</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">	<span class="pl-k">return</span> <span class="pl-st">function</span>(<span class="pl-vpf">media</span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">		<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">			matches<span class="pl-k">:</span> styleMedia.matchMedium(media <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">			media<span class="pl-k">:</span> media <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">}());</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line"><span class="pl-c">/*! Picturefill - Responsive Images that work today.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line"><span class="pl-c">*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line"><span class="pl-c">*  License: MIT/GPLv2</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line"><span class="pl-c">*  Spec: http://picture.responsiveimages.org/</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">(<span class="pl-st">function</span>( <span class="pl-vpf">w</span>, <span class="pl-vpf">doc</span>, <span class="pl-vpf">image</span> ) {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">	<span class="pl-c">// Enable strict mode</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">	<span class="pl-s1"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">	<span class="pl-c">// If picture is supported, well, that&#39;s awesome. Let&#39;s get outta here...</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">	<span class="pl-k">if</span> ( w.HTMLPictureElement ) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">		<span class="pl-s3">w</span>.<span class="pl-en">picturefill</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() { };</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">		<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">	<span class="pl-c">// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">	doc.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>picture<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">	<span class="pl-c">// local object for method references and testing exposure</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">	<span class="pl-s">var</span> pf <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	<span class="pl-c">// namespace</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">	pf.ns <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>picturefill<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">	<span class="pl-c">// srcset support test</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">	(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">		pf.srcsetSupported <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>srcset<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> image;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">		pf.sizesSupported <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>sizes<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> image;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">	})();</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">	<span class="pl-c">// just a string trim workaround</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">trim</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">		<span class="pl-k">return</span> str.trim <span class="pl-k">?</span> str.trim() <span class="pl-k">:</span> str.<span class="pl-s3">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">	<span class="pl-c">// just a string endsWith workaround</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">endsWith</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">str</span>, <span class="pl-vpf">suffix</span> ) {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">		<span class="pl-k">return</span> str.endsWith <span class="pl-k">?</span> str.endsWith( suffix ) <span class="pl-k">:</span> str.<span class="pl-s3">indexOf</span>( suffix, str.<span class="pl-sc">length</span> <span class="pl-k">-</span> suffix.<span class="pl-sc">length</span> ) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line"><span class="pl-c">	 * Shortcut method for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">restrictsMixedContent</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">		<span class="pl-k">return</span> w.<span class="pl-sc">location</span>.<span class="pl-sc">protocol</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>https:<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line"><span class="pl-c">	 * Shortcut method for matchMedia ( for easy overriding in tests )</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">matchesMedia</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">media</span> ) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">		<span class="pl-k">return</span> w.matchMedia <span class="pl-k">&amp;&amp;</span> w.matchMedia( media ).matches;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">	<span class="pl-c">// Shortcut method for `devicePixelRatio` ( for easy overriding in tests )</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">getDpr</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">		<span class="pl-k">return</span> ( w.devicePixelRatio <span class="pl-k">||</span> <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line"><span class="pl-c">	 * Get width in css pixel value from a &quot;length&quot; value</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line"><span class="pl-c">	 * http://dev.w3.org/csswg/css-values-3/#length-value</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">getWidthFromLength</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">		<span class="pl-c">// If a length is specified and doesn’t contain a percentage, and it is greater than 0 or using `calc`, use it. Else, use the `100vw` default.</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">		length <span class="pl-k">=</span> length <span class="pl-k">&amp;&amp;</span> length.<span class="pl-s3">indexOf</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> ( <span class="pl-s3">parseFloat</span>( length ) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> length.<span class="pl-s3">indexOf</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>calc(<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) <span class="pl-k">?</span> length <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>100vw<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line"><span class="pl-c">		 * If length is specified in  `vw` units, use `%` instead since the div we’re measuring</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line"><span class="pl-c">		 * is injected at the top of the document.</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line"><span class="pl-c">		 *</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line"><span class="pl-c">		 * TODO: maybe we should put this behind a feature test for `vw`?</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line"><span class="pl-c">		 */</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">		length <span class="pl-k">=</span> length.<span class="pl-s3">replace</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>vw<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">		<span class="pl-c">// Create a cached element for getting length value widths</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">		<span class="pl-k">if</span> ( <span class="pl-k">!</span>pf.lengthEl ) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">			pf.lengthEl <span class="pl-k">=</span> doc.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">			<span class="pl-c">// Positioning styles help prevent padding/margin/width on `html` or `body` from throwing calculations off.</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">			pf.lengthEl.<span class="pl-sc">style</span>.cssText <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">		pf.lengthEl.<span class="pl-sc">style</span>.<span class="pl-sc">width</span> <span class="pl-k">=</span> length;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">		doc.<span class="pl-sc">body</span>.<span class="pl-s3">appendChild</span>(pf.lengthEl);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">		<span class="pl-c">// Add a class, so that everyone knows where this element comes from</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">		pf.lengthEl.<span class="pl-sc">className</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>helper-from-picturefill-js<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">		<span class="pl-k">if</span> ( pf.lengthEl.offsetWidth <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">			<span class="pl-c">// Something has gone wrong. `calc()` is in use and unsupported, most likely. Default to `100vw` (`100%`, for broader support.):</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">			pf.lengthEl.<span class="pl-sc">style</span>.<span class="pl-sc">width</span> <span class="pl-k">=</span> doc.<span class="pl-sc">documentElement</span>.offsetWidth <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">		<span class="pl-s">var</span> offsetWidth <span class="pl-k">=</span> pf.lengthEl.offsetWidth;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">		doc.<span class="pl-sc">body</span>.<span class="pl-s3">removeChild</span>( pf.lengthEl );</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">		<span class="pl-k">return</span> offsetWidth;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">	<span class="pl-c">// container of supported mime types that one might need to qualify before using</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">	pf.types <span class="pl-k">=</span>  {};</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">	<span class="pl-c">// Add support for standard mime types</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">	pf.types[ <span class="pl-s1"><span class="pl-pds">&quot;</span>image/jpeg<span class="pl-pds">&quot;</span></span> ] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">	pf.types[ <span class="pl-s1"><span class="pl-pds">&quot;</span>image/gif<span class="pl-pds">&quot;</span></span> ] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">	pf.types[ <span class="pl-s1"><span class="pl-pds">&quot;</span>image/png<span class="pl-pds">&quot;</span></span> ] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">	<span class="pl-c">// test svg support</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">	pf.types[ <span class="pl-s1"><span class="pl-pds">&quot;</span>image/svg+xml<span class="pl-pds">&quot;</span></span> ] <span class="pl-k">=</span> doc.<span class="pl-sc">implementation</span>.<span class="pl-s3">hasFeature</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>http://www.w3.org/TR/SVG11/feature#Image<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>1.1<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">	<span class="pl-c">// test webp support, only when the markup calls for it</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">	pf.types[ <span class="pl-s1"><span class="pl-pds">&quot;</span>image/webp<span class="pl-pds">&quot;</span></span> ] <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">		<span class="pl-c">// based on Modernizr&#39;s lossless img-webp test</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">		<span class="pl-c">// note: asynchronous</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">		<span class="pl-s">var</span> type <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>image/webp<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">		<span class="pl-s3">image</span>.<span class="pl-en">onerror</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">			pf.types[ type ] <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">			picturefill();</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">		<span class="pl-s3">image</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">			pf.types[ type ] <span class="pl-k">=</span> image.<span class="pl-sc">width</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">			picturefill();</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">		image.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line"><span class="pl-c">	 * Takes a source element and checks if its type attribute is present and if so, supported</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line"><span class="pl-c">	 * Note: for type tests that require a async logic,</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line"><span class="pl-c">	 * you can define them as a function that&#39;ll run only if that type needs to be tested. Just make the test function call picturefill again when it is complete.</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line"><span class="pl-c">	 * see the async webp test above for example</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">verifyTypeSupport</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">source</span> ) {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">		<span class="pl-s">var</span> type <span class="pl-k">=</span> source.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">		<span class="pl-c">// if type attribute exists, return test result, otherwise return true</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">		<span class="pl-k">if</span> ( type <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">			<span class="pl-c">// if the type test is a function, run it and return &quot;pending&quot; status. The function will rerun picturefill on pending elements once finished.</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span>( pf.types[ type ] ) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">				pf.types[ type ]();</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>pending<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">				<span class="pl-k">return</span> pf.types[ type ];</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">	<span class="pl-c">// Parses an individual `size` and returns the length, and optional media query</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">parseSize</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">sourceSizeStr</span> ) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">		<span class="pl-s">var</span> match <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-cce">\(</span><span class="pl-c1">[<span class="pl-k">^</span>)]</span><span class="pl-k">+</span><span class="pl-cce">\)</span>)<span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">.</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>g</span>.<span class="pl-s3">exec</span>( sourceSizeStr );</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">		<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">			media<span class="pl-k">:</span> match <span class="pl-k">&amp;&amp;</span> match[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">			length<span class="pl-k">:</span> match <span class="pl-k">&amp;&amp;</span> match[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">	<span class="pl-c">// Takes a string of sizes and returns the width in pixels as a number</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">findWidthFromSourceSize</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">sourceSizeListStr</span> ) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">		<span class="pl-c">// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">		<span class="pl-c">//                            or (min-width:30em) calc(30% - 15px)</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">		<span class="pl-s">var</span> sourceSizeList <span class="pl-k">=</span> pf.trim( sourceSizeListStr ).<span class="pl-s3">split</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">*</span>,<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span> ),</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">			winningLength;</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">		<span class="pl-k">for</span> ( <span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> sourceSizeList.<span class="pl-sc">length</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">			<span class="pl-c">// Match &lt;media-condition&gt;? length, ie ( min-width: 50em ) 100%</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">			<span class="pl-s">var</span> sourceSize <span class="pl-k">=</span> sourceSizeList[ i ],</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">				<span class="pl-c">// Split &quot;( min-width: 50em ) 100%&quot; into separate strings</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">				parsedSize <span class="pl-k">=</span> pf.parseSize( sourceSize ),</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">				length <span class="pl-k">=</span> parsedSize.<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">				media <span class="pl-k">=</span> parsedSize.<span class="pl-sc">media</span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>length ) {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>media <span class="pl-k">||</span> pf.matchesMedia( media ) ) {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">				<span class="pl-c">// if there is no media query or it matches, choose this as our winning length</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">				<span class="pl-c">// and end algorithm</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">				winningLength <span class="pl-k">=</span> length;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">		<span class="pl-c">// pass the length to a method that can properly determine length</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">		<span class="pl-c">// in pixels based on these formats: http://dev.w3.org/csswg/css-values-3/#length-value</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">		<span class="pl-k">return</span> pf.getWidthFromLength( winningLength );</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">parseSrcset</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">srcset</span> ) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">		<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line"><span class="pl-c">		 * A lot of this was pulled from Boris Smus’ parser for the now-defunct WHATWG `srcset`</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line"><span class="pl-c">		 * https://github.com/borismus/srcset-polyfill/blob/master/js/srcset-info.js</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line"><span class="pl-c">		 *</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line"><span class="pl-c">		 * 1. Let input (`srcset`) be the value passed to this algorithm.</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line"><span class="pl-c">		 * 2. Let position be a pointer into input, initially pointing at the start of the string.</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line"><span class="pl-c">		 * 3. Let raw candidates be an initially empty ordered list of URLs with associated </span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line"><span class="pl-c">		 *    unparsed descriptors. The order of entries in the list is the order in which entries </span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line"><span class="pl-c">		 *    are added to the list.</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line"><span class="pl-c">		 */</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">		<span class="pl-s">var</span> candidates <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">		<span class="pl-k">while</span> ( srcset <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">			srcset <span class="pl-k">=</span> srcset.<span class="pl-s3">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">			<span class="pl-c">// 5. Collect a sequence of characters that are not space characters, and let that be url.</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">			<span class="pl-s">var</span> pos <span class="pl-k">=</span> srcset.<span class="pl-s3">search</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span>g</span>),</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">				url, descriptor <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">			<span class="pl-k">if</span> ( pos <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">				url <span class="pl-k">=</span> srcset.<span class="pl-s3">slice</span>( <span class="pl-c1">0</span>, pos );</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">				<span class="pl-s">var</span> last <span class="pl-k">=</span> url.<span class="pl-s3">slice</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">				<span class="pl-c">// 6. If url ends with a U+002C COMMA character (,), remove that character from url</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">				<span class="pl-c">// and let descriptors be the empty string. Otherwise, follow these substeps</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">				<span class="pl-c">// 6.1. If url is empty, then jump to the step labeled descriptor parser.</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">				<span class="pl-k">if</span> ( last <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> url <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">					url <span class="pl-k">=</span> url.<span class="pl-s3">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span>,<span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">					descriptor <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">				srcset <span class="pl-k">=</span> srcset.<span class="pl-s3">slice</span>( pos <span class="pl-k">+</span> <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">				<span class="pl-c">// 6.2. Collect a sequence of characters that are not U+002C COMMA characters (,), and </span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">				<span class="pl-c">// let that be descriptors.</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">				<span class="pl-k">if</span> ( descriptor <span class="pl-k">===</span> <span class="pl-c1">null</span> ) {</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">					<span class="pl-s">var</span> descpos <span class="pl-k">=</span> srcset.<span class="pl-s3">indexOf</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">					<span class="pl-k">if</span> ( descpos <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">						descriptor <span class="pl-k">=</span> srcset.<span class="pl-s3">slice</span>( <span class="pl-c1">0</span>, descpos );</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">						srcset <span class="pl-k">=</span> srcset.<span class="pl-s3">slice</span>( descpos <span class="pl-k">+</span> <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">						descriptor <span class="pl-k">=</span> srcset;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">						srcset <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">				url <span class="pl-k">=</span> srcset;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">				srcset <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">			<span class="pl-c">// 7. Add url to raw candidates, associated with descriptors.</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">			<span class="pl-k">if</span> ( url <span class="pl-k">||</span> descriptor ) {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">				candidates.<span class="pl-s3">push</span>({</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">					url<span class="pl-k">:</span> url,</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">					descriptor<span class="pl-k">:</span> descriptor</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">		<span class="pl-k">return</span> candidates;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">parseDescriptor</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">descriptor</span>, <span class="pl-vpf">sizesattr</span> ) {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">		<span class="pl-c">// 11. Descriptor parser: Let candidates be an initially empty source set. The order of entries in the list </span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">		<span class="pl-c">// is the order in which entries are added to the list.</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">		<span class="pl-s">var</span> sizes <span class="pl-k">=</span> sizesattr <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>100vw<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">			sizeDescriptor <span class="pl-k">=</span> descriptor <span class="pl-k">&amp;&amp;</span> descriptor.<span class="pl-s3">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span>)<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">			widthInCssPixels <span class="pl-k">=</span> pf.findWidthFromSourceSize( sizes ),</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">			resCandidate;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">			<span class="pl-k">if</span> ( sizeDescriptor ) {</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">				<span class="pl-s">var</span> splitDescriptor <span class="pl-k">=</span> sizeDescriptor.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">				<span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> splitDescriptor.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; i <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>; i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">					<span class="pl-s">var</span> curr <span class="pl-k">=</span> splitDescriptor[ i ],</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">						lastchar <span class="pl-k">=</span> curr <span class="pl-k">&amp;&amp;</span> curr.<span class="pl-s3">slice</span>( curr.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">					<span class="pl-k">if</span> ( ( lastchar <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>h<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> lastchar <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>pf.sizesSupported ) {</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">						resCandidate <span class="pl-k">=</span> <span class="pl-s3">parseFloat</span>( ( <span class="pl-s3">parseInt</span>( curr, <span class="pl-c1">10</span> ) / widthInCssPixels ) );</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> ( lastchar <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">						<span class="pl-s">var</span> res <span class="pl-k">=</span> curr <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">parseFloat</span>( curr, <span class="pl-c1">10</span> );</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">						resCandidate <span class="pl-k">=</span> res <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-s3">isNaN</span>( res ) <span class="pl-k">?</span> res <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">		<span class="pl-k">return</span> resCandidate <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line"><span class="pl-c">	 * Takes a srcset in the form of url/</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line"><span class="pl-c">	 * ex. &quot;images/pic-medium.png 1x, images/pic-medium-2x.png 2x&quot; or</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line"><span class="pl-c">	 *     &quot;images/pic-medium.png 400w, images/pic-medium-2x.png 800w&quot; or</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line"><span class="pl-c">	 *     &quot;images/pic-small.png&quot;</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line"><span class="pl-c">	 * Get an array of image candidates in the form of</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line"><span class="pl-c">	 *      {url: &quot;/foo/bar.png&quot;, resolution: 1}</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line"><span class="pl-c">	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line"><span class="pl-c">	 * If sizes is specified, resolution is calculated</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">getCandidatesFromSourceSet</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">srcset</span>, <span class="pl-vpf">sizes</span> ) {</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">		<span class="pl-s">var</span> candidates <span class="pl-k">=</span> pf.parseSrcset( srcset ),</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">			formattedCandidates <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">		<span class="pl-k">for</span> ( <span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> candidates.<span class="pl-sc">length</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">			<span class="pl-s">var</span> candidate <span class="pl-k">=</span> candidates[ i ];</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">			formattedCandidates.<span class="pl-s3">push</span>({</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">				url<span class="pl-k">:</span> candidate.url,</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">				resolution<span class="pl-k">:</span> pf.parseDescriptor( candidate.descriptor, sizes )</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">		<span class="pl-k">return</span> formattedCandidates;</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line"><span class="pl-c">	 * if it&#39;s an img element and it has a srcset property,</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line"><span class="pl-c">	 * we need to remove the attribute so we can manipulate src</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line"><span class="pl-c">	 * (the property&#39;s existence infers native srcset support, and a srcset-supporting browser will prioritize srcset&#39;s value over our winning picture candidate)</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line"><span class="pl-c">	 * this moves srcset&#39;s value to memory for later use and removes the attr</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">dodgeSrcset</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">img</span> ) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">		<span class="pl-k">if</span> ( img.srcset ) {</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">			img[ pf.ns ].srcset <span class="pl-k">=</span> img.srcset;</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">			img.<span class="pl-s3">removeAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>srcset<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">	<span class="pl-c">// Accept a source or img element and process its srcset and sizes attrs</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">processSourceSet</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">el</span> ) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">		<span class="pl-s">var</span> srcset <span class="pl-k">=</span> el.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>srcset<span class="pl-pds">&quot;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">			sizes <span class="pl-k">=</span> el.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>sizes<span class="pl-pds">&quot;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">			candidates <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">		<span class="pl-c">// if it&#39;s an img element, use the cached srcset property (defined or not)</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">		<span class="pl-k">if</span> ( el.<span class="pl-sc">nodeName</span>.<span class="pl-s3">toUpperCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>IMG<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> el[ pf.ns ] <span class="pl-k">&amp;&amp;</span> el[ pf.ns ].srcset ) {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">			srcset <span class="pl-k">=</span> el[ pf.ns ].srcset;</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">		<span class="pl-k">if</span> ( srcset ) {</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">			candidates <span class="pl-k">=</span> pf.getCandidatesFromSourceSet( srcset, sizes );</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">		<span class="pl-k">return</span> candidates;</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">applyBestCandidate</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">candidates</span>, <span class="pl-vpf">picImg</span> ) {</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">		<span class="pl-s">var</span> candidate,</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">			length,</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">			bestCandidate;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">		candidates.<span class="pl-s3">sort</span>( pf.ascendingSort );</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">		length <span class="pl-k">=</span> candidates.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">		bestCandidate <span class="pl-k">=</span> candidates[ length <span class="pl-k">-</span> <span class="pl-c1">1</span> ];</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">		<span class="pl-k">for</span> ( <span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">			candidate <span class="pl-k">=</span> candidates[ i ];</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">			<span class="pl-k">if</span> ( candidate.resolution <span class="pl-k">&gt;=</span> pf.getDpr() ) {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">				bestCandidate <span class="pl-k">=</span> candidate;</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">		<span class="pl-k">if</span> ( bestCandidate <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>pf.endsWith( picImg.<span class="pl-sc">src</span>, bestCandidate.url ) ) {</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">			<span class="pl-k">if</span> ( pf.restrictsMixedContent() <span class="pl-k">&amp;&amp;</span> bestCandidate.url.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>http:<span class="pl-pds">&quot;</span></span>.<span class="pl-sc">length</span>).<span class="pl-s3">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>http:<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-en">console</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> ) {</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">					<span class="pl-en">console</span><span class="pl-s3">.warn</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>Blocked mixed content image <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> bestCandidate.url );</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">				picImg.<span class="pl-sc">src</span> <span class="pl-k">=</span> bestCandidate.url;</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">				<span class="pl-c">// currentSrc attribute and property to match</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">				<span class="pl-c">// http://picture.responsiveimages.org/#the-img-element</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">				picImg.currentSrc <span class="pl-k">=</span> picImg.<span class="pl-sc">src</span>;</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">				<span class="pl-s">var</span> style <span class="pl-k">=</span> picImg.<span class="pl-sc">style</span> <span class="pl-k">||</span> {},</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">					WebkitBackfaceVisibility <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>webkitBackfaceVisibility<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> style,</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">					currentZoom <span class="pl-k">=</span> style.zoom;</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">				<span class="pl-k">if</span> (WebkitBackfaceVisibility) { <span class="pl-c">// See: https://github.com/scottjehl/picturefill/issues/332</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">					style.zoom <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.999<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">					WebkitBackfaceVisibility <span class="pl-k">=</span> picImg.offsetWidth;</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">					style.zoom <span class="pl-k">=</span> currentZoom;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">ascendingSort</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">a</span>, <span class="pl-vpf">b</span> ) {</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">		<span class="pl-k">return</span> a.resolution <span class="pl-k">-</span> b.resolution;</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line"><span class="pl-c">	 * In IE9, &lt;source&gt; elements get removed if they aren&#39;t children of</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line"><span class="pl-c">	 * video elements. Thus, we conditionally wrap source elements</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line"><span class="pl-c">	 * using &lt;!--[if IE 9]&gt;&lt;video style=&quot;display: none;&quot;&gt;&lt;![endif]--&gt;</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line"><span class="pl-c">	 * and must account for that here by moving those source elements</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line"><span class="pl-c">	 * back into the picture element.</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">removeVideoShim</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">picture</span> ) {</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">		<span class="pl-s">var</span> videos <span class="pl-k">=</span> picture.<span class="pl-s3">getElementsByTagName</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>video<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">		<span class="pl-k">if</span> ( videos.<span class="pl-sc">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">			<span class="pl-s">var</span> video <span class="pl-k">=</span> videos[ <span class="pl-c1">0</span> ],</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">				vsources <span class="pl-k">=</span> video.<span class="pl-s3">getElementsByTagName</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>source<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">			<span class="pl-k">while</span> ( vsources.<span class="pl-sc">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">				picture.<span class="pl-s3">insertBefore</span>( vsources[ <span class="pl-c1">0</span> ], video );</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">			<span class="pl-c">// Remove the video element once we&#39;re finished removing its children</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">			video.<span class="pl-sc">parentNode</span>.<span class="pl-s3">removeChild</span>( video );</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line"><span class="pl-c">	 * Find all `img` elements, and add them to the candidate list if they have</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line"><span class="pl-c">	 * a `picture` parent, a `sizes` attribute in basic `srcset` supporting browsers,</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line"><span class="pl-c">	 * a `srcset` attribute at all, and they haven’t been evaluated already.</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">getAllElements</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">		<span class="pl-s">var</span> elems <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">			imgs <span class="pl-k">=</span> doc.<span class="pl-s3">getElementsByTagName</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">		<span class="pl-k">for</span> ( <span class="pl-s">var</span> h <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> imgs.<span class="pl-sc">length</span>; h <span class="pl-k">&lt;</span> len; h<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">			<span class="pl-s">var</span> currImg <span class="pl-k">=</span> imgs[ h ];</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">			<span class="pl-k">if</span> ( currImg.<span class="pl-sc">parentNode</span>.<span class="pl-sc">nodeName</span>.<span class="pl-s3">toUpperCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PICTURE<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">			( currImg.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>srcset<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">!==</span> <span class="pl-c1">null</span> ) <span class="pl-k">||</span> currImg[ pf.ns ] <span class="pl-k">&amp;&amp;</span> currImg[ pf.ns ].srcset <span class="pl-k">!==</span> <span class="pl-c1">null</span> ) {</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">				elems.<span class="pl-s3">push</span>( currImg );</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">		<span class="pl-k">return</span> elems;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">	<span class="pl-s3">pf</span>.<span class="pl-en">getMatch</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">img</span>, <span class="pl-vpf">picture</span> ) {</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">		<span class="pl-s">var</span> sources <span class="pl-k">=</span> picture.<span class="pl-sc">childNodes</span>,</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">			match;</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">		<span class="pl-c">// Go through each child, and if they have media queries, evaluate them</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">		<span class="pl-k">for</span> ( <span class="pl-s">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>, slen <span class="pl-k">=</span> sources.<span class="pl-sc">length</span>; j <span class="pl-k">&lt;</span> slen; j<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">			<span class="pl-s">var</span> source <span class="pl-k">=</span> sources[ j ];</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">			<span class="pl-c">// ignore non-element nodes</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">			<span class="pl-k">if</span> ( source.<span class="pl-sc">nodeType</span> <span class="pl-k">!==</span> <span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">			<span class="pl-c">// Hitting the `img` element that started everything stops the search for `sources`.</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">			<span class="pl-c">// If no previous `source` matches, the `img` itself is evaluated later.</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">			<span class="pl-k">if</span> ( source <span class="pl-k">===</span> img ) {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">				<span class="pl-k">return</span> match;</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">			<span class="pl-c">// ignore non-`source` nodes</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">			<span class="pl-k">if</span> ( source.<span class="pl-sc">nodeName</span>.<span class="pl-s3">toUpperCase</span>() <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>SOURCE<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">			<span class="pl-c">// if it&#39;s a source element that has the `src` property set, throw a warning in the console</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">			<span class="pl-k">if</span> ( source.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span> ) <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-en">console</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> ) {</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">				<span class="pl-en">console</span><span class="pl-s3">.warn</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">			<span class="pl-s">var</span> media <span class="pl-k">=</span> source.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>media<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">			<span class="pl-c">// if source does not have a srcset attribute, skip</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>source.<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>srcset<span class="pl-pds">&quot;</span></span> ) ) {</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">			<span class="pl-c">// if there&#39;s no media specified, OR w.matchMedia is supported</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">			<span class="pl-k">if</span> ( ( <span class="pl-k">!</span>media <span class="pl-k">||</span> pf.matchesMedia( media ) ) ) {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">				<span class="pl-s">var</span> typeSupported <span class="pl-k">=</span> pf.verifyTypeSupport( source );</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">				<span class="pl-k">if</span> ( typeSupported <span class="pl-k">===</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">					match <span class="pl-k">=</span> source;</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> ( typeSupported <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>pending<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">		<span class="pl-k">return</span> match;</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">picturefill</span>( <span class="pl-vpf">opt</span> ) {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">		<span class="pl-s">var</span> elements,</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">			element,</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">			parent,</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">			firstMatch,</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">			candidates,</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">			options <span class="pl-k">=</span> opt <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">		elements <span class="pl-k">=</span> options.<span class="pl-sc">elements</span> <span class="pl-k">||</span> pf.getAllElements();</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">		<span class="pl-c">// Loop through all elements</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">		<span class="pl-k">for</span> ( <span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, plen <span class="pl-k">=</span> elements.<span class="pl-sc">length</span>; i <span class="pl-k">&lt;</span> plen; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">			element <span class="pl-k">=</span> elements[ i ];</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">			parent <span class="pl-k">=</span> element.<span class="pl-sc">parentNode</span>;</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">			firstMatch <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">			candidates <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">			<span class="pl-c">// immediately skip non-`img` nodes</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">			<span class="pl-k">if</span> ( element.<span class="pl-sc">nodeName</span>.<span class="pl-s3">toUpperCase</span>() <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>IMG<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">			<span class="pl-c">// expando for caching data on the img</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>element[ pf.ns ] ) {</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">				element[ pf.ns ] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">			<span class="pl-c">// if the element has already been evaluated, skip it unless</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">			<span class="pl-c">// `options.reevaluate` is set to true ( this, for example,</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">			<span class="pl-c">// is set to true when running `picturefill` on `resize` ).</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>options.reevaluate <span class="pl-k">&amp;&amp;</span> element[ pf.ns ].evaluated ) {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">				<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">			<span class="pl-c">// if `img` is in a `picture` element</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">			<span class="pl-k">if</span> ( parent.<span class="pl-sc">nodeName</span>.<span class="pl-s3">toUpperCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PICTURE<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">				<span class="pl-c">// IE9 video workaround</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">				pf.removeVideoShim( parent );</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">				<span class="pl-c">// return the first match which might undefined</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">				<span class="pl-c">// returns false if there is a pending source</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">				<span class="pl-c">// TODO the return type here is brutal, cleanup</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">				firstMatch <span class="pl-k">=</span> pf.getMatch( element, parent );</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">				<span class="pl-c">// if any sources are pending in this picture due to async type test(s)</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">				<span class="pl-c">// remove the evaluated attr and skip for now ( the pending test will</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">				<span class="pl-c">// rerun picturefill on this element when complete)</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">				<span class="pl-k">if</span> ( firstMatch <span class="pl-k">===</span> <span class="pl-c1">false</span> ) {</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">					<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">				firstMatch <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">			<span class="pl-c">// Cache and remove `srcset` if present and we’re going to be doing `picture`/`srcset`/`sizes` polyfilling to it.</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line">			<span class="pl-k">if</span> ( parent.<span class="pl-sc">nodeName</span>.<span class="pl-s3">toUpperCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PICTURE<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">			( element.srcset <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>pf.srcsetSupported ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">			( <span class="pl-k">!</span>pf.sizesSupported <span class="pl-k">&amp;&amp;</span> ( element.srcset <span class="pl-k">&amp;&amp;</span> element.srcset.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>w<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) ) ) {</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">				pf.dodgeSrcset( element );</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">			<span class="pl-k">if</span> ( firstMatch ) {</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">				candidates <span class="pl-k">=</span> pf.processSourceSet( firstMatch );</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">				pf.applyBestCandidate( candidates, element );</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">				<span class="pl-c">// No sources matched, so we’re down to processing the inner `img` as a source.</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">				candidates <span class="pl-k">=</span> pf.processSourceSet( element );</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">				<span class="pl-k">if</span> ( element.srcset <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> element[ pf.ns ].srcset ) {</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">					<span class="pl-c">// Either `srcset` is completely unsupported, or we need to polyfill `sizes` functionality.</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">					pf.applyBestCandidate( candidates, element );</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">				} <span class="pl-c">// Else, resolution-only `srcset` is supported natively.</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">			<span class="pl-c">// set evaluated to true to avoid unnecessary reparsing</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">			element[ pf.ns ].evaluated <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line"><span class="pl-c">	 * Sets up picture polyfill by polling the document and running</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line"><span class="pl-c">	 * the polyfill every 250ms until the document is ready.</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line"><span class="pl-c">	 * Also attaches picturefill on resize</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">runPicturefill</span>() {</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">		picturefill();</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">		<span class="pl-s">var</span> intervalId <span class="pl-k">=</span> <span class="pl-s3">setInterval</span>( <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">			<span class="pl-c">// When the document has finished loading, stop checking for new images</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">			<span class="pl-c">// https://github.com/ded/domready/blob/master/ready.js#L15</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">			picturefill();</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>loaded<span class="pl-k">|</span><span class="pl-k">^</span>i<span class="pl-k">|</span><span class="pl-k">^</span>c<span class="pl-pds">/</span></span>.<span class="pl-s3">test</span>( doc.<span class="pl-sc">readyState</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">				<span class="pl-s3">clearInterval</span>( intervalId );</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">		}, <span class="pl-c1">250</span> );</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">		<span class="pl-st">function</span> <span class="pl-en">checkResize</span>() {</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">			<span class="pl-s">var</span> resizeThrottle;</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>w._picturefillWorking ) {</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">				w._picturefillWorking <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">				w.<span class="pl-s3">clearTimeout</span>( resizeThrottle );</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">				resizeThrottle <span class="pl-k">=</span> w.<span class="pl-s3">setTimeout</span>( <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">					picturefill({ reevaluate<span class="pl-k">:</span> <span class="pl-c1">true</span> });</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">					w._picturefillWorking <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">				}, <span class="pl-c1">60</span> );</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">		<span class="pl-k">if</span> ( w.addEventListener ) {</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">			w.addEventListener( <span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>, checkResize, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> ( w.attachEvent ) {</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">			w.<span class="pl-s3">attachEvent</span>( <span class="pl-s1"><span class="pl-pds">&quot;</span>onresize<span class="pl-pds">&quot;</span></span>, checkResize );</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">	runPicturefill();</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">	<span class="pl-c">/* expose methods for testing */</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">	picturefill._ <span class="pl-k">=</span> pf;</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">	<span class="pl-c">/* expose picturefill */</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-sv">module</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-sv">module</span>.exports <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">		<span class="pl-c">// CommonJS, just export</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">		<span class="pl-sv">module</span>.exports <span class="pl-k">=</span> picturefill;</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> define.amd ) {</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">		<span class="pl-c">// AMD support</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">		define( <span class="pl-st">function</span>() { <span class="pl-k">return</span> picturefill; } );</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> w <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">		<span class="pl-c">// If no AMD and we are in the browser, attach to window</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">		w.picturefill <span class="pl-k">=</span> picturefill;</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">} )( <span class="pl-v">this</span>, <span class="pl-v">this</span>.<span class="pl-s3">document</span>, <span class="pl-k">new</span> <span class="pl-en">this.Image</span>() );</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07157s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ae2cfa52038a89e53f630873f978d91708f4387e3d9be2f39e4513f6a3461b44.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-5b37d01af290efac128f77035dbf0745b2dc7790fa4b7e39843b623e187c47d9.js"></script>
      
      

  </body>
</html>

