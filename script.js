/*Orange color: #e67e22*/




/*-----------------------------*/
/* BASIC SET UP */
/*-----------------------------*/



*{
    margin:0;
    padding:0;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
}


.clearfix {zoom: 1}
.clearfix:after {
    content:'.';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}

/*-----------------------------*/
/* REUSABLE COMPONENTS */
/*-----------------------------*/


html,

body {

    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;

}



.row {
    max-width:1140px ;
    margin: 0 auto;
}

section {
    
    padding: 80px 0;
    
}
.box {
    padding:1%;
}

/*---- HEADINGS ----*/




h1,
h2, 
h3{
    
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    
}

h1{
    margin:0;
    margin-bottom: 20px;
    color: #fff;
    font-size:200%;
    word-spacing:4px;
}

h2{
    font-size:180%;
    word-spacing:2px;
    text-align:center;
    margin-bottom:30px;
    
}


h3{
    font-size:110%;
    margin-bottom: 15px;
}


h2:after{
    display:block;
    height: 2px;
    background-color:#e67e22;
    content:" ";
    width:100px;
    margin: 0 auto;
    margin-top: 30px;
}



.icon-small {
    display: inline-block;
    width: 30px;
    text-align: center;
    color: #e67e22;
    font-size: 120%;
    margin-right: 10px;
    
/*secrets to align text and icons*/
    line-height: 120%;
    vertical-align: middle;
    margin-top: -5px;
/* a negative margin top will pull icon to the top. take away space. */
   
}



/*------PARAGRAPHS-----*/

.long-copy {
    line-height:145%;
    width:70%;
    margin-left:15%;
}

.box p{
    font-size:90%;
    line-height: 145%;
}



/*------ICONS-----*/

.icon-big{
    font-size:350%;
    display: block;
    color: #e67e22;
    margin-bottom:10px;
}



/*------LINKS-----*/

a:link,
a:hover {
    text-decoration: none;
    color: #e67e22;
    padding-bottom: 1px;
    border-bottom: 1px solid #e67e22;
}

a:hover,
a:active {
    color: #555;
    border-bottom: 1px solid transparent;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    border-bottom: 2px;
    
}

/*------BUTTONS-----*/


.btn:link,
.btn:visited,
input[type=submit]{
    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration:none;
    border-radius: 200px;
    -webkit-transition:background-color 0.2s, border 0.2s, color 0.2s;
    -o-transition:background-color 0.2s, border 0.2s, color 0.2s;
    transition:background-color 0.2s, border 0.2s, color 0.2s; 
    
}

.btn-full:link,
.btn-full:visited,
input[type=submit]{
    background-color: #e67e22;
    border: 1px solid #e67e22; 
    color: #fff;
    margin-right: 15px;
}

.btn-ghost:link,
.btn-ghost:visited {
    border: 1px solid ;
    color: #e67e22;
}


.btn:hover,
.btn:active,
input[type=submit]:hover,
input[type=submit]:active {
    background-color: #cf6d17;
}


.btn-full:hover,
.btn-full:active,
input[type=submit]{
    border: 1px solid #cf6d17;   
}

.btn-ghost:hover,
.btn-ghost:active {
    border: 1px solid #cf6d17;
    color: #fff;
}

/*----------------------*/
/*HEADER*/
/*----------------------*/


header {
    background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0.7)),to(rgba(0, 0, 0, 0.7))),url(img/hero.jpg);
    background-image:-webkit-linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(img/hero.jpg);
    background-image:-o-linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(img/hero.jpg);
    background-image:linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(img/hero.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
}


.hero-text-box {
    position:absolute;
    width:1140px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);

}

.logo {
    height:100px;
    width:auto;
    float:left;
    margin-top: 20px;
}

.logo-black {
    display:none;
    height: 45px;
    width: auto;
    float: left;
    margin: 5px 0;
}


/* Main navi*/   

.main-nav {
    float:right;
    list-style:none;
    margin-top:55px;
}


.main-nav li {
    display:inline-block;
    margin-left:40px;
    
}


.main-nav li a:link,
.main-nav li a:visited {
    padding: 8px 0px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90%;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.3s;
    -o-transition: border-bottom 0.3s;
    transition: border-bottom 0.3s;
}

.main-nav li a:hover,
.main-nav li a:active {
    border-bottom: 2px solid #e67e22;
}


/* Mobile navi */

.mobile-nav-icon {
    float: right;
    margin-top: 30px;
    cursor: pointer;
    display: none;
}

.mobile-nav-icon i {
    font-size: 200%;
    color: #fff;
}

/* Sticky Navi */

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.98);
    -webkit-box-shadow: 0 2px 2px #efefef;
            box-shadow: 0 2px 2px #efefef;
    z-index: 9999;
    
}

.sticky .main-nav { margin-top: 18px;}

.sticky .main-nav li a:link,
.sticky .main-nav li a:visited {
    padding: 16px 0px;
    color: #555;
}

.sticky .logo { display: none;}

.sticky .logo-black { display: block;}


/*-----------------------------*/
/* FEATURES */
/*-----------------------------*/

.section-features .long-copy {
    margin-bottom: 30px;
}



/*-----------------------------*/
/* MEALS */
/*-----------------------------*/


.section-meals {
  padding:0;  
}


.meals-showcase{
    list-style: none;
    width:100%;
}

.meals-showcase li {
    display:block;
    float:left;
    width:25%;
      
}

.meal-photo{
    width:100%;
    margin:0;
    overflow:hidden;
    background-color: #000;
}

