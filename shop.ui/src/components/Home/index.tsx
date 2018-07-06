// import _ from 'lodash';
import * as React from 'react';
import { IHomeProps } from './types';
import { connect } from 'react-redux';
import { fetchProducts } from './actions';

import ProductItemContainer from './ProductItemContainer';

import categoryShowImg from './images/category-show.png';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';
import itemthumbnail from './images/itemthumbnail.jpg';

class Home extends React.Component<IHomeProps, {}> {

    public componentDidMount() {
        this.props.fetchProducts();
    }

    public render() {
        return (
            <section id="content">
        	<div id="category-header">
        		<div className="row">
        			<div className="container">
						<div className="col-2">
							<div className="category-image">
								<img src={categoryShowImg} alt="Phone" className="img-responsive" />
							</div>
							
						</div>
						
						<div className="col-2 last">
							<div className="category-title">
								<h2>Mobile</h2>
								<p>Aenean dictum libero vitae magna sagittis, eu convallis dolor blandit. Fusce consectetur tincidunt pretium. Etiam non tellus massa. Aenean tincidunt in augue nec tempus. Nulla porta libero sit amet lorem pellentesque posuere...</p>
								<a href="#" className="btn btn-custom">LEARN MORE</a>
							</div>
						</div>
    			</div>
        		</div>
        	</div>
        	<div id="category-breadcrumb">
        		<div className="container">
					<ul className="breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li><a href="#">Electronics</a></li>
						<li className="active">Mobile</li>
					</ul>
        		</div>
        	</div>
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">
        				
        				<div className="row">
        					
        					<div className="col-md-9 col-sm-8 col-xs-12 main-content">
        						
        						<div className="category-toolbar clearfix">
									<div className="toolbox-filter clearfix">
									
										<div className="sort-box">
											<span className="separator">sort by:</span>
											<div className="btn-group select-dropdown">
												<button type="button" className="btn select-btn">Position</button>
												<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
													<i className="fa fa-angle-down"></i>
												</button>
												<ul className="dropdown-menu" role="menu">
													<li><a href="#">Date</a></li>
													<li><a href="#">Name</a></li>
												</ul>
											</div>
										</div>
										
										<div className="view-box">
											<a href="category.html" className="active icon-button icon-grid"><i className="fa fa-th-large"></i></a>
											<a href="category-list.html" className="icon-button icon-list"><i className="fa fa-th-list"></i></a>
										</div>
										
									</div>
									<div className="toolbox-pagination clearfix">
										<ul className="pagination">
											<li className="active"><a href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
										</ul>
										<div className="view-count-box">
											<span className="separator">view:</span>
											<div className="btn-group select-dropdown">
												<button type="button" className="btn select-btn">10</button>
												<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
													<i className="fa fa-angle-down"></i>
												</button>
												<ul className="dropdown-menu" role="menu">
													<li><a href="#">15</a></li>
													<li><a href="#">30</a></li>
												</ul>
											</div>
										</div>
										
									</div>
        							
        							
        						</div>
        						<div className="md-margin"></div>

                                <ProductItemContainer products={this.props.products}/>




        						
        						<div className="pagination-container clearfix">
        							<div className="pull-right">
										<ul className="pagination">
											<li className="active"><a href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
											</ul>
        							</div>
        							
        							<div className="pull-right view-count-box hidden-xs">
										<span className="separator">view:</span>
										<div className="btn-group select-dropdown">
											<button type="button" className="btn select-btn">10</button>
											<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
												<i className="fa fa-angle-down"></i>
											</button>
											<ul className="dropdown-menu" role="menu">
												<li><a href="#">15</a></li>
												<li><a href="#">30</a></li>
											</ul>
										</div>
									</div>
        						</div>
							
        						
        					</div>
        					
        					<aside className="col-md-3 col-sm-4 col-xs-12 sidebar">
        						<div className="widget">
        							<div className="panel-group custom-accordion sm-accordion" id="category-filter">
										<div className="panel">
											<div className="accordion-header">
												<div className="accordion-title"><span>Category</span></div>
									<a className="accordion-btn opened"  data-toggle="collapse" data-target="#category-list-1"></a>
											</div>
								
										<div id="category-list-1" className="collapse in">
											<div className="panel-body">
												<ul className="category-filter-list jscrollpane">
													<li><a href="#">Mobile Phones (341)</a></li>
													<li><a href="#">Smartphones (55)</a></li>
													<li><a href="#">Communicators (24)</a></li>
													<li><a href="#">CDMA Phones (14)</a></li>
													<li><a href="#">Accessories (83)</a></li>
													<li><a href="#">Chargers (8)</a></li>
													<li><a href="#">Memory Cards (6)</a></li>
													<li><a href="#">Protectors (12)</a></li>
													<li><a href="#">ravelsim (5)</a></li>
													<li><a href="#">CDMA Phones (14)</a></li>
													<li><a href="#">Accessories (83)</a></li>
													<li><a href="#">Chargers (8)</a></li>
													<li><a href="#">Memory Cards (6)</a></li>
													<li><a href="#">Protectors (12)</a></li>
													<li><a href="#">ravelsim (5)</a></li>
													<li><a href="#">CDMA Phones (14)</a></li>
													<li><a href="#">Accessories (83)</a></li>
													<li><a href="#">Chargers (8)</a></li>
													<li><a href="#">Memory Cards (6)</a></li>
													<li><a href="#">Protectors (12)</a></li>
													<li><a href="#">ravelsim (5)</a></li>
												</ul>
											</div>
										</div>
										</div>
        								
        								<div className="panel">
											<div className="accordion-header">
												<div className="accordion-title"><span>Brand</span></div>
									<a className="accordion-btn opened"  data-toggle="collapse" data-target="#category-list-2"></a>
											</div>
								
										<div id="category-list-2" className="collapse in">
											<div className="panel-body">
											<ul className="category-filter-list jscrollpane">
												<li><a href="#">Samsung (50)</a></li>
												<li><a href="#">Apple (80)</a></li>
												<li><a href="#">HTC (20)</a></li>
												<li><a href="#">Motoroloa (20)</a></li>
												<li><a href="#">Nokia (11)</a></li>
											</ul>
											</div>
										</div>
										</div>
        							
        							<div className="panel">
											<div className="accordion-header">
												<div className="accordion-title"><span>Price</span></div>
									<a className="accordion-btn opened"  data-toggle="collapse" data-target="#category-list-3"></a>
											</div>
								
										<div id="category-list-3" className="collapse in">
											<div className="panel-body">
												<div id="price-range">
													
												</div>
												<div id="price-range-details">
													<span className="sm-separator">from</span>
													<input type="text" id="price-range-low" className="separator"/>
													<span className="sm-separator">to</span>
													<input type="text" id="price-range-high" />
												</div>
												<div id="price-range-btns">
													<a href="#" className="btn btn-custom-2 btn-sm">Ok</a>
													<a href="#" className="btn btn-custom-2 btn-sm">Clear</a>
												</div>
												
											</div>
										</div>
										</div>
        							
        							<div className="panel">
											<div className="accordion-header">
												<div className="accordion-title"><span>Color</span></div>
									<a className="accordion-btn opened"  data-toggle="collapse" data-target="#category-list-4"></a>
											</div>
								
										<div id="category-list-4" className="collapse in">
											<div className="panel-body">
											<ul className="filter-color-list clearfix">
												<li><a href="#" data-bgcolor="#fff" className="filter-color-box"></a></li>
												<li><a href="#" data-bgcolor="#ffff33" className="filter-color-box"></a></li>
												<li><a href="#" data-bgcolor="#ff9900" className="filter-color-box"></a></li>
												<li className="last-md"><a href="#" data-bgcolor="#ff9999" className="filter-color-box"></a></li>
                                                <li className="last-lg"><a href="#" data-bgcolor="#99cc33" className="filter-color-box"></a></li>
                                                <li><a href="#" data-bgcolor="#339933" className="filter-color-box"></a></li>
                                                <li><a href="#" data-bgcolor="#ff0000" className="filter-color-box"></a></li>
                                                <li className="last-md"><a href="#" data-bgcolor="#ff3366" className="filter-color-box"></a></li>
                                                <li><a href="#" data-bgcolor="#cc33ff" className="filter-color-box"></a></li>
                                                <li className="last-lg"><a href="#" data-bgcolor="#9966cc" className="filter-color-box"></a></li>
                                                <li><a href="#" data-bgcolor="#99ccff" className="filter-color-box"></a></li>
                                                <li  className="last-md"><a href="#" data-bgcolor="#3333cc" className="filter-color-box"></a></li>
                                                <li><a href="#" data-bgcolor="#999999" className="filter-color-box"></a></li>
                                                <li><a href="#" data-bgcolor="#663300" className="filter-color-box"></a></li>
                                                <li className="last-lg"><a href="#" data-bgcolor="#000" className="filter-color-box"></a></li>
											</ul>
											</div>
										</div>
										</div>
        							</div>
        						</div>
        						
        						<div className="widget featured">
        							<h3>Featured</h3>
        							
        							<div className="featured-slider flexslider sidebarslider">
        								<ul className="featured-list clearfix">
        									<li>
        										<div className="featured-product clearfix">
        											<figure>
        												<img src={itemthumbnail} alt="item5" />
        											</figure>
        											<h5><a href="#">Jacket Suiting Blazer</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="84"></div>
														</div>
													</div>
        											<div className="featured-price">$40</div>
        										</div>
        										
        										<div className="featured-product clearfix">
        											<figure>
        												<img src={itemthumbnail} alt="item1" />
        											</figure>
        											<h5><a href="#">Gap Graphic Cuffed</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="84"></div>
														</div>
													</div>
        											<div className="featured-price">$18</div>
        										</div>
        										
        										<div className="featured-product clearfix">
        											<figure>
        												<img src={itemthumbnail} alt="item2" />
        											</figure>
        											<h5><a href="#">Women's Lauren Dress</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="84"></div>
														</div>
													</div>
        											<div className="featured-price">$30</div>
        										</div>
        									</li>
        									<li>
        										<div className="featured-product clearfix">
        											<figure>
                                                        <img src={itemthumbnail} alt="item3" />
                                                    </figure>
        											<h5><a href="#">Swiss Mobile Phone</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="64"></div>
														</div>
													</div>
        											<div className="featured-price">$39</div>
        										</div>
        										
        										<div className="featured-product clearfix">
        											<figure>
        												<img src={itemthumbnail} alt="item4" />
        											</figure>
        											<h5><a href="#">Zwinzed HeadPhones</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="94"></div>
														</div>
													</div>
        											<div className="featured-price">$18.99</div>
        										</div>
        										
        										<div className="featured-product clearfix">
        											<figure>
        												<img src={itemthumbnail} alt="item7" />
        											</figure>
        											<h5><a href="#">Kless Man Suit</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="74"></div>
														</div>
													</div>
        											<div className="featured-price">$99</div>
        										</div>
        									</li>
        									<li>
        										
        										<div className="featured-product clearfix">
        											<figure>
                                                        <img src={itemthumbnail} alt="item4" />
                                                    </figure>
        											<h5><a href="#">Gap Graphic Cuffed</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="84"></div>
														</div>
													</div>
        											<div className="featured-price">$17</div>
        										</div>
        										
        										<div className="featured-product clearfix">
        											<figure>
        												<img src={itemthumbnail} alt="item6"/>
        											</figure>
        											<h5><a href="#">Women's Lauren Dress</a></h5>
        											<div className="ratings-container">
														<div className="ratings">
															<div className="ratings-result" data-result="84"></div>
														</div>
													</div>
        											<div className="featured-price">$30</div>
        										</div>
        									</li>
        								</ul>
        							</div>
        						</div>
        						
        						<div className="widget banner-slider-container">
        							<div className="banner-slider flexslider">
        								<ul className="banner-slider-list clearfix">
        									<li><a href="#"><img src={banner1} alt="Banner 1"/></a></li>
        									<li><a href="#"><img src={banner2} alt="Banner 2"/></a></li>
        									<li><a href="#"><img src={banner3} alt="Banner 3"/></a></li>
        								</ul>
        							</div>
        						</div>
        						
        					</aside>
        				</div>
        				
        				
        			</div>
        		</div>
			</div>
        
        </section>
        );
    }

    // private renderPosts() {
    //     return _.map(this.props.products, product => {
    //         return (
    //             <li classNameName='list-group-item' key={product.Id}>
    //                 {product.Name} Price: {product.Price}
    //             </li>
    //         );
    //     });
    // }
}

function mapStateToProps(state){
    return { products: state.products }
}

export default connect(mapStateToProps, {fetchProducts})(Home);