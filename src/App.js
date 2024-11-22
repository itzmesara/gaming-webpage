import './App.css'

function App()
{
  return(
    <div>
      <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">@company</h2>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">DESIGN</a></li>
                    <li><a href="#">CONTENT</a></li>
                </ul>
            </div>
            <div class="search">
                <input class="srch"type="search" name="" placeholder="Type to text" />
                <a href="#"><button class="btn">Search</button></a>
            </div>
        </div>
        <div class="content">
            <h1>Web Design & <br /><span>Development</span><br />Course</h1>
            <p class="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nam accusamus, doloribus ut illum dolorem earum quas illo beatae, distinctio <br/>voluptatem minus possimus ex? Odio 
            <br/>distinctio nobis soluta pariatur culpa!</p>

            <button class="cn"><a href="#">JOIN US</a></button>
            <div class="dashboard">
                <h2>DashBoard</h2>
            </div>
        </div>
        <div class="copyright">
            <h3>&copy;2024 My Website</h3>
        </div>
    </div>
    </div>
  )
}

export default App;