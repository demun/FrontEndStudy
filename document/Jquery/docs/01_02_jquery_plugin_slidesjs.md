# jQuery  slider plugin

## slidejs
http://slidesjs.com

### 사용법

```html
<!doctype html>
<head>
  <style>
    /* Prevents slides from flashing */
    #slides {
      display:none;
    }
  </style>

  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script src="jquery.slides.min.js"></script>

  <script>
    $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });
  </script>
</head>
<body>
  <div id="slides">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
  </div>
</body>
```

### 옵션

* width (number) & height (number)
Set width and height of the slideshow
 This must be defined.

* start (number)
Set the first slide in the slideshow.
 Default value is 1.

* navigation (object)
Next and previous button settings.

* pagination (object)
Pagination settings

* play (object)
Play and stop button setting.

* effect (object)
Effects setting.

* callback (function)
SlidesJS callbacks.
