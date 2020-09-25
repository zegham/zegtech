
<style>
*{
padding:0px;
margin:0px;
}
body{
background-color:#fccccf;
}
#hamburger
{
text-align:center;
display:border;
border:1px solid green;
background-color:#fccccf;
width:120px;
height:35px;
border-radius:8px;
line-height:35px;
}
#menu{
width:100%;}
#menu ul
{
margin-left:0px;
list-style:none;
}
#menu ul ul li
{

background-color:black;
border:1px solid cyan;
width:120px;
height:35px;
line-height:35px;
text-align:center;
border-radius:8px;

position:relative;
}
#menu ul li a
{
text-decoration:none;
color:white;
display:block;
}
#menu ul li a:hover
{
background-color:black;
color:cyan;
border-radius:8px;
}
#menu ul ul
{
position:absolute;
display:none;
}
#menu ul li:hover>ul
{
display:block;
}
#menu ul ul ul
{
padding:0px;
margin:121px;
top:-121px;
}
</style>
<html>
<head>

</head>
<body>

<div id="menu">

<ul>
<li><a id="hamburger"><b>☰</b></a>
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Products  +</a>
  <ul>
  <li><a href="#">Electronics +</a>
  <ul>
       <li><a href="#">Home Security</a></li>
       <li><a href="#">Automation</a></li>
	   <li><a href="#">Automation</a></li>
	  <li><a href="#">Automation</a></li>
	</ul>
 </li>
   <li><a href="#">Automation +</a>
   <ul>
       <li><a href="#">Automation</a></li>
       <li><a href="#">Automation</a></li>
	   <li><a href="#">Automation</a></li>
	  <li><a href="#">Automation</a></li>
	</ul> 
   </li>
    <li><a href="#">Mobile +</a>
	 <ul>
       <li><a href="#">Automation</a></li>
       <li><a href="#">Automation</a></li>
	   <li><a href="#">Automation</a></li>
	  <li><a href="#">Automation</a></li>
	</ul>
	</li>
	 <li><a href="#">Software +</a>
	  <ul>
       <li><a href="#">Automation</a></li>
       <li><a href="#">Automation</a></li>
	   <li><a href="#">Automation</a></li>
	  <li><a href="#">Automation</a></li>
	</ul>
	 </li>
	 </ul>
        </li>
    <li><a href="#">Contact</a>
	 <ul>
       <li><a href="#">Whtapp</a></li>
       <li><a href="#">Map</a></li>
	   	 </ul>
	</li>
  <li><a href="tryit.asp-filename=tryhow_js_topnav.html#about">About</a></li>
  </li>
  </ul>
  </ul>
</div>
</body>

