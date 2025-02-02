import styles from "./waves.module.css"

const WavesAnimation = ({ wavesClassname, waveClassname, waveBackground, bottomPositionWave }) => {
    return (
        <div className={`${styles.waves} ${bottomPositionWave}`}>
            <div className={`${styles.wave} ${styles.waveA} ${waveBackground}`} />
            <div className={`${styles.wave} ${styles.waveB} ${waveBackground}`} />
            <div className={`${styles.wave} ${styles.waveC} ${waveBackground}`} />
        </div>
    )
}

export default WavesAnimation;