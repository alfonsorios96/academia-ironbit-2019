<?php 
/*define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','contabilidadpfcaf');*/

define('HOST','localhost');
define('USER','dicsscom_eduardo');
define('PASS','Upiicsa1990');
define('DB','dicsscom_dicss_proceso');
//include "manager/production/js/conectpoo.php";

$con6 = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
$sql6 = "SELECT * FROM `noticias` order by `id_noticias` desc limit 5";
$resultado6 = mysqli_query($con6,$sql6);
if($resultado6){
    $varnoticias ="";
    while ($reg6= @mysqli_fetch_assoc($resultado6)){
            $id_noticias = $reg6["id_noticias"];
            $noticia = $reg6["noticia"];
            $categoria = $reg6["categoria"];//titulo
            $imagen = $reg6["imagen"];
            $fecha = $reg6["fecha"];
            $archivo = $reg6["archivo"];
            $noticia = substr($noticia, 0, 220); 

            $varnoticias.=<<<rtn
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="single-blog">
                <div class="single-blog-img">
                      <img src="img/blog/$imagen" alt="">
                </div>
                <div class="blog-meta">
                <!--<span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">11 comments</a>
                      </span>-->
                  <span class="date-type">
                      <i class="fa fa-calendar"></i>$fecha
                  </span>
                </div>
                <div class="blog-text">
                    <h4>
                      $categoria
                    </h4>
                  <p>
                    $noticia
                  </p>
                </div>
                <span>
                    <a href="noticia.php?id_noticia=$id_noticias" class="ready-btn">leer más</a>
                  </span>
              </div>
            </div>
rtn;

      
      }
  }

$con7 = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
$sql7 = "SELECT * FROM `noticias` order by `id_noticias` desc limit 5";
$resultado7 = mysqli_query($con7,$sql7);
if($resultado7){
    $varnoticias7 ="";
    while ($reg7= @mysqli_fetch_assoc($resultado7)){
            $id_noticias = $reg7["id_noticias"];
            $noticia = $reg7["noticia"];
            $categoria = $reg7["categoria"];//titulo
            $imagen = $reg7["imagen"];
            $fecha = $reg7["fecha"];
            $archivo = $reg7["archivo"];
            $keywords = $reg7["keywords"];
            //$noticia = substr($noticia, 0, 220); 

            $varnoticias7.=<<<rtn
            <div class="recent-single-post">
              <div class="post-img">
                <a href="#">
                     <img src="img/blog/$imagen" alt="">
                  </a>
              </div>
              <div class="pst-content">
                <p><a href="noticia.php?id_noticia=$id_noticias"> $categoria.<br>$fecha</a></p>
              </div>
            </div>
rtn;
      }
  }

