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
                                    <strong><b>Contact</b> <b class="primary-color">Us</b></strong>
                                </h2>
                            </div>
                            <div class="col-md-6">
                                <div class="text-end cBox1">
                                    <ul class="list-unstyled m-0">
                                        <li class="d-inline-block">
                                            <a href="index.php" class="text-decoration-none text-black btn primary-bg-color text-white"> Home</a>
                                        </li>
                                        <li class="d-inline-block">
                                            <a href="#" class="text-decoration-none text-black btn-danger btn text-white"> Contact Us</a>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </article><!--end-contact-us-->
            <article>
                <div class="mainCform py-5">
                    <div class="container">
                        <div class="row box-box py-5">
                            <div class="col-md-8">
                                <div class="cform bg-black p-3">
                                    <h3 class="text-white px-3">Contact <b class="primary-color">Us</b></h3>
                                    <form>
										<p class="text-danger ps-3" id="ErronMsg"></p>
                                        <div class="d-flex m-2">
                                            <input type="text" Placeholder="Enter Your Name" class="form-control m-2" id="NameF">
                                        
                                            <input type="number" Placeholder="Enter Your Mobile No" class="form-control m-2" id="NumF">
                                        </div>
                                        <div class="d-flex m-2">
                                            <input type="Email" Placeholder="Enter Your Email" class="form-control m-2" id="Emailf">
                                        
                                            <input type="date" Placeholder="Enter Your Name" class="form-control m-2" id="DateF">
                                        </div>
                                        <div class="m-3">
                                            <textarea id="Problems" type="text" placeholder="Enter Your Message" class="form-control me-2"></textarea>
                                        </div>
                                        
                                    </form>
									<div class="m-3">
                                            <button class="btn primary-bg-color text-white" onclick="BookApp(NameF.value, NumF.value, Emailf.value, DateF.value, Problems.value)">Contact Us</button>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="boxContactDetails p-3">
                                    <h3><strong><b>Get</b> <b class="primary-color">In Touch!</b></strong></h3>
                                    <p>Shri Medishine Hospital is one of Central India's best multi-super specialty institutes located in Raipur, founded by Dr Susheel Shharmaa and Dr Rajesh Jain, the institution has been envisioned with the aim of bringing to India the highest standards of Medical Care along with Clinical Research, Education And Training.</p>
                                    <div class="drlist">
                                        
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#"  class="text-decoration-none text-black"><span class="	fa fa-map-marker primary-color"></span>&nbsp;New Rajendra Nagar, Amlidih Raipur (C.G.) - 492015</a>
                                            </li>
                                            <li>
                                                <a href="#"   class="text-decoration-none text-black"><span class="fa fa-phone primary-color"></span>&nbsp;0771-4222999</a>
                                            </li>
                                            <li>
                                                <a href="#"  class="text-decoration-none text-black "><span class="fa fa-phone primary-color"></span>&nbsp;4222909</a>
                                            </li>
                                            <li>
                                                <a href="#"  class="text-decoration-none text-black"><span class="fa fa-envelope primary-color"></span>&nbsp;medishine.health@gmail.com</a>
                                            </li>
                                            <li>
                                                <a href="#"  class="text-decoration-none text-black"><span class="	fa fa-globe primary-color"></span>&nbsp;www.medishinehealth.com</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article><!--end-contact-form-->
            <?php
                include('include/footer.php');
            ?>
        </main>
		 <script src="include/appointment.js"> </script>
    </body>
</html>