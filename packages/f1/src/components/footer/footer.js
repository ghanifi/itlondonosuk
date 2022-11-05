import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";


// simplest form (only email)


const Footer = ({ state }) => {
    // const options = state.source.get("acf-options-page");
    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12 col-lg-6 footer-widget widget-one">
                        <h6 className="widget-title">Londonos IT Services</h6>
                        <p>We employ friendly professionals who have well-rounded experience, the ability to work in a team and a desire to be helpful.</p>

        <p>We continue to invest in our systems and have the standards in place for effective, streamlined and consistent service, customised to meet your needs.</p>

<p>We are dedicated to providing remarkable IT services that improves your performance, increases your productivity and protects you.</p>

<p>We value long-term relationships built on trust. To achieve that, we deliver fully supported vendor neutral solutions that are essential and reasonably priced.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 footer-widget widget-two">
                        <h6 className="widget-title">LONDONOS</h6>
                        <ul className="widget-list">
                            <li><Link className="widget-list-link" link="/about-us/">About Us</Link></li>
                            <li><Link className="widget-list-link" link="/fully-insured/">Fully Insured</Link></li>
                            <li><Link className="widget-list-link" link="/services/">Services</Link></li>
                            <li><Link className="widget-list-link" link="/projects/">Latest Projects</Link></li>
                            <li><Link className="widget-list-link" link="/service-area/">Service Area</Link></li>
                            <li><Link className="widget-list-link" link="/resources/">Resources</Link></li>
                            <li><Link className="widget-list-link" link="/blog/">Blog</Link></li>
                            <li><Link className="widget-list-link" link="/jobs/">Career</Link></li>
                            <li><Link className="widget-list-link" link="/contact/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 footer-widget widget-three">
                        <h6 className="widget-title">IT Contractor London</h6>
                        <ul className="widget-list">
                            <li><Link className="widget-list-link" link="terms-conditions/">Terms & Conditions</Link></li>
                            <li><Link className="widget-list-link" link="/privacy-policy/">Privacy Policy</Link></li>
                            <li><Link className="widget-list-link" link="/disclaimer/">Disclaimer</Link></li>
                            <li><Link className="widget-list-link" link="/services/">Services</Link></li>
                            <li><Link className="widget-list-link" link="/blog/">Blog</Link></li>
                            <li><Link className="widget-list-link" link="/jobs/">We're recruiting</Link></li>
                            <li><Link className="widget-list-link" link="/contact/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 footer-widget widget-four">
                        <h6 className="widget-title">Londonos Companies</h6>
                        <ul className="widget-list">
                            <li><Link className="widget-list-link" link="https://gggtech.co.uk/">Web Design Agency London</Link></li>
                            <li><Link className="widget-list-link" link="https://overseashealth.co.uk/">Medical Tourism</Link></li>
                            <li><Link className="widget-list-link" link="https://translation.londonos.uk/">Translation Agency</Link></li>
                            <li><Link className="widget-list-link" link="https://experts.londonos.uk/">Career Courses</Link></li>
                            <li><Link className="widget-list-link" link="https://carwrappings.co.uk/">Vehicle Branding</Link></li>
                            <li><Link className="widget-list-link" link="https://vizeavrupa.com/">İngiltere Vize Başvuru Merkezi</Link></li>
                            <li><Link className="widget-list-link" link="https://gggtercume.com/">Antalya Tercüme Bürosu</Link></li>
                            <li><Link className="widget-list-link" link="https://ggg.com.tr/">Pırlanta Yüzük</Link></li>
        <li><Link className="widget-list-link" link="https://guvencoglu.com/">Kuyumcu Antalya</Link></li>
        <li><Link className="widget-list-link" link="https://www.gggmetal.com.tr/">Yat Ekipmanları Üretim</Link></li>
        <li><Link className="widget-list-link" link="https://www.gggtour.com/">Antalya Daily Tours</Link></li>
         <li><Link className="widget-list-link" link="https://www.gggtur.com/">Antalya Günlük Turlar</Link></li>
         <li><Link className="widget-list-link" link="https://www.londonos.uk/">LONDONOS</Link></li>
                            </ul>
                    </div>
                </div>

            </Container>
        </>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }
}

`;
