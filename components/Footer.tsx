import Link from "next/link";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <Link
          href="/"
          className="brand"
          // onClick={close}
          aria-label="Souza Designers & Builders home"
        >
          <img
            src="/images/logo.jpeg"
            alt="Souza Designers & Builders"
            className="brandLogo"
          />
        </Link>
            <p>
              Interior design, execution and building construction with a
              balance of creativity, technical knowledge and practical
              execution.
            </p>
          </div>
          <div>
            <div className="eyebrow">Explore</div>
            <p>
              <Link href="/about">About Us</Link>
              <br />
              <Link href="/projects">Projects</Link>
              <br />
              <Link href="/#services">Services</Link>
              <br />
              <Link href="/#process">Our Process</Link>
            </p>
          </div>
          <div>
            <div className="eyebrow">Start a project</div>
            <p>
              <Link href="/consultation">Book a Consultation</Link>
              <br />
              <Link href="/enquiries">General Enquiry</Link>
            </p>
          </div>
        </div>
        <div className="footerBottom">
          <span>
            © {new Date().getFullYear()} Twin Design and Build
          </span>
          <span>Designing Spaces. Building Visions.</span>
        </div>
      </div>
    </footer>
  );
}
