*
{
	margin:0px;
	padding:0px;
}
#menu ul
{
	list-style:none;
}
#menu ul li
{
	background-color:#d14841;
	margin:0px;
	border:4px solid white;
	width:150px;
	height:35px;
	text-align:center;
	line-height:35px;
	float:left;
	position:relative;
	border-radius:11px;
}
#menu ul li a
{
	text-decoration:none;
	color:white;
	display:block;
}

#menu ul li a:hover
{
	background-color:green;
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
