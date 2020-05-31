import Link from 'next/link';

export default class extends React.Component {
	static async getInitialProps({ query }) {
		let idChannel = query.id;

		let [reqChannel, reqAudio, reqSeries] = await Promise.all([
			fetch(`https://api.audioboom.com/channels/${idChannel}`),
			fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
			fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
		]);

		let dataChannel = await reqChannel.json();
		let channel = dataChannel.body.channel;

		let dataAudios = await reqAudio.json();
		let audioClips = dataAudios.body.audio_clips;

		let dataSeries = await reqSeries.json();
		let series = dataSeries.body.channels;

		// Promise.all sirve para paralelizar las request
		return {
			channel,
			audioClips,
			series,
		};
	}

	render() {
		const { channel, audioClips, series } = this.props;
		return (
			<div>
				<header>Podcast</header>
				<img src={channel.urls.logo_image.original} />
				<h1>{channel.title} </h1>
				<h1>Ultimos capitulos</h1>

				{audioClips.map((item) => (
					<Link key={item.id} href={`/podcast?id=${item.id}`}>
						<a>
							<div className='chapterCard'>
								<h3>Capitulo: {item.title} </h3>
								<h4>Reproducir &#9658;</h4>
								<p>Descripcion: {item.description}</p>
							</div>
						</a>
					</Link>
				))}

				<h1>Series</h1>
				{series.map((item) => (
					<div className='chapterCard'>
						<h3>Nombre: {item.title} </h3>
					</div>
				))}
				<style jsx>{`
					header {
						color: #fff;
						background: #8756ca;
						padding: 15px;
						text-align: center;
					}

					img {
						max-width: 200px;
						display: block;
						margin-left: auto;
						margin-right: auto;
						margin-top: 10px;
					}

					.chapters {
						max-width: 60%;
						display: block;
						background: white;
						margin-left: auto;
						margin-right: auto;
						border-radius: 20px;
						padding: 5px;
					}

					a {
						color: inherit;
						text-decoration: none;
					}

					.chapterCard {
						padding: 5px;
						border-radius: 10px;
						border-style: solid;
						border-width: medium;
						margin: 10px;
					}

					h1 {
						padding: 5px;
						margin: 0;
						text-align: center;
					}
				`}</style>

				<style jsx global>
					{`
						body {
							margin: 0;
							font-family: system-ui;
							background: yellow;
						}
					`}
				</style>
			</div>
		);
	}
}
