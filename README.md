# salmunoz dot com

> https://salmunoz.com

**Table of Contents**
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [development setup](#development-setup)
  - [required stuff](#required-stuff)
  - [development server](#development-server)
    - [first time setup](#first-time-setup)
    - [getting the latest files](#getting-the-latest-files)
    - [start the server](#start-the-server)
  - [editing content](#editing-content)
  - [editing layout](#editing-layout)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## setup

### required stuff

macOS or Linux recommended. [Here is a pretty solid setup guide][guide] (follow the instructions for Node.js and npm).

* Terminal
* [git][git] and [GitHub][github] account
* [Node.js and npm][node]
  * Recommended: install Node via [homebrew][homebrew]
* A text editor
  * Recommended: [atom][atom]

### development server

A local development server allows you to preview your site as you work on it.

#### first time setup

Open `Terminal` and navigate (`cd`) to a directory where you'd like your projects to live, then:

1. `$ git clone PASTE_THE_REPOSITORY_URL_FROM_GITHUB` - Create a local directory for the site and copy the files from GitHub to your computer
2. `$ cd sal-munoz-dot-com` - Navigate your terminal to the newly cloned repository
3. `$ npm install` - Install all the project's dependencies; could take a few minutes

#### getting the latest files

Open `Terminal` and navigate to the `sal-munoz-dot-com` directory, then:

1. `$ git pull` - Pulls the latest version of the site from github
2. `$ npm install` - Installs any new dependencies (only needed if `git pull` updates the file called `package.json`)

#### start the server

Open `Terminal` and navigate to the `sal-munoz-dot-com` directory, then:

1. `$ npm start` - Run the `start` script that launches the dev server
2. Navigate your browser to http://localhost:9966 to open the site preview
3. To stop the server, open the Terminal window where you ran `npm start` and type `ctrl + c`

### editing content

### editing layout


[setup]: http://burnedpixel.com/blog/beginners-setup-guide-for-ruby-node-git-github-on-your-mac/
[git]: https://git-scm.com/
[github]: https://github.com
[node]: https://nodejs.org
[homebrew]: http://brew.sh
[atom]: https://atom.io
