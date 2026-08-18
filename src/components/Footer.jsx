import styles from '../styles/style';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Kerem Andaç Vatansever · Tüm hakları saklıdır.
    </footer>
  );
}