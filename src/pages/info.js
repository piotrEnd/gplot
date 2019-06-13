import React from 'react';

import styles from '../scss/infodetails.module.scss';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Heading from '../components/Heading';
import Map from '../components/Map';
import Video from '../components/Video';
import Copyright from '../components/Copyright';

const info = () => (
	<Layout>
		<SEO title="informacje" />
		<main className={styles.wrapper}>
			<Heading heading="opis" />
			<section className={styles.specs}>
				<p className={styles.description}>
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
				<div className={styles.keys}>
					<p>Lokalizacja</p>
					<p>Numer działki</p>
					<p>Powierzchnia działki</p>
					<p>Warunki zabudowy</p>
					<p>Przeznaczenie</p>
					<p>Stan prawny</p>
					<p>
						Cena za m<sup>2</sup>
					</p>
				</div>
				<div className={styles.values}>
					<p>Poznań, Górczyn / Kotowo</p>
					<p>306401_1.0037.AR_05.35/17</p>
					<p>
						10'129 m<sup>2</sup>
					</p>
					<p>MPZP Rejon ulicy Mieleszyńskiej w Poznaniu</p>
					<p>zabudowa usługowa</p>
					<p>własność, księga wieczysta wolna od obciążeń</p>
					<p>1273 PLN</p>
				</div>
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
