import logo from "../assets/—Pngtree—wolf logo_2306634.png"
const CustomLayout = () => {

  return (
    <div className="main-body-home">
      <div className="home-navbar-head">
          <a href="x" className="home-navbar-head-registerlogin">
            ورود / ثبت نام
          </a>
          <a href="x" className="home-navbar-head-store">
             حمایت از ما
          </a>
          <a href="x" className="home-navbar-head-donate">
             فروشگاه
          </a>
          <a href="" className="home-navbar-head-aboutus">
             درباره ما
          </a>
          <a href="x" className="home-navbar-head-weblog">
            وبلاگ
          </a>
        <div className="logo-image-main-home-box">
          <img src={logo} alt="" className="logo-image-main-home"/>
        </div>
      </div>

    </div>
  );
};

export default CustomLayout;
