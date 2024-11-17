import StoreCards from '../StoreCards/StoreCards'
import styles from './ShoppingPage.module.css'

const ShoppingPage = () => {
    return (
        <div className={`full_width ${styles.shoppingPage}`}>
            <div className="fixed_width">
                <h1>Shop Around</h1>
                <StoreCards />
            </div>
        </div>
    )
}

export default ShoppingPage