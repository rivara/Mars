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
			<div class="col-md-6 offset-md-6 pb-4">
				<label>Options filter</label>
					<div id="example"></div>  
			</div>
		<!--# APARTAMENT SEARCH-->
        <!-- APARTAMENT LIST-->
           <!-- <div class="col-md-3">
			        <div class="property-slider-wrap" >
						<div class="property-slider">
							<div class="property-item">
                                <img src="http://127.0.0.1:8000/storage/img/img_1.jpg" alt="Image" class="img-fluid">
								<div class="property-content">
									<div class="price mb-2"><span>$1,291,000</span></div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<b>Items</b>
										<div class="container">
											<div class="row">
												<div class="col-md-4">
													<span class="caption">
														<span >#algo</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span>2 baths</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span >2 baths</span>
													</span>
												</div>	
												<div class="col-md-4">
													<span class="caption">
														<span >#algo</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span>2 baths</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span >2 baths</span>
													</span>
												</div>	
											</div>
										</div>
										<div class="mt-4 ml-10" >
											<a href="property-single.html" class="btn btn-house ">See details</a>
										</div>		
									</div>
								</div>
							</div> 
                        </div>
					</div>
					<div class="col-md-3">
						<div class="property-slider-wrap" >
							<div class="property-slider">
								<div class="property-item">
									<img src="http://127.0.0.1:8000/storage/img/img_2.jpg" alt="Image" class="img-fluid">
									<div class="property-content">
										<div class="price mb-2"><span>$1,291,000</span></div>
											<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
											<b>Items</b>
											<div class="container">
												<div class="row">
													<div class="col-md-4">
														<span class="caption">
															<span >#algo</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span>2 baths</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span >2 baths</span>
														</span>
													</div>	
													<div class="col-md-4">
														<span class="caption">
															<span >#algo</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span>2 baths</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span >2 baths</span>
														</span>
													</div>	
												</div>
											</div>
											<div class="mt-4 ml-10" >
												<a href="property-single.html" class="btn btn-house ">See details</a>
											</div>		
										</div>
									</div>
								</div> 
							</div>
					</div>
					<div class="col-md-3">
						<div class="property-slider-wrap" >
							<div class="property-slider">
								<div class="property-item">
									<img src="http://127.0.0.1:8000/storage/img/img_3.jpg" alt="Image" class="img-fluid">
									<div class="property-content">
										<div class="price mb-2"><span>$1,291,000</span></div>
											<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
											<b>Items</b>
											<div class="container">
												<div class="row">
													<div class="col-md-4">
														<span class="caption">
															<span >#algo</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span>2 baths</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span >2 baths</span>
														</span>
													</div>	
													<div class="col-md-4">
														<span class="caption">
															<span >#algo</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span>2 baths</span>
														</span>
													</div>
													<div  class="col-md-4">
														<span class="caption">
															<span >2 baths</span>
														</span>
													</div>	
												</div>
											</div>
											<div class="mt-4 ml-10" >
												<a href="property-single.html" class="btn btn-house ">See details</a>
											</div>		
										</div>
									</div>
								</div> 
							</div>
					</div>
					<div class="col-md-3">
			        <div class="property-slider-wrap" >
						<div class="property-slider">
							<div class="property-item">
                                <img src="http://127.0.0.1:8000/storage/img/img_4.jpg" alt="Image" class="img-fluid">
								<div class="property-content">
									<div class="price mb-2"><span>$1,291,000</span></div>
										<span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
										<b>Items</b>
										<div class="container">
											<div class="row">
												<div class="col-md-4">
													<span class="caption">
														<span >#algo</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span>2 baths</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span >2 baths</span>
													</span>
												</div>	
												<div class="col-md-4">
													<span class="caption">
														<span >#algo</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span>2 baths</span>
													</span>
												</div>
												<div  class="col-md-4">
													<span class="caption">
														<span >2 baths</span>
													</span>
												</div>	
											</div>
										</div>
										<div class="mt-4 ml-10" >
											<a href="property-single.html" class="btn btn-house ">See details</a>
										</div>		
									</div>
								</div>
							</div> 
                        </div>
					</div> -->
   		<!-- APARTAMENT LIST-->
		</div>               
	</div>
@endsection
