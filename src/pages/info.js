import React from 'react';

import styles from '../scss/infodetails.module.scss';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Heading from '../components/heading';
import Map from '../components/map';
import Video from '../components/video';
import Copyright from '../components/copyright';

const info = () => (
	<Layout>
		<SEO title="informacje" />
		<main className={styles.wrapper}>
			<Heading heading="opis" />
			<section className={styles.description}>
				<p>
					Działka przylega do wiaduktu przy ulicy Głogowskiej, jednej z najważniejszych
					komunikacyjnie aort aglomeracji poznańskiej, prowadzącej z centrum miasta w kierunku
					południowym. Tutaj ulica Głogowska stanowi również odcinek drogi wojewódzkiej nr 196.
					Działka oddalona jest niespełna półtora kilometra do zjazdu na autostradę A2 i drogę
					krajową nr 5. <br />
					<br />Natężenie ruchu drogowego jest znaczne i odbywa się płynnie. W sąsiedztwie
					znajduje się rozległy kompleks handlowo-usługowy (CH Auchan, Castorama, Galeria A2),
					jak również zwycięzca konkursu na najlepiej zagospodarowaną przestrzeń publiczną w
					Wielkoposce - poznańskie Szachty.
				</p>
			</section>
			<Heading heading="specyfikacja" />
			<section className={styles.specs}>
				<p className={styles.keys}>Lokalizacja</p>
				<p className={styles.values}>Poznań, Górczyn / Kotowo</p>

				<p className={styles.keys}>Numer działki</p>
				<p className={styles.values}>306401_1.0037.AR_05.35/17</p>

				<p className={styles.keys}>Powierzchnia działki</p>
				<p className={styles.values}>
					10'129 m<sup>2</sup>
				</p>

				<p className={styles.keys}>Uzbrojenie</p>
				<p className={styles.values}>sieć elektroenergetyczna, wodociągowa i gazowa</p>

				<p className={styles.keys}>Warunki zabudowy</p>
				<p className={styles.values}>MPZP Rejon ulicy Mieleszyńskiej w Poznaniu</p>

				<p className={styles.keys}>Przeznaczenie</p>
				<p className={styles.values}>zabudowa usługowa do 50% powierzchni działki</p>

				<p className={styles.keys}>Stan prawny</p>
				<p className={styles.values}>własność, księga wieczysta wolna od obciążeń</p>

				<p className={styles.keys}>
					Cena za m<sup>2</sup>
				</p>
				<p className={styles.values}>1273 PLN</p>
			</section>
			<Heading heading="lokalizacja" />
			<section className={styles.map}>
				<Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env
						.GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `100%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</section>
			<Heading heading="video" />
			<section className={styles.video}>
				<Video
					videoSrcURL="https://www.youtube.com/embed/6DKEbNW9xts?playlist=6DKEbNW9xts&loop=1"
					videoTitle="plot 35/17, Poznan / Kotowo"
				/>
			</section>
			<ScrollUpButton
				style={{ backgroundColor: 'transparent', fill: '#7b2b9b', outline: 'none' }}
			/>
			<Copyright />
		</main>
	</Layout>
);

export default info;