.meal-photo img {
    opacity: 0.7;
    width:100%;
    height:auto;
    -webkit-transform: scale(1.15);
        -ms-transform: scale(1.15);
            transform: scale(1.15);
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}

.meal-photo img:hover {
    opacity:1;
    -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
            transform: scale(1.03);
}


/*-----------------------------*/
/* HOW IT WORKS */
/*-----------------------------*/

.section-steps {
    background-color:#f4f4f4;
}

.steps-box:first-child {
    text-align:right;
    padding-right:3%;
    margin-top:30px;
}

.steps-box:last-child { 
    padding-left: 3%;
    margin-top: 70px;
} 

.app-screen {
    width: 40%;
}

.works-step {
    margin-bottom: 50px;   
    
}


.works-step:last-of-type {
    margin-bottom: 80px;
}

.works-step div {
    color: #e67e22;
    border: 2px solid #e67e22;
    display: inline-block;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    text-align: center;
    padding: 5px;
    float: left;
    font-size: 150%;
    margin-right: 25px;
}

.btn-app:link,
.btn-app:visited {
  border:0;  
}

.btn-app img {
    height: 50px;
    width: auto;
    margin-right: 10px;
}

/*-----------------------------*/
/* CITIES */
/*-----------------------------*/



.box img {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
}


.city-feature {
    margin-bottom: 5px;   
}


/*-----------------------------*/
/* TESTIMONIALS*/
/*-----------------------------*/


.section-testimonials{
    background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0.81)),to(rgba(0, 0, 0, 0.8))), url(img/back-customers.jpg);
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.81),rgba(0, 0, 0, 0.8)), url(img/back-customers.jpg);
    background-image: -o-linear-gradient(rgba(0, 0, 0, 0.81),rgba(0, 0, 0, 0.8)), url(img/back-customers.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.81),rgba(0, 0, 0, 0.8)), url(img/back-customers.jpg);
    background-size: cover;
    color:#fff;
    background-attachment: fixed;
    
}

blockquote{
    padding: 2%;
    font-style: italic;
    line-height: 145%;
    position: relative;
    margin-top:40px;
}

blockquote:before {
    content: "\201C";
    font-size: 500%;
    display: block;
    position:absolute;
    top: -5px;
    left: -5px;
    
}


cite {
    font-size: 90%;
    margin-top:25%;
    display: block;
    
}


cite img {
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
}

/*-----------------------------*/
/*SIGN UP*/
/*-----------------------------*/

.section-plans {
    background-color: #f4f4f4;
    
}

.plan-box {
    background-color: #fff;
    border-radius: 5px;
    width: 90%;
    margin-left: 5%;
    -webkit-box-shadow: 0 2px 2px #efefef;
            box-shadow: 0 2px 2px #efefef;
    
}

.plan-box div {
    padding: 15px;
    border-bottom: 1px solid #e8e8e8;
}


.plan-box div:first-child{
    background-color: #fcfcfc;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
       
}

.plan-box div:last-child {
    text-align:center;
    border:0;
}

.plan-price {
    font-size: 300%;
    margin-bottom: 10px;
    font-weight: 100;
    color: #e67e22;

}

.plan-price span {
    font-size: 30%;
    font-weight: 300;
}



.plan-price-meal{
    font-size: 80%;
    
}

.plan-box ul {
     list-style:none;
}


.plan ul li {
    padding: 5px 0;
    
}


/*-----------------------------*/
/*FORM*/
/*-----------------------------*/


.contact-form{
    width: 60%;
    margin: 0 auto;
}

input[type=text],
input[type=email],
select,
textarea {
    width:100%;
    padding: 7px;
    border-radius: 3px;
    border: 1px solid #ccc;
}


textarea{
    height: 100px;
}

input[type=checkbox]{
    margin: 10px 5px 10px 0;
}

*:focus {outline:none;}

/*-----------------------------*/
/*FOOTER*/
/*-----------------------------*/


footer {
    background-color: #333;
    padding: 50px;
    font-size: 80%;
    
}

.footer-nav {
    list-style: none;
    float: right;   
}

.social-links {
    list-style: none;
    float: left;
}

.footer-nav li,
.social-links li {
    display: inline-block;
    margin-right: 20px;   
}


.footer-nav li:last-child,
.social-links li:last-child {
    margin-right: 0;

}


.footer-nav li a:link,
.footer-nav li a:visited, 
.social-links li a:link, 
.social-links li a:visited {
    text-decoration: none;
    border: 0;
    color: #888;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
}



.footer-nav li a:hover,
.footer-nav li a:active {
    color: #ddd;
    
}

.social-links li a:link, 
.social-links li a:visited {
    font-size: 160%;
}

.ion-social-facebook,
.ion-social-twitter,
.ion-social-googleplus,
.ion-social-instagram {
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
}

.ion-social-facebook:hover{
    color: #3b5998;
}


.ion-social-twitter:hover{
    color: #00aced;
    
}

.ion-social-googleplus:hover{
    color: #dd4b39;
}

.ion-social-instagram:hover{
    color: #517fa4;
}


footer p {
    color: #888;
    text-align: center;
    margin-top: 20px;
}


/*-----------------------------*/
/*ANIMATIONS*/
/*-----------------------------*/

.js--wp-1,
.js--wp-2,
.js--wp-3 
{
    opacity: 0;
    -webkit-animation-duration: 1s;
            animation-duration: 1s;
    
}

.js--wp-4 {
    -webkit-animation-duration: 1s;
            animation-duration: 1s;
}

.js--wp-1.animated, 
.js--wp-2.animated, 
.js--wp-3.animated 
{
    opacity: 1;
}
