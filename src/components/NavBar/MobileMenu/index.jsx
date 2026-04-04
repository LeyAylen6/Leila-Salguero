import * as React from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import star from './../../../assets/commons/star.svg';
import { IconClose } from '../../icons';
import styles from './mobileMenu.module.css';

const MobileMenu = ({ open, toggleDrawer, tabs }) => {
  const { t } = useTranslation('common');

  React.useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') toggleDrawer(false)();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, toggleDrawer]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={toggleDrawer(false)}
        role="presentation"
        aria-hidden={!open}
      />
      <aside
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
        aria-modal="true"
        role="dialog"
        aria-label={t('navbar.mobile_menu')}
      >
        <div className={styles.drawerHeader}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={toggleDrawer(false)}
            aria-label={t('navbar.close_menu')}
          >
            <IconClose size={28} />
          </button>
        </div>
        <nav id="mobile-drawer-nav" aria-label="Mobile">
          <ul className={styles.list}>
            {tabs.map((tab) => (
              <li key={tab.id} className={styles.item}>
                <a
                  href={tab.redirect}
                  className={styles.link}
                  onClick={toggleDrawer(false)}
                >
                  <img
                    src={star}
                    width={30}
                    height={30}
                    alt=""
                    className={styles.linkIcon}
                  />
                  <span>{t(`navbar.${tab.id}`)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>,
    document.body
  );
};

export default MobileMenu;
