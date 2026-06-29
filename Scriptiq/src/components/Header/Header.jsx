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
    <header className='py-3 shadow-sm bg-white border-b border-gray-100'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to="/">
              <Logo width='120px' />
            </Link>
          </div>

          <ul className='flex ml-auto items-center gap-1'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                    className='px-4 py-2 text-sm font-medium text-dark rounded-lg
                      transition-colors duration-200 hover:bg-brand/10 hover:text-brand'> 
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