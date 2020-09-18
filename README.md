
<!-- Created By Zegham -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Responsive Drop-down Menu Bar</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <nav>
      <div class="logo">
Customise IoT Solutions</div>
<label for="btn" class="icon">
        <span class="fa fa-bars"></span>
      </label>
      <input type="checkbox" id="btn">
      <ul>
<li><a href="#">Home</a></li>
<li>
          <label for="btn-1" class="show"> Services +</label>
          <a href="#">Features</a>
          <input type="checkbox" id="btn-1">
          <ul>
<li><a href="#">Pages</a></li>
<li><a href="#">Elements</a></li>
<li><a href="#">Icons</a></li>
</ul>
</li>
<li>
          <label for="btn-2" class="show">Products +</label>
          <a href="#">Services</a>
          <input type="checkbox" id="btn-2">
          <ul>
<li><a href="#">Electronics</a></li>
<li><a href="#">Software</a></li>
<li>
              <label for="btn-3" class="show">Automation +</label>
              <a href="#">More <span class="fa fa-plus"></span></a>
              <input type="checkbox" id="btn-3">
              <ul>
<li><a href="#">industery</a></li>
<li><a href="#">power</a></li>
<li><a href="#">Security</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#">Portfolio</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
    <div class="content">
      <header>Responsive Drop-down Menu Bar</header>
      <p>
HTML and CSS (Media Query)</p>
</div>
<script>
      $('.icon').click(function(){
        $('span').toggleClass("cancel");
      });
    </script>

  </body>
</html>
