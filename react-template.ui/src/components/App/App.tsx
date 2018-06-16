import * as React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div id="wrapper">
      <header id="header" className="header6">
          <div id="header-top">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="header-top-left">
                              <ul id="top-links" className="clearfix">
                                  <li><a href="#" title="My Wishlist"><span className="top-icon top-icon-pencil"></span><span className="hide-for-xs">My Wishlist</span></a></li>
                                  <li><a href="#" title="My Account"><span className="top-icon top-icon-user"></span><span className="hide-for-xs">My Account</span></a></li>
                                  <li><a href="cart.html" title="My Cart"><span className="top-icon top-icon-cart"></span><span className="hide-for-xs">My Cart</span></a></li>
                                  <li><a href="checkout.html" title="Checkout"><span className="top-icon top-icon-check"></span><span className="hide-for-xs">Checkout</span></a></li>
                              </ul>
                          </div>
                          <div className="header-top-right">
                              
                              <div className="header-top-dropdowns pull-right">
                                  <div className="btn-group dropdown-money">
                                      <button type="button" className="btn btn-custom dropdown-toggle" data-toggle="dropdown">
                                          <span className="hide-for-xs">US Dollar</span><span className="hide-for-lg">$</span>
                                      </button>
                                      <ul className="dropdown-menu pull-right" role="menu">
                                          <li><a href="#"><span className="hide-for-xs">Euro</span><span className="hide-for-lg">&euro;</span></a></li>
                                          <li><a href="#"><span className="hide-for-xs">Pound</span><span className="hide-for-lg">&pound;</span></a></li>
                                      </ul>
                                  </div>
                                  <div className="btn-group dropdown-language">
                                      <button type="button" className="btn btn-custom dropdown-toggle" data-toggle="dropdown">
                                          <span className="flag-container"><img src="images/england-flag.png" alt="flag of england"/></span>
                                          <span className="hide-for-xs">English</span>
                                      </button>
                                      <ul className="dropdown-menu pull-right" role="menu">
                                          <li><a href="#"><span className="flag-container"><img src="images/italy-flag.png" alt="flag of england"/></span><span className="hide-for-xs">Italian</span></a></li>
                                          <li><a href="#"><span className="flag-container"><img src="images/spain-flag.png" alt="flag of italy"/></span><span className="hide-for-xs">Spanish</span></a></li>
                                          <li><a href="#"><span className="flag-container"><img src="images/france-flag.png" alt="flag of france"/></span><span className="hide-for-xs">French</span></a></li>
                                          <li><a href="#"><span className="sm-separator"><img src="images/germany-flag.png" alt="flag of germany"/></span><span className="hide-for-xs">German</span></a></li>
                                      </ul>
                                  </div>
                              </div>
                              
                              <div className="header-text-container pull-right">
                                  <p className="header-text">Welcome to Venedor!</p>
                                  <p className="header-link"><a href="#">login</a>&nbsp;or&nbsp;<a href="#">create an account</a></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          <div id="inner-header">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3 col-sm-3 col-xs-12 logo-container">
                          <h1 className="logo clearfix">
                              <span>Responsive eCommerce Template</span>
                              <a href="index.html" title="Venedor eCommerce Template"><img src="images/logo6.png" alt="Venedor Commerce Template" width="200" height="54"/></a>
                          </h1>
                      </div>
                      <div className="col-md-9 col-sm-9 col-xs-12 header-inner-right">
                          <div className="header-inner-right-wrapper clearfix">

                              <div className="dropdown-cart-menu-container pull-right">
                                  <div className="btn-group dropdown-cart">
                                  <button type="button" className="btn btn-custom dropdown-toggle" data-toggle="dropdown">
                                      <span className="cart-menu-icon"></span>
                                      0 item(s) <span className="drop-price">- $0.00</span>
                                  </button>
                                  
                                      <div className="dropdown-menu dropdown-cart-menu pull-right clearfix" role="menu">
                                          <p className="dropdown-cart-description">Recently added item(s).</p>
                                          <ul className="dropdown-cart-product-list">
                                              <li className="item clearfix">
                                              <a href="#" title="Delete item" className="delete-item"><i className="fa fa-times"></i></a>
                                              <a href="#" title="Edit item" className="edit-item"><i className="fa fa-pencil"></i></a>
                                                  <a href="product.html"><img src="images/products/thumbnails/item12.jpg" alt="phone 4"/></a>
                                                  <div className="dropdown-cart-details">
                                                      <p className="item-name">
                                                      <a href="product.html">Cam Optia AF Webcam </a>
                                                      </p>
                                                      <p>
                                                          1x
                                                          <span className="item-price">$499</span>
                                                      </p>
                                                  </div>
                                              </li>
                                              <li className="item clearfix">
                                              <a href="#" title="Delete item" className="delete-item"><i className="fa fa-times"></i></a>
                                              <a href="#" title="Edit item" className="edit-item"><i className="fa fa-pencil"></i></a>
                                                  <figure>
                                                      <a href="product.html"><img src="images/products/thumbnails/item13.jpg" alt="phone 2"/></a>
                                                  </figure>
                                                  <div className="dropdown-cart-details">
                                                      <p className="item-name">
                                                          <a href="product.html">Iphone Case Cover Original</a>
                                                      </p>
                                                      <p>
                                                          1x
                                                          <span className="item-price">$499<span className="sub-price">.99</span></span>
                                                      </p>
                                                  </div>
                                              </li>
                                          </ul>
                                          
                                          <ul className="dropdown-cart-total">
                                              <li><span className="dropdown-cart-total-title">Shipping:</span>$7</li>
                                              <li><span className="dropdown-cart-total-title">Total:</span>$1005<span className="sub-price">.99</span></li>
                                          </ul>
                                          <div className="dropdown-cart-action">
                                              <p><a href="cart.html" className="btn btn-custom-2 btn-block">Cart</a></p>
                                              <p><a href="checkout.html" className="btn btn-custom btn-block">Checkout</a></p>
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>

                              <div id="quick-access">
                                  <form className="form-inline quick-search-form" role="form" action="#">
                                      <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Search here"/>
                                      </div>
                                      <button type="submit" id="quick-search" className="btn btn-custom"></button>
                                  </form>
                              </div>

                              <div className="header-box contact-infos pull-right">
                                  <ul>
                                      <li><span className="header-box-icon header-box-icon-skype"></span>venedor_support</li>
                                      <li><span className="header-box-icon header-box-icon-email"></span><a href="mailto:venedor@gmail.com">venedor@gmail.com</a></li>
                                  </ul>
                              </div>
                              
                              <div className="header-box contact-phones pull-right clearfix">
                                  <span className="header-box-icon header-box-icon-earphones"></span>
                                  <ul className="pull-left">
                                      <li>+(404) 158 14 25 78</li>
                                      <li>+(404) 851 21 48 15</li>
                                  </ul>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
              
              <div id="main-nav-container">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 clearfix">
                              
                              <nav id="main-nav">
                                  <div id="responsive-nav">
                                      <div id="responsive-nav-button">
                                          Menu <span id="responsive-nav-button-icon"></span>
                                      </div>
                                  </div>
                                  <div className="menu-table">
                                      <ul className="menu clearfix">
                                      <li>
                                          <a className="active" href="index.html">HOME</a>
                                          <ul>
                                              <li><a href="../green/index.html">Home 1</a></li>
                                              <li><a href="../blue/index.html">Home 2</a></li>
                                              <li><a href="../orange/index.html">Home 3</a></li>
                                              <li><a href="../pink/index.html">Home 4</a></li>
                                              <li><a href="../brown/index.html">Home 5</a></li>
                                              <li><a href="../green2/index.html">Home 6</a></li>
                                              <li><a href="../blueorange/index.html">Home 7</a></li>
                                              <li><a href="../blueorange2/index.html">Home 8</a></li>
                                              <li><a href="../browngreen/index.html">Home 9</a></li>
                                          </ul>
                                      </li>
                                      <li className="mega-menu-container"><a href="#">SHOP</a>
                                          <div className="mega-menu clearfix">
                                                  <div className="col-5">
                                                      <a href="category.html" className="mega-menu-title">Clothing</a>
                                                      <ul className="mega-menu-list clearfix">
                                                          <li><a href="#">Dresses</a></li>
                                                          <li><a href="#">Jeans &amp; Trousers</a></li>
                                                          <li><a href="#">Blouses &amp; Shirts</a></li>
                                                          <li><a href="#">Tops &amp; T-Shirts</a></li>
                                                          <li><a href="#">Jackets &amp; Coats</a></li>
                                                          <li><a href="#">Skirts</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-5">
                                                      <a href="category.html" className="mega-menu-title">Shoes</a>
                                                      <ul className="mega-menu-list clearfix">
                                                          <li><a href="#">Formal Shoes</a></li>
                                                          <li><a href="#">Casual Shoes</a></li>
                                                          <li><a href="#">Sandals</a></li>
                                                          <li><a href="#">Boots</a></li>
                                                          <li><a href="#">Wide Fit</a></li>
                                                          <li><a href="#">Slippers</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-5">
                                                      <a href="category.html" className="mega-menu-title">Accessories</a>
                                                      <ul className="mega-menu-list clearfix">
                                                          <li><a href="#">Bags &amp; Purses</a></li>
                                                          <li><a href="#">Belts</a></li>
                                                          <li><a href="#">Gloves</a></li>
                                                          <li><a href="#">Jewellery</a></li>
                                                          <li><a href="#">Sunglasses</a></li>
                                                          <li><a href="#">Hair Accessories</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-5">
                                                      <a href="category.html" className="mega-menu-title">Sports</a>
                                                      <ul className="mega-menu-list clearfix">
                                                          <li><a href="#">Sport Tops &amp; Vests</a></li>
                                                          <li><a href="#">Swimwear</a></li>
                                                          <li><a href="#">Footwear</a></li>
                                                          <li><a href="#">Sports Underwear</a></li>
                                                          <li><a href="#">Bags</a></li>
                                                      </ul>
                                                  </div>
                                                  
                                                  <div className="col-5">
                                                      <a href="category.html" className="mega-menu-title">Maternity</a>
                                                      <ul className="mega-menu-list clearfix">
                                                          <li><a href="#">Tops &amp; Skirts</a></li>
                                                          <li><a href="#">Dresses</a></li>
                                                          <li><a href="#">Trousers &amp; Shorts</a></li>
                                                          <li><a href="#">Knitwear</a></li>
                                                          <li><a href="#">Jackets &amp; Coats</a></li>
                                                      </ul>
                                                  </div>
                                          </div>
                                      </li>
                                      
                                      <li>
                                          <a href="#">PAGES</a>
                                          <ul>
                                              <li><a href="#">Headers</a>
                                                  <ul>
                                                      <li><a href="header1.html">Header Version 1</a></li>
                                                      <li><a href="header2.html">Header Version 2</a></li>
                                                      <li><a href="header3.html">Header Version 3</a></li>
                                                      <li><a href="header4.html">Header Version 4</a></li>
                                                      <li><a href="header5.html">Header Version 5</a></li>
                                                      <li><a href="header6.html">Header Version 6</a></li>
                                                      <li><a href="header7.html">Header Version 7</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="#">Footers</a>
                                                  <ul>
                                                      <li><a href="footer1.html">Footer Version 1</a></li>
                                                      <li><a href="footer2.html">Footer Version 2</a></li>
                                                      <li><a href="footer3.html">Footer Version 3</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="product.html">Product</a></li>
                                              <li><a href="cart.html">Cart</a></li>
                                              <li><a href="category.html">Category</a>
                                                  <ul>
                                                      <li><a href="category-list.html">Category list</a></li>
                                                      <li><a href="category.html">Category Banner 1</a></li>
                                                      <li><a href="category-banner-2.html">Category Banner 2</a></li>
                                                      <li><a href="category-banner-3.html">Category Banner 3</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="blog.html">Blog</a>
                                                  <ul>
                                                      <li><a href="blog.html">Right Sidebar</a></li>
                                                      <li><a href="blog-sidebar-left.html">Left Sidebar</a></li>
                                                      <li><a href="blog-sidebar-both.html">Both Sidebar</a></li>
                                                      <li><a href="single.html">Blog Post</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="checkout.html">Checkout</a></li>
                                              <li><a href="aboutus.html">About Us</a></li>
                                              <li><a href="register-account.html">Register Account</a></li>
                                              <li><a href="compare-products.html">Compare Products</a></li>
                                              <li><a href="login.html">Login</a></li>
                                              <li><a href="404.html">404 Page</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="#">Portfolio</a>
                                          <ul>
                                              <li><a href="#">classNameic</a>
                                                  <ul>
                                                      <li><a href="portfolio-2.html">Two Columns</a></li>
                                                      <li><a href="portfolio-3.html">Three Columns</a></li>
                                                      <li><a href="portfolio-4.html">Four Columns</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="#">Masonry</a>
                                                  <ul>
                                                      <li><a href="portfolio-masonry-2.html">Two Columns</a></li>
                                                      <li><a href="portfolio-masonry-3.html">Three Columns</a></li>
                                                      <li><a href="portfolio-masonry-4.html">Four Columns</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="#">Portfolio Posts</a>
                                                  <ul>
                                                      <li><a href="single-portfolio.html">Image Post</a></li>
                                                      <li><a href="single-portfolio-gallery.html">Gallery Post</a></li>
                                                      <li><a href="single-portfolio-video.html">Video Post</a></li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </li>
                                      <li><a href="#">Elements</a>
                                          <ul>
                                              <li><a href="elements/tabs.html">Tabs</a></li>
                                              <li><a href="elements/titles.html">Titles</a></li>
                                              <li><a href="elements/typography.html">Typography</a></li>
                                              <li><a href="elements/collapses.html">collapses</a></li>
                                              <li><a href="elements/animations.html">animations</a></li>
                                              <li><a href="elements/grids.html">Grid System</a></li>
                                              <li><a href="elements/alerts.html">Alert Boxes</a></li>
                                              <li><a href="elements/buttons.html">Buttons</a></li>
                                              <li><a href="elements/medias.html">Media</a></li>
                                              <li><a href="elements/forms.html">Forms</a></li>
                                              <li><a href="elements/icons.html">Icons</a></li>
                                              <li><a href="elements/lists.html">Lists</a></li>
                                              <li><a href="elements/more.html">More</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="contact.html">Contact Us</a></li>
                                      <li><a href="#">My Account</a></li>
                                      <li><a href="#">News</a></li>
                                      <li><a href="http://themeforest.net/item/venedor-premium-bootstrap-ecommerce-html5-template/7426521?ref=SW-THEMES" target="_blank">Buy Venedor</a></li>
                                  </ul>
                                  </div>
                                  
                              </nav>
                              
                          </div>
                  </div>
              </div>                
          </div>
          </div>
      </header>

                
      <footer id="footer">
          <div id="footer-top">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-12 widget">
                          <div className="title-bg">
                              <h3>Popular</h3>
                          </div>

                          <div className="footer-popular-slider flexslider footerslider">
                              <ul className="slides">
                                  <li>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item1.jpg" alt="item1"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Suiting Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="80"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$40</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item2.jpg" alt="item2"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Gap Graphic Cuffed</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="100"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$18.5</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item3.jpg" alt="item3"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Women's Lauren Dress</a>
                                          </p>
                                          <div className="item-price-special">$30</div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item4.jpg" alt="item4"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Lauren Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="80"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$40</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item5.jpg" alt="item5"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Suiting Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="100"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$18.5</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item6.jpg" alt="item6"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Women's Spahyr Dress</a>
                                          </p>
                                          <div className="item-price-special">$30</div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="md-margin visible-xs"></div>
                      </div>

                      <div className="col-md-4 col-sm-4 col-xs-12 widget">
                          <div className="title-bg">
                              <h3>Featured</h3>
                          </div>

                          <div className="footer-featured-slider flexslider footerslider">
                              <ul className="slides">
                                  <li>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item4.jpg" alt="item4"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Suiting Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="80"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$40</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item5.jpg" alt="item5"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Gap Graphic Cuffed</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="100"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$18.5</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item6.jpg" alt="item6"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Women's Lauren Dress</a>
                                          </p>
                                          <div className="item-price-special">$30</div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item7.jpg" alt="item7"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Lauren Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="80"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$40</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item8.jpg" alt="item8"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Suiting Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="100"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$18.5</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item9.jpg" alt="item9"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Women's Spahyr Dress</a>
                                          </p>
                                          <div className="item-price-special">$30</div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="md-margin visible-xs"></div>
                      </div>

                      <div className="col-md-4 col-sm-4 col-xs-12 widget">
                          <div className="title-bg">
                              <h3>Specials</h3>
                          </div>

                          <div className="footer-specials-slider flexslider footerslider">
                              <ul className="slides">
                                  <li>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item7.jpg" alt="item7"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Suiting Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="80"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$40</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item8.jpg" alt="item8"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Gap Graphic Cuffed</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="100"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$18.5</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item9.jpg" alt="item9"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Women's Lauren Dress</a>
                                          </p>
                                          <div className="item-price-special">$30</div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item1.jpg" alt="item1"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Lauren Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="80"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$40</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item2.jpg" alt="item2"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Jacket Suiting Blazer</a>
                                          </p>
                                          <div className="ratings-container">
                                              <div className="ratings">
                                                      <div className="ratings-result" data-result="100"></div>
                                              </div>
                                          </div>
                                          <div className="item-price-special">$18.5</div>
                                      </div>
                                      <div className="slide-item clearfix">
                                          <figure className="item-image-container">
                                               <a href="product.html"><img src="images/products/thumbnails/item3.jpg" alt="item3"/></a>
                                          </figure>
                                          <p className="item-name">
                                              <a href="product.html">Women's Spahyr Dress</a>
                                          </p>
                                          <div className="item-price-special">$30</div>
                                      </div>
                                  </li>
                              </ul>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
          
          <div id="inner-footer">
              
              <div className="container">
                  <div className="row">
                      <div className="col-md-3 col-sm-4 col-xs-12 widget">
                          <h3>MY ACCOUNT</h3>
                          <ul className="links">
                              <li><a href="#">My account</a></li>
                              <li><a href="#">Personal information</a></li>
                              <li><a href="#">Addresses</a></li>
                              <li><a href="#">Discount</a></li>
                              <li><a href="#">Order History</a></li>
                              <li><a href="#">Your Vouchers</a></li>
                          </ul>
                      </div>
                      
                      <div className="col-md-3 col-sm-4 col-xs-12 widget">
                          <h3>INFORMATION</h3>
                          <ul className="links">
                              <li><a href="#">New products</a></li>
                              <li><a href="#">Top sellers</a></li>
                              <li><a href="#">Specials</a></li>
                              <li><a href="#">Manufacturers</a></li>
                              <li><a href="#">Suppliers</a></li>
                              <li><a href="#">Our stores</a></li>
                          </ul>
                      </div>
                      
                      <div className="col-md-3 col-sm-4 col-xs-12 widget">
                          <h3>MY ACCOUNT</h3>
                          
                          <ul className="contact-list">
                              <li><strong>Venedor Ltd</strong></li>
                              <li>United Kingdom</li>
                              <li>Greater London</li>
                              <li>London 02587</li>
                              <li>Oxford Street 48/188</li>
                              <li>Working Days: Mon. - Sun.</li>
                              <li>Working Hours: 9.00AM - 8.00PM</li>
                          </ul>
                      </div>
                      
                      <div className="clearfix visible-sm"></div>
                      
                      <div className="col-md-3 col-sm-12 col-xs-12 widget">
                          <h3>FACEBOOK LIKE BOX</h3>
                          
                          <div className="facebook-likebox">
                              <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fenvato&amp;colorscheme=dark&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false"></iframe>
                          </div>
                          
                          
                      </div>
                  </div>
              </div>
          
          </div>
          
          <div id="footer-bottom">
              <div className="container">
                  <div className="row">
                      <div className="col-md-7 col-sm-7 col-xs-12 footer-social-links-container">
                          <ul className="social-links clearfix">
                              <li><a href="#" className="social-icon icon-facebook"></a></li>
                              <li><a href="#" className="social-icon icon-twitter"></a></li>
                              <li><a href="#" className="social-icon icon-rss"></a></li>
                              <li><a href="#" className="social-icon icon-delicious"></a></li>
                              <li><a href="#" className="social-icon icon-linkedin"></a></li>
                              <li><a href="#" className="social-icon icon-flickr"></a></li>
                              <li><a href="#" className="social-icon icon-skype"></a></li>
                              <li><a href="#" className="social-icon icon-email"></a></li>
                          </ul>
                      </div>
                      
                      <div className="col-md-5 col-sm-5 col-xs-12 footer-text-container">
                          <p>&copy; 2014 Powered by Company&trade;. All Rights Reserved.</p>
                      </div>
                  </div>
              </div>
          </div>
          
      </footer>
      <a href="#" id="scroll-top" title="Scroll to Top"><i className="fa fa-angle-up"></i></a>
  </div>
    );
  }

}

export default App;
