
import reactLogo from '../assets/react.svg'


export default function Header(){
    return (
        <>
          <header className='flex-header'>
            <img className='img' src={reactLogo} alt="logo-react"  />
            <nav >
              <ul className='flex-header'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
        </>
    )
  }
  