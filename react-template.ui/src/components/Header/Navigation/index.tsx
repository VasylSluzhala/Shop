import * as React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home-icon.png';

class Navigation extends React.Component{
        
    public constructor(props) {
        super(props);
    }

    public render(){
        return (

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
                                    <ul className="menu clearfix">
                                        <li>
                                            <Link to="/">
                                                <span className="hide-for-xs"><img src={home} alt="home icon" /></span>
                                                <span className="hide-for-lg">Home</span>
                                            </Link>
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
                                                <li><a href="#">ClassNameic</a>
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
                                        <li>
                                            <Link to="/contactus">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>

                                </nav>

                                <div id="quick-access">
                                    <form className="form-inline quick-search-form" role="form" action="#">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search here" />
                                        </div>
                                        <button type="submit" id="quick-search" className="btn btn-custom"></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}

export default Navigation;

/*

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
                                    <Link to="/">HOME</Link>
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
                                <li>
                                    <Link to="/contactus">
                                        Contact Us
                                    </Link>
                                </li>
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

*/