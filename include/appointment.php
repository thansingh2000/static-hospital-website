<article>
    <div class="main-appointment">
        <div class="d-flex">                        
            <div class="boxForm">
                <div class="img-box">
                    <figure>
                        <img src="img/05.jpg" alt="appointment">
                    </figure>
                </div>
            </div>
            <div class="boxForm bg-black text-white p-4">
                <div class="appointment-form">
                    <p>Book Appointment</p>
                    <h2 class="fs-1 hfont"><strong>Book An</strong> Appointment Now!</h2>
                    <p>
                    Shri Medishine Hospital is one of Central India's best multi-super specialty institutes located in Raipur, founded by Dr Susheel Shharmaa and Dr Rajesh Jain, the institution has been envisioned with the aim of bringing to India the highest standards of Medical Care along with Clinical Research, Education And Training.
                    </p>
                    <form class="row"> 
						<p class="text-danger" id="ErronMsg"></p>
                        <div class="col-md-6 mb-3">
                            <input type="text" placeholder="Enter Your Name" class="form-control" id="NameF" >
                        </div>
                        <div class="col-md-6  mb-3">
                            <input type="number" placeholder="Enter Your Mobile No" class="form-control" id="NumF">
                        </div>
                        <div class="col-md-6  mb-3">
                            <input type="Email" placeholder="Enter Your Email" class="form-control" id="Emailf">
                        </div>
                        <div class="col-md-6  mb-3">
                            <input type="Date"  class="form-control" id="DateF">
                        </div>
                        <div class=" mb-3">
                            <textarea  placeholder="Enter Your Problems" class="form-control" id="Problems"></textarea>
                        </div>                                    
                        
                    </form>
					<div>
                            <button  value="Book Appointment" class="appBtnD form-control primary-bg-color text-center text-white " onclick="BookApp(NameF.value, NumF.value, Emailf.value, DateF.value, Problems.value)">  Book Appointment</button>
                     </div>
                </div>
            </div>                        
        </div>
    </div>
    </article><!--end-book-appointment-->