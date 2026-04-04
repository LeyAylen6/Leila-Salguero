import { createPortal } from 'react-dom';
import { IconCheckCircle, IconReportProblem, IconClose } from '../../icons';
import styles from './FormFeedbackModal.module.css';

export default function FormFeedbackModal({
  open,
  onClose,
  variant,
  title,
  message,
  detail,
  okLabel,
  closeLabel,
}) {
  const isSuccess = variant === 'success';

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.paper}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-feedback-title"
        aria-describedby="form-feedback-desc"
      >
        <div
          className={`${styles.accentBar} ${isSuccess ? styles.accentSuccess : styles.accentError}`}
          aria-hidden
        />

        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label={closeLabel}
        >
          <IconClose size={20} />
        </button>

        <div className={styles.content} id="form-feedback-desc">
          <div
            className={`${styles.iconCircle} ${isSuccess ? styles.iconCircleSuccess : styles.iconCircleError}`}
          >
            {isSuccess ? (
              <IconCheckCircle className={styles.iconSuccess} size={40} />
            ) : (
              <IconReportProblem className={styles.iconError} size={40} />
            )}
          </div>

          <h2 id="form-feedback-title" className={styles.title}>
            {title}
          </h2>

          <p
            className={`${styles.message} ${detail ? styles.messageWithDetail : ''}`}
          >
            {message}
          </p>

          {detail ? (
            <pre className={styles.detail}>{detail}</pre>
          ) : null}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.okBtn} ${isSuccess ? styles.okSuccess : styles.okError}`}
            onClick={onClose}
          >
            {okLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
