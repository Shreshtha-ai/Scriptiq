import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-post',
      active: authStatus
    },
  ]

  return (
    <header className='py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to="/">
              <Logo width='130px' />
            </Link>
          </div>

          <ul className='flex ml-auto items-center gap-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                    className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300
                      ${
                        item.name === "Signup" || item.name === "Add Posts"
                          ? "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md hover:-translate-y-0.5"
                          : "text-dark hover:bg-brand/10 hover:text-brand"
                      }
                    `}> 
                      {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='ml-2'>
                <LogoutBtn />
              </li>
            )}

          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header