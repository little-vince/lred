#LRED

LRED (Like, Reblog, Edit, Delete) is a javascript plugin for your Tumblr that adds Like, Reblog, Edit and Delete buttons under each of your posts. This may be useful when doing mass post editing, or to avoid having users click into the permalink page in order to like or reblog your post.

##Screenshots

### Visitors
This is what the plugin looks like to the visitors on your blog.
![Visitor Screenshot](screenshots/visitor.png?raw=true "What visitors see.")

### You
This is what the plugin looks like to you, the owner of the blog.
![Visitor Screenshot](screenshots/owner.png?raw=true "What you see.")

##Installation

### Step 1 
Add the following code to your Tumblr theme, right before the `</head>` tag.
```html
<script type="text/javascript" src="http://little-vince.tumblr.com/lred.js"></script>
```
### Step 2
Place the following code somewhere between the `{block:Date}` and `{/block:Date}` tags. If you have more than one set of those tags then you will need to work out which one is best to put it in.
```html
<div class="reblogframe">
  <iframe class="lred" scrolling="no" width="100%" height="25px" frameborder="0" data-plink="{Permalink}" data-reblog="{ReblogURL}"></iframe>
</div> 
```

##License

This script is released under the [MIT License](http://opensource.org/licenses/MIT).

##Copyright

Copyright (c) 2014 [little-vince](http://www.little-vince.tumblr.com)