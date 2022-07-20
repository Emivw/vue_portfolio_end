<template>
        <nav id="sidebar">
          <div class="sidebar-header">
                            <div class="asideHeader-userInformations">
                        <img src="https://i.ibb.co/C89d23Q/269598916-3121818061469216-1410431572077788763-n.jpg" alt="" class="asideHeader-imgUserImage">
                        <h3 class="asideHeader-lblUserName">Emile Van Wyk</h3>
                        <div class="asideHeader-socialsBox">
                            <a href="https://www.facebook.com/blackbird2564/" target=”_blank” class="asideHeader-btnSocial"><i class="bi-facebook"></i></a>
                            <a href="https://www.instagram.com/just_emi_vw/" target=”_blank” class="asideHeader-btnSocial"><i class="bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/emile-van-wyk-561097209/" target=”_blank” class="asideHeader-btnSocial"><i class="bi-linkedin"></i></a>
                                          <a
                href="https://github.com/Emivw" target=”_blank”
                class="article"
                ><i class="bi bi-github"></i></a
              >
                        </div>
                    </div>
          </div>
    
          <ul class="list-unstyled components">
            <p>Welcome</p>
            <li class="active">
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
    
          <ul class="list-unstyled CTAs">
            <li>
              <a
                href="https://drive.google.com/file/d/1s6n2gbMQGMKqi6cXCGmOMBkOq-JVnkHh/view?usp=sharing" target=”_blank”
                class="download"
                >Download CV</a
              >
            </li>
          </ul>
        </nav>
                <button type="button" id="sidebarCollapse" class="btn btn-grad toggleBTN">
          <i class="fas fa-align-left"></i>
          <span>  Toggle Sidebar</span>
        </button>

   
</template>
<script>
                $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
export default {

}
</script>
<style >
/*
    SIDE NAV
*/

.toggleBTN{
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 1000
}

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 2.5rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 2.5rem 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */


#sidebar {
    min-width: 15.625rem;
    max-width: 15.625rem;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
}

#sidebar.active {
    margin-left: -15.625rem;
}
#sidebar:not(.active) ~ #content {
    /* padding-left: 15.625rem; */
}

#sidebar .sidebar-header {
    padding: 1.25rem;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 1.25rem 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 1.25rem;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 1.25rem;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}
 .asideHeader-userInformations {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 0;    
}

.asideHeader-userInformations {
    padding: 0;
}

.asideHeader-imgUserImage {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    border: 8px solid #7a7265;
    margin-bottom: 1.25rem;
}

.asideHeader-lblUserName {
    font-family: var(--font-Poppins);
    font-size: var(--font-md);
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: 1.25rem;
}

.asideHeader-btnSocial {
    padding: 10px 12px;
    margin: 0 2px;
    border-radius: 50%;
    background-color: var(--color-dark);
    color: var(--color-white);
    font-size: var(--font-sm);
    transition: background-color .5s;
}

.asideHeader-btnSocial:hover {
    background-color: var(--color-primary);
}

.containerAside-main, .asideMain-menuItemsBox {
    width: 100%;
    margin: 1.25rem 0;
}

.asideMain-menuItem {
    margin: 15px 0;
}

.asideMain-menuItemsBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1.875rem;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: 100%;
    padding: 1.25rem;
    min-height: 100vh;
    transition: all 0.3s;
}
.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.site-heading h2 span {
  color: #a00000;
}

.site-heading h4 {
  display: inline-block;
  padding-bottom: 1.25rem;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}

.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 3.125rem;
}

.site-heading {
  margin-bottom: 3.75rem;
  overflow: hidden;
  margin-top: -5px;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}
</style>