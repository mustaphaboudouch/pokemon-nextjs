import Link from 'next/link';

import styles from '../../styles/Navbar.module.css';

const Navbar = ({ hideMenu }) => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href='/'>
					<>
						<a>
							Poke<span>mon</span>
						</a>
						<a>
							P<span>m</span>
						</a>
					</>
				</Link>
			</div>
			{!hideMenu && (
				<div className={styles.menu}>
					<Link href='/csr'>
						<a>CSR</a>
					</Link>
					<Link href='/ssr'>
						<a>SSR</a>
					</Link>
					<Link href='/ssg'>
						<a>SSG</a>
					</Link>
					<Link href='/isr'>
						<a>ISR</a>
					</Link>
				</div>
			)}

			<div className={styles.github}>
				<a href='https://github.com/mustaphaboudouch/pokemon-app'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
					</svg>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
