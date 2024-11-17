import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'
import shopping from '../HomePage/images/shopping.jpg'

const HomePage = () => {
    return (
        <div className={`full_width ${styles.homepage}`}>
            <div className={`fixed_width ${styles.container}`}>
                <h1>Welcome</h1>
                <img src={shopping} alt="" />
                <Link to="/shopping-page">Start Shopping</Link>
            </div>
        </div>
    )
}

export default HomePage