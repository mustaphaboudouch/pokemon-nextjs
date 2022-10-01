/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

import styles from '../../styles/PokemonList.module.css';

const PokemonList = ({ pokemons }) => {
	return (
		<>
			<Head>
				<title>Pokemon - Incremental Static Regeneration</title>
			</Head>

			<Navbar />

			<main className={styles.container}>
				<h1 className={styles.title}>Pokemon List</h1>
				<h2 className={styles.subtitle}>Incremental Static Regeneration</h2>
				<div className={styles.grid}>
					{pokemons.map((pokemon) => (
						<Link key={pokemon.id} href={`/isr/${pokemon.id}`}>
							<a className={styles.card}>
								<img
									src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
									alt={pokemon.name}
								/>
								<h3>{pokemon.name}</h3>
							</a>
						</Link>
					))}
				</div>
			</main>
		</>
	);
};

export const getStaticProps = async () => {
	const response = await fetch(
		'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
	);

	return {
		props: {
			pokemons: await response.json(),
		},
		revalidate: 30, // every 30 sec
	};
};

export default PokemonList;
