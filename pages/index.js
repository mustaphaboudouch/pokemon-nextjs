import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pokemon - NextJS</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Pokemon - NextJS</h1>
				<p>Pokemon App using different forms of Pre-rendering in NextJS</p>
			</main>

			<footer>
				<p>
					<span>
						Made with <span>♥️</span> by
					</span>
					<a href='https://github.com/mustaphaboudouch'>Mustapha</a>
				</p>
			</footer>
		</div>
	);
}
