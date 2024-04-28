<!DOCTYPE html>
<html lang="en-US">
    <head>
      <title>Shri Medishine Health Care & Research Center</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		 <meta name="keyword" content="">
        <meta name="description" content="">
        <?php
		include('include/head.php');
		?> 
    </head>
    <body>
        <main>
             <?php
                include('include/header.php');
            ?>
            <?php
                include('include/nav.php');
            ?>
            <article>
                <div class="main-contact bg-light">
                    <div class="cBox py-5">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-6">
                                <h2 class="display-4">
                                    <strong><b>Our Team &</b> <b class="primary-color">Doctors</b></strong>
                                </h2>
                            </div>
                            <div class="col-md-6">
                                <div class="text-end cBox1">
                                    <ul class="list-unstyled m-0">
                                        <li class="d-inline-block">
                                            <a href="index.php" class="text-decoration-none text-black btn primary-bg-color text-white"> Home</a>
                                        </li>
                                        <li class="d-inline-block">
                                            <a href="#" class="text-decoration-none text-black btn-danger btn text-white"> Doctors</a>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </article><!--end-doctors-us-->
            <article>
                <div class="mainDr py-5">
                    <div class="container">
                        <div class="row"  id="doctors">                           
                        </div><!--1-->
                    </div>
                </div>
            </article><!--end-dr-box-->           
            <?php
                include('include/footer.php');
            ?>
        </main>
		<script src="js/doctors.js"></script>
    </body>
</html>