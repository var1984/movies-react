export function Footer () {
    return (
        <footer className="page-footer indigo lighten-3">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
}