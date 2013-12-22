LRED
====

LRED (Like, Reblog, Edit, Delete) is a javascript plugin for your Tumblr that adds Like, Reblog, Edit and Delete buttons under each of your posts. This may be useful when doing mass post editing, or to avoid having users click into the permalink page in order to like or reblog your post.

Screenshots
-----------

### Visitors
This is what the plugin looks like to the visitors on your blog.
![Visitor Screenshot](screenshots/visitor.jpg?raw=true "What visitors see.")

### You
This is what the plugin looks like to you, the owner of the blog.
![Visitor Screenshot](screenshots/owner.jpg?raw=true "What you see.")

Installation
------------

### Step 1 
Add the following code to your Tumblr theme, right before the `</head>` tag.
```html
<script type="text/javascript" src="http://little-vince.tumblr.com/lred.js"></script>
```
### Step 2
Place the following code somewhere between the `{block:Date}` and `{/block:Date}` tags. If you have more than one set of those tags then you will need to work out which one is best to put it in.
```html
<div class="reblogframe">
  <iframe id="share{PostID}" scrolling="no" width="100%" height="25px" frameborder="0"></iframe>
  <script type="text/javascript">document.getElementById("share{PostID}").src=vince("{ReblogURL}","{Permalink}")</script>
</div> 
```

Remarks
-------
This script uses code from [yonishin's reblog button script](http://snipt.net/yonishin/add-a-reblog-button-or-html-link-to-tumblr-theme-javascript-html/) which was written before the addition of the ReblogURL tag.

Author
------

[little-vince](http://www.little-vince.tumblr.com)

Copyright
---------

Copyright 2013 little-vince
