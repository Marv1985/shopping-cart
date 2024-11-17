import styles from './Checkout.module.css'

const Checkout = () => {
    return (
        <div className={`full_width ${styles.checkout}`}>
            <div className="fixed_width">
                <h1>You have reached the checkout page</h1>
            </div>
        </div>
    )
}

export default Checkout