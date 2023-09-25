<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        
        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/sass/app.scss', 'resources/js/app.js','resources/css/app.css'])
    </head>
    <body>
        <div  id="wrapping">
                <nav  class="navbar" >
                    <ul>
                        @auth
                            <li> <a class="nav-link"  href="{{ url('/home') }}" >Home</a></li>
                        @else
                            <li><a class="nav-link"  href="{{ route('login') }}">Log in</a></li>
                            @if (Route::has('register'))
                                <li> <a class="nav-link"  href="{{ route('register') }}">Register</a></li>
                            @endif
                        @endauth
                    </ul>
                </nav>
            </div>
        <br>
            
            <div id="hero">
         
                    <section class="d-flex flex-column justify-content-center align-items-center">
                        <div class="container text-center text-md-left" data-aos="fade-up">
                            <h1>Welcome </h1>
                        </div>
                    </section>
                </div>    
          
    </body>
</html>
