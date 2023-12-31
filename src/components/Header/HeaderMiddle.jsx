import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../constants/pathnames";
import { formatCurrency } from "../../utils/format";
import cn from "classnames";

const HeaderMiddle = ({
  cartInfo,
  onDeleteProduct,
  isMenuOpen,
  onShowMenu,
}) => {
  const { product, quantity, subTotal } = cartInfo || {};
  const totalQuantity = quantity?.reduce((curr, next, index) => {
    return Number(curr) + Number(next);
  }, 0);

  return (
    <div className="header-middle sticky-header">
      <div className="container">
        <div className="header-left">
          <button
            className={cn("mobile-menu-toggler", {
              active: isMenuOpen,
            })}
            onClick={onShowMenu}
          >
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" />
          </button>
          <Link to={PATHS.HOME} className="logo">
            <img src="/assets/images/logo.svg" alt="Molla Logo" width={160} />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="menu">
            <li>
              <NavLink end to={PATHS.HOME}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.PRODUCT}>Product</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.BLOG}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          {/* <div className="header-search">
            <a href="#" className="search-toggle" role="button" title="Search">
              <i className="icon-search" />
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper">
                <label htmlFor="q" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search in..."
                  required
                />
              </div>
            </form>
          </div> */}
          <div className="dropdown cart-dropdown">
            <Link
              to={PATHS.CART}
              className="dropdown-toggle"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
              // data-display="static"
            >
              <i className="icon-shopping-cart" />
              <span className="cart-count">{totalQuantity || 0}</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-cart-products">
                {/* Product Render */}
                {product?.length > 0 &&
                  product?.map((item, index) => {
                    const { images, name, price, slug, id } = item || {};
                    return (
                      <div
                        className="product"
                        style={{ maxHeight: "94px", overflow: "hidden" }}
                        key={id || index}
                      >
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <Link
                              to={`${PATHS.PRODUCT}${slug ? "/" + slug : ""}`}
                            >
                              {name}
                            </Link>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">
                              {quantity[index]}
                            </span>{" "}
                            x ${formatCurrency(price)}{" "}
                          </span>
                        </div>
                        <figure className="product-image-container">
                          <Link
                            to={`${PATHS.PRODUCT}${slug ? "/" + slug : ""}`}
                            className="product-image"
                          >
                            <img
                              src={images[0] || ""}
                              alt={slug || "product"}
                              style={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "60px",
                                objectFit: "cover",
                              }}
                            />
                          </Link>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                          onClick={() => onDeleteProduct(id, index)}
                        >
                          <i className="icon-close" />
                        </a>
                      </div>
                    );
                  })}
                {/* <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Beige knitted</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $84.00{" "}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img
                        src="/assets/images/products/cart/product-1.jpg"
                        alt="product"
                      />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div>

                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <a href="product-detail.html">Blue utility</a>
                    </h4>
                    <span className="cart-product-info">
                      <span className="cart-product-qty">1</span> x $76.00{" "}
                    </span>
                  </div>
                  <figure className="product-image-container">
                    <a href="product-detail.html" className="product-image">
                      <img
                        src="/assets/images/products/cart/product-2.jpg"
                        alt="product"
                      />
                    </a>
                  </figure>
                  <a href="#" className="btn-remove" title="Remove Product">
                    <i className="icon-close" />
                  </a>
                </div> */}
              </div>
              <div className="dropdown-cart-total">
                <span>Total</span>
                <span className="cart-total-price">
                  ${formatCurrency(subTotal)}
                </span>
              </div>
              <div className="dropdown-cart-action">
                {product?.length > 0 ? (
                  <>
                    <Link to={PATHS.CART} className="btn btn-primary">
                      View Cart
                    </Link>

                    <Link
                      to={PATHS.CHECKOUT}
                      className="btn btn-outline-primary-2"
                    >
                      <span>Checkout</span>
                      <i className="icon-long-arrow-right" />
                    </Link>
                  </>
                ) : (
                  <p>There is no product here!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
