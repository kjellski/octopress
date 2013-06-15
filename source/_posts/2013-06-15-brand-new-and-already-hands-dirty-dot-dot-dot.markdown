---
layout: post
title: "brand new and already hands dirty..."
date: 2013-06-15 18:09
comments: true
categories: 
- octopress
- design
- setup
- blogging
---

I've been willing to blog since a pretty long time now, but I just never started doing it for sure. I think part of the problem was that I always felt that it is the wrong way to be bound to an online form where you have to type in your text and press preview again and again. Right now I'm starting to write this post in my favorite editor and this already makes more sense to me then anything I've tried before. 

Maybe octopress is finally getting me to blog.

First things first, about the setup process:

1. Go to [octopress.org](http://octopress.org) and follow the getting started guide.
2. Choose your theme, there are plenty of really good looking themes right there on the octopress [GitHub page for themes](https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes). I would like to recommend forking the themes of others just to make sure you've control over the styles you're using. I've used submodules instead of clones, this way you would not include the nested repos and it was a good time to dig deeper into how that works in git: 
    
    ```git submodule add <git-url> .themes/<theme-name>``` 

    I've set up the themes I consider using as submodules and will most likely modify [cleanpress](https://github.com/macjasp/cleanpress) to my need. What I don't like at the first glance is that is doesn't integrate the default features of octopress, like including github repos and twitter handles etc.

3. I set up livereload and you should too. This is super handy in getting comfy with octopress. You'll see the benefits after the first few filesaves. [This acticle](http://www.erikzaadi.com/2012/09/16/using-live-reload-with-octopress/) explains how to do that. One addition would be to use 
    
    ```rake generate && rake preview```
     
    instead of 
    
    ```rake generate && rake watch```
    
    since the watch is not starting a webserver...

4. Adding Plugins to your installation in order to use the features you'll want ot have... this one I've not really figured out yet. I'll post on this once I've figured it out.

5. I would also like to change the colortheme of the code highlighting my theme is using. I'll write about that too.

6. Deployment is most likely what you're reading right now(or you've stolen my laptop, are a nerd too and started my local octopress server... if so: do something usefull with this machine!). I'll host this on GitHub. Since I'll most likely not stay with the server I'm currently using to redirect here.


And that's about it. This is my first post. All things tested?

Nope, image, video and snipped left: 

* Images, here were the first problems. Somehow there is not clean solution to this I feel. I've just thrown a pics folder into the source dir to get this right. Maybe this will be cleaned up someday. Whatever, here's the image:
{% imgcap pics/pics/bundle_install_mac.png bundle install on mac... not joking here! %}

btw. for having the text below the image, I've installed the [image_caption_tag.rb](http://blog.zerosharp.com/image-captions-for-octopress/)

* Video, here we go, super easy: 
{% video http://s3.imathis.com/video/zero-to-fancy-buttons.mp4 640 320 http://s3.imathis.com/video/zero-to-fancy-buttons.png %}

* The last part, here is some code from a [codepen.io](http://codepen.io/kjellski):
{% include_code lang:coffeescript hexagon.coffee %}

* This is a little addon, here I've just included the [octopress-codepen](https://github.com/riddla/octopress-codepen) into my plugins folder... it starts to get easier to include these.
{% codepen rBJsf kjellski %}