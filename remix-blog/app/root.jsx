import { Outlet, LiveReload, Link, Links, Meta } from '@remix-run/react';
import globalStylesUrl from './styles/global.css';

export const meta = () => (
  {
    charset: "utf-8",
    title: "Remix Blog",
    viewport: "width=device-width,initial-scale=1",
  }
)

export const links = () => [{rel: "stylesheet", href: globalStylesUrl}];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : 'Remix Blog'}</title>
      </head>
      <body>
        {/* Child routes go here */}
        {children}

        {/* Sets up automatic reload when you change code */}
        {/* and only does anything during development */}
        {
          process.env.NODE_ENV === 'development'
           ? <LiveReload />
           : null      
        }
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className='logo'> 
          Remix        
        </Link>

        <ul className="nav">
          <li>
            <Link to='/post'>Posts</Link>
          </li>
        </ul>
      </nav>

      <main className="main">
        {children}
      </main>
    </>
  )
}
