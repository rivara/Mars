@extends('layouts.app')

@section('content')


              
                 
<div class="container">
    <div class="row">
        <!-- VALIDATION -->
        <div class="col-md-12">
          
                    <div id="message" class="alert alert-danger  alert-dismissible" role="alert" >
                        Must be oltther tan 18 :(
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>     
                    </div>
           
                    <!-- <div id="message" class="alert alert-danger  alert-dismissible" role="alert" >
                    This apartament is reserved :(
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    </div>
              
                    <div id="message" class="alert alert-success  alert-dismissible" role="alert" >
                    The request must be approved :)
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    </div>
                   -->
        </div>  
        
         <!-- #VALIDATION -->
       <!-- APARTAMENT SEARCH--> 
       <div class="col-md-12">
                 <div id="example"></div>  
        </div>
       

   <!--# APARTAMENT SEARCH-->
   <div class="col-md-12">
                 <br>
        </div>

    <!-- APARTAMENT LIST-->
                <div class="col-md-3">
			        <div class="property-slider-wrap" >
						<div class="property-slider">
							<div class="property-item">
								<a href="property-single.html" class="img">
                                <img src="http://127.0.0.1:8000/storage/img/img_1.jpg" alt="Image" class="img-fluid">
                              
								</a>

								<div class="property-content">
									<div class="price mb-2"><span>$1,291,000</span></div>
									<div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<span class="city d-block mb-3">California, USA</span>

										<div class="specs d-flex mb-4">
											<span class="d-block d-flex align-items-center me-3">
												<span class="icon-bed me-2"></span>
												<span class="caption">2 beds</span>
											</span>
											<span class="d-block d-flex align-items-center">
												<span class="icon-bath me-2"></span>
												<span class="caption">2 baths</span>
											</span>
										</div>

										<a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
									</div>
								</div>
							</div> <!-- .item -->
                        </div>
                    </div>
                </div>
	
                <div class="col-md-3">
			        <div class="property-slider-wrap">
						<div class="property-slider">
							<div class="property-item">
								<a href="property-single.html" class="img">
									<img src="http://127.0.0.1:8000/storage/img/img_2.jpg" alt="Image" class="img-fluid">
								</a>

								<div class="property-content">
									<div class="price mb-2"><span>$1,291,000</span></div>
									<div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<span class="city d-block mb-3">California, USA</span>

										<div class="specs d-flex mb-4">
											<span class="d-block d-flex align-items-center me-3">
												<span class="icon-bed me-2"></span>
												<span class="caption">2 beds</span>
											</span>
											<span class="d-block d-flex align-items-center">
												<span class="icon-bath me-2"></span>
												<span class="caption">2 baths</span>
											</span>
										</div>

										<a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
									</div>
								</div>
							</div> <!-- .item -->
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
			        <div class="property-slider-wrap">
						<div class="property-slider">
							<div class="property-item">
								<a href="property-single.html" class="img">
									<img src="http://127.0.0.1:8000/storage/img/img_3.jpg" alt="Image" class="img-fluid">
								</a>

								<div class="property-content">
									<div class="price mb-2"><span>$1,291,000</span></div>
									<div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<span class="city d-block mb-3">California, USA</span>

										<div class="specs d-flex mb-4">
											<span class="d-block d-flex align-items-center me-3">
												<span class="icon-bed me-2"></span>
												<span class="caption">2 beds</span>
											</span>
											<span class="d-block d-flex align-items-center">
												<span class="icon-bath me-2"></span>
												<span class="caption">2 baths</span>
											</span>
										</div>

										<a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
									</div>
								</div>
							</div> <!-- .item -->
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
			        <div class="property-slider-wrap">
						<div class="property-slider">
							<div class="property-item">
								<a href="property-single.html" class="img">
									<img src="http://127.0.0.1:8000/storage/img/img_4.jpg" alt="Image" class="img-fluid">
								</a>

								<div class="property-content">
									<div class="price mb-2"><span>$1,291,000</span></div>
									<div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<span class="city d-block mb-3">California, USA</span>

										<div class="specs d-flex mb-4">
											<span class="d-block d-flex align-items-center me-3">
												<span class="icon-bed me-2"></span>
												<span class="caption">2 beds</span>
											</span>
											<span class="d-block d-flex align-items-center">
												<span class="icon-bath me-2"></span>
												<span class="caption">2 baths</span>
											</span>
										</div>

										<a href="property-single.html" class="btn btn-primary py-2 px-3">See details</a>
									</div>
								</div>
							</div> <!-- .item -->
                        </div>
                    </div>
                </div>
        <!-- APARTAMENT LIST-->
     

          
    </div>               
</div>



@endsection
