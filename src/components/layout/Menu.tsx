import { Link } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'
import { IconBrandGithub } from '@tabler/icons-react'

const Menu = () => {
    return (
        <>
            <Link to={'/terms-of-use'}>Terms of use</Link>
            <Link to={'/disclaimer'}>Disclaimer</Link>
            <Link to={'/privacy-policy'}>Privacy Policy</Link>
            <div className='flex items-center space-x-3'>
                <a href="https://github.com/TerminalWarlord/PriceLens-Frontend"><IconBrandGithub className="w-5 h-5" /></a>
                <ModeToggle />
            </div>
        </>
    )
}

export default Menu