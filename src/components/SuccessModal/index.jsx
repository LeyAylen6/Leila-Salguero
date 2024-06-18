import styles from "./successModal.module.css"

const SuccessModal = () => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.modalClose} onClick={() => { }}>
                    &times;
                </button>
                <div className={styles.modalContent}>
                    text
                </div>
            </div>
        </div>
    );

}

export default SuccessModal;