$urldeinteres="";
$conlink = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
$sqllink = "SELECT * FROM `linksdeinteres`";
$resultadolink = mysqli_query($conlink,$sqllink);
if($resultadolink){
    while ($reglink= @mysqli_fetch_assoc($resultadolink)){
            $id_linksdeinteres = $reglink["id_linksdeinteres"];
            $nombre = $reglink["nombre"];
            $link = $reglink["link"];
            $fecha = $reglink["fecha"];

            $urldeinteres.=<<<sss
<a target="_blank" href="$link">$nombre</a><br>
sss;
    }
}
$noticias =<<<klm
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Noticias</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta name="robots" content="index">
  
  <meta name="keywords" content="Pagina Web, Desarrollo de Software, ERP, CRM, Punto de Venta, E-comerce">
  <meta name="description" content="Pagina Web, Desarrollo de Software, ERP, CRM, Punto de Venta, E-comerce">
  
  <!-- Favicons -->
  <link rel="shortcut icon" href="img/icono.ico">

  <!-- Google Fonts -->
  <!--<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900" rel="stylesheet">-->
  <link href="css/fonts.css" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/nivo-slider/css/nivo-slider.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.carousel.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.transitions.css" rel="stylesheet">
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/venobox/venobox.css" rel="stylesheet">

  <!-- Nivo Slider Theme -->
  <link href="css/nivo-slider-theme.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">

  <!-- Responsive Stylesheet File -->
  <link href="css/responsive.css" rel="stylesheet">
  <script>
         /*window.fbAsyncInit = function() {
          FB.init({
            appId      : '{663180073864619}',
            cookie     : true,
            xfbml      : true,
            version    : '{latest-api-version}'
          });
            
          FB.AppEvents.logPageView();   
            
        };*/
       (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = 663180073864619;
            js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.9&appId=663180073864619";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
</script>
</head>

<body data-spy="scroll" data-target="#navbar-example">

  <div id="preloader"></div>

  <header>
    <!-- header-area start -->
    <div id="sticker" class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">

            <!-- Navigation -->
            <nav class="navbar navbar-default">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
                <!-- Brand -->
                <a class="navbar-brand page-scroll sticky-logo" href="index.php">
                  <!--<h1><small><span>Dicss </span> Desarrollo</small></h1>-->
                  <img src="img/logodicss.png" alt="" width="50" height="50">
                  <!-- Uncomment below if you prefer to use an image logo -->
                  <!--<img src="img/logo2.jpg" alt="" title="">-->
                </a>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                <ul class="nav navbar-nav navbar-right">
                  <li >
                    <a class="page-scroll" href="http://dicss.com.mx/"><strong>Inicio</strong></a>
                  </li>
                  <li>
                    <a class="page-scroll" href="http://dicss.com.mx/#services"><strong>Servicios</strong></a>
                  </li>
                  <li>
                    <a class="page-scroll" href="http://dicss.com.mx/#about"><strong>Nosotros</strong></a>
                  </li>
                  <li>
                    <a class="page-scroll" href="http://dicss.com.mx/#Noticias"><strong>Noticias</strong></a>
                  </li>
                  <li>
                    <a class="page-scroll" href="http://dicss.com.mx/#team"><strong>Facebook</strong></a>
                  </li>
                  <li>
                    <a class="page-scroll" href="http://dicss.com.mx/#contact"><strong>Contacto</strong></a>
                  </li>
                  <li>
                    <a class="page-scroll" target="_blank" href="manager/"><strong>Entrar</strong></a>
                  </li>
                  
                </ul>
              </div>
              <!-- navbar-collapse -->
            </nav>
            <!-- END: Navigation -->
          </div>
        </div>
      </div>
    </div>
    <!-- header-area end -->
  </header>
  <!-- header end -->

  <!-- Start Bottom Header -->
  <!--<div class="header-bg page-area">
    <div class="home-overly"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="slider-content text-center">
            <div class="header-bottom">
              <div class="layer2 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                  <h1 class="title2"><span>DICSS</span> Desarrollo</h1>
              </div>
              <div class="layer3 wow zoomInUp" data-wow-duration="2s" data-wow-delay="1s">
                <h2 class="title3">Nuestras noticias</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <div id="home" class="slider-area">
    <div class="bend niceties preview-2">
      <div id="ensign-nivoslider" class="slides">
        <img src="img/oficinadicss.jpeg" alt="" title="#slider-direction-1" width="80" height="80"/>
      </div>
      <div id="slider-direction-1" class="slider-direction slider-one">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="slider-content">
                        <!-- layer 1 -->
                        <div class="header-bottom">
                        <div class="layer2 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                          <h1 class="title2"><span>DICSS</span> Desarrollo</h1>
                        </div>
                             <div class="layer3 wow zoomInUp" data-wow-duration="2s" data-wow-delay="1s">
                                 <h2 class="title3">Nuestras noticias</h2>
                             </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  </div>
  <!-- END Header -->
  <div class="blog-page area-padding">
    <div class="container">
      <div class="row">
        
        <!-- Start single blog -->
        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <div id="resultadodebusqueda">
              $varnoticias
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="page-head-blog">
            <div class="single-blog-page">
              <!-- search option start -->
              <form action="#">
                <div class="search-option">
                  <input type="text" placeholder="Buscar..." id="textoabuscar">
                  <button class="button" type="button" onclick="hacerbusqueda()">
                      <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
              <!-- search option end -->
            </div>
            <div class="single-blog-page">
              <!-- recent start -->
              <div class="left-blog">
                <h4>Publicaciones recientes.</h4>
                <div class="recent-post">
                  <!-- start single post -->
                  $varnoticias7
                  
                </div>
                <div class="col-md-12">
                    <div class="fb-page" data-href="https://www.facebook.com/DicssDesarrollo/" data-tabs="timeline" data-width="50000" data-height="590" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/DicssDesarrollo/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/DicssDesarrollo/">DICSS</a></blockquote></div>
                </div>
              </div>
              <!-- recent end -->
            </div>
            
          </div>
        </div>
        <!-- End left sidebar -->
      </div>
    </div>
  </div>
  <!-- End Blog Area -->

  <div class="clearfix"></div>

  <!-- Start Footer bottom Area -->
  <footer>
    <div class="footer-area">
      <div class="container">
        <div class="row">
           <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="footer-content">
              <div class="footer-head">
                <center>
                <div class="footer-logo">
                  <img src="img/logodicss.png" alt="" width="100" height="100">

                </div>
                
                <p>Buscanos en nuestras redes sociales.</p>
                <div class="footer-icons">
                  <ul>
                    <li>
                     <a  target="_blank" href="https://www.facebook.com/DicssDesarrollo/"><i class="fa fa-facebook">  </i></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://mx.linkedin.com/company/dicss"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>

                  DICSS DESARROLLO<br>
                  5575749547
                </div>
                </center>
              </div>
            </div>
          </div>
          <!-- end single footer -->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="footer-content">
              <div class="footer-head">
              <center>

                <h3>Más información en:</h3>
                <p><h4>
                  <!--<a target="_blank" href="https://api.whatsapp.com/send?phone=525527578430&amp;text=Solicito informes de:" title="Click para enviar mensaje"><i class="fa fa-whatsapp"></i>
                    David Hernandez.<br><small>dhernandez@dicss.com.mx</small>
                  </a>
                  <br>-->
                  <br>

                  <a target="_blank" href="https://api.whatsapp.com/send?phone=525514001890&amp;text=Solicito informes de:" title="Click para enviar mensaje"><i class="fa fa-whatsapp"></i>
                    Erick Serrato.<br><small>eserrato@dicss.com.mx</small>
                  </a>
                  <br>
                  <br>

                  <a target="_blank" href="https://api.whatsapp.com/send?phone=525554054792&amp;text=Solicito informes de:" title="Click para enviar mensaje"><i class="fa fa-whatsapp"></i>
                    Eduardo Ramírez.<br><small>eduardor@dicss.com.mx</small>
                  </a>
                  <br>
                  </h4>
                </p>
                <div class="footer-contacts">
                  <p><span>Tel:</span> 55-75-74-95-47</p>
                  <!--<p><span>Email:</span> contact@example.com</p>-->

                </div>
              </center>
              </div>
            </div>
          </div>
          <!-- end single footer -->
        </div>
      </div>
    </div>
    <div class="footer-area-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="copyright text-center">
              <p>
                &copy; by <strong>http://dicss.com.mx</strong>
              </p>
            </div>
            <div class="credits">
              Designed by <a target="_blanck" href="https://dicss.com.mx"><strong>dicss.com.mx</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/venobox/venobox.min.js"></script>
  <script src="lib/knob/jquery.knob.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/parallax/parallax.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/nivo-slider/js/jquery.nivo.slider.js" type="text/javascript"></script>
  <script src="lib/appear/jquery.appear.js"></script>
  <script src="lib/isotope/isotope.pkgd.min.js"></script>
  <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcu57jrSRVa3DNs3QEy1E6pJkdlOlPoWs"></script>-->

  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>

  <script src="js/main.js"></script>
  <script>
  function hacerbusqueda(){
  var busqueda = $("#textoabuscar").val();
    $.get("manager/core_update.php", {op:'damenoticiabuscada', busqueda:busqueda}, function(respuesta){
      $("#resultadodebusqueda").html(respuesta);
    });
  }
  </script>
</body>

</html>
klm;
echo $noticias
?>