---
layout: post
title: "from out of the box to custom, and beyond..."
date: 2013-06-16 09:02
comments: true
categories: 
- octopress
- design
- setup
- blogging
- css
- scss
- custom
---
This post has two parts, the intro for what has been done and the Meat part that contains the usefull stuff.

# Intro #

Yesterday, my first day with octopress, I went to bed after a few hours of setup, looking arround and doing each step at least once. I've [heard about](http://adam.pohorecki.pl/blog/2012/01/17/octopress-the-good-the-bad-and-the-ugly/) the biggest problem of octopress blogs is that they look all the same.

Let me get this through the door first: **I'm no designer, I've got no idea where this takes me, but I will today try to modify my blog to let it look like something that is not the default. **

I've setup the <strike>default theme</strike>, <strike>[cleanpress theme](https://github.com/kjellski/cleanpress)</strike>, [slash](https://github.com/kjellski/Octopress-Theme-Slash) and want to modify it. 

From here on, this post is just about what I found out about the concept in octopress and how the layout used can be modified to your needs:

* To change the default theme, just ```rake install['themename']``` and you've got another theme all over your blog.
* The folder inside octopress do make sense, but I feel like you can have your own setup all arround(I'll stay with the basics):
    
{% codeblock layout of the octopress folder structure %}
/ <-- root folder of your octopress copy 
 |
 \-- _deploy  # the folder that you deploy on gh-pages
 |
 \-- plugins  # just drop in some ruby code and have new elements/features
 |   \-- .    # you can drop helpers and tag generators here, maybe I'll
 |            # write about this sometime...
 |
 \-- public   # contains the generated site itself, wiped at "rake generate"
 |
 \-- sass         # the styles folder, my home for today
 |                # default styles for the site(e.g. base/_colors.scss for background)
 |
 \-- source       # this is the folder where the source for the jekyll locates
 |                
 |
 \-- _config.yml  # main config (jekyll's settings / sidebars etc )
 \-- Rakefile     # deployment configs
 \-- config.rb    # compass config
 \-- config.ru    # rack config
{% endcodeblock %}

There is plenty of documentation out there if you want to dive deeper.

# Meat #
First off, this theme has no sibars, no github project includes no nothing. That sucks, but I like the typo. Here we go:

### Including a GitHub Repo section:
I would like to show a section right beneath the header that contains the ```overflow-x```*-scrollable* content of github repos.

### Refactoring the GitHub section to be usable for all the upper buttons.

Okay, I've done it. But it took me an evening to get into the depths of CSS. This is quite new to me and I'm sometimes frustrated. Fortunately, a good friend of mine, also freelance developer, [@matthiasvogt](http://twitter.com/matthiasvogt) helps me when I struggle. Thanks to you buddy, maybe you'll read this one day ;)

The subtitle bar is currently not animated or something. I'll write another post about getting the animation in place and make it more generic. I would like to be able to also show badges and tweets in there. We'll see how this works out.