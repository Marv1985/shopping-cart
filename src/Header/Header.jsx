import styles from './Header.module.css'
import home from '../Header/logos/home.svg'
import cart from '../Header/logos/cart.svg'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { HeaderContext } from '../HeaderContext'

const Header = () => {
    const { headerData } = useContext(HeaderContext);

    return (
        <>
        <div className={styles.navSpacer}></div>
        <div className={`full_width ${styles.header}`}>
            <div className={`fixed_width ${styles.links}`}>
                <div className={styles.home}>
                    <Link to="/">
                        <img src={home} alt="" />
                    </Link>
                </div>
                <div className={styles.navigation}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shopping-page">Shop</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </div>
                <div className={styles.checkout}>
                    <Link to="/checkout">
                        <img src={cart} alt="" />
                    </Link>
                    {headerData ? (
                        <p>{headerData.totalQuantity}</p>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Header