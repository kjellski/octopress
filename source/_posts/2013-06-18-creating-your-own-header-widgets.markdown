---
layout: post
title: "creating your own header widgets"
date: 2013-06-18 21:21
comments: true
categories: 
- octopress
- customization
- create_atops
- javascript
- css 
- design
- scss 
---

In this post I'll descibe how I'm trying to customize my own blog and how that can be done. As mentioned in [these](/blog/2013-06-15-brand-new-and-already-hands-dirty-dot-dot-dot.) [blog posts](/blog/2013-06-16-from-out-of-the-box-to-custom-and-beyond-dot-dot-dot), I've used a combination of the [slash](https://github.com/kjellski/Octopress-Theme-Slash), [foxslide](https://github.com/kjellski/foxslide) and [cleanpress](https://github.com/kjellski/cleanpress) themes to get a look at what is possible and stolen what I liked the most. All credit to them! The next step for me was to completely overhaul the blog to create a more personal look. 

I will try to show how I'm trying to get this done and will show here how I'm working on this.

This is part 1 of the ```create_atops``` series. In the upper left of the article, should be a tag that enables you to browse all the posts in this series.

### A flexible container "atops.html"

I would like to have at least one Wow(TM) effect on the page. And I would like to achieve this with the social buttons in the top. The idea is to create a horizontal area between the header and the content that is able to show content, based on what social icon was clicked(they should act as toggle switches like the sidebar in the standard theme). 

At first, I'll layout the area that should be shown and then I'll try to make it happen. I would like to call that ```atops```, because the ones that come with the default theme are called ```asides```. Ideally they are able to reuse the default ```asides``` but that is a bit of high as a goal. First things first, this post is about how the container should look and how we'll realize the whole creation of the content.

In octopress, it seems quite common to introduce parts of the website with a small include snippet. This is what I'll try to do too. To include the section which could be triggered however you want, include this somewhere between header and content(in my case, just bewteen header and content):

{% codeblock including the custom atops into your website(here: _layouts_default.html) lang:html %}
    ...
    <header id="header" class="class="inner>{% raw %}
    {% include custom/atops.html %}{% endraw %}
    <div id="content" class="inner">{% raw %}{{ content | expand_urls: root_url }}{% endraw %}</div>
    ...
{% endcodeblock %}

This just includes the file that is located in ```source/_includes/custom/atops.html```. To be able to correctly separate all the content that we want to show, I've also created a new folder that will hold all the differen ```atops``` here: ```source/_includes/custom/atops/[github|codewall|xyz].html```.

The [SCSS](http://sass-lang.com/) for it is located accordingly, under ```scss/custom/atops.scss```.

### the javascript of it

But how do we manage the javascript that should include and load this content? 