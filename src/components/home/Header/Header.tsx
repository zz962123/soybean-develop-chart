import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>LOGO NAME</span>
        <div className={styles.nav}>
          <p>거래소</p>
          <p>입출금</p>
          <p>투자내역</p>
          <p>코인정보</p>
          <p>고객센터</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.side}>
          <p>로그인</p>
          <p>회원가입</p>
          <span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3335 16L16.0002 21.3333L22.6668 16" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.3335 26.6667H26.6668" stroke="#111111" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
              <path d="M16 5.33333V21.3333" stroke="#111111" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
          </span>
          <span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.0002" cy="16" r="10.6667" stroke="#111111" stroke-width="2" />
              <path d="M5.3335 16H26.6668" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.0008 5.33333C12.8896 8 8.66683 18.6667 16.0008 26.6667" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.9992 5.33333C19.1104 8 23.3332 18.6667 15.9992 26.6667" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
