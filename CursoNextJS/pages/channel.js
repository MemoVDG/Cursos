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
				<h1>{channel.title} </h1>
				<h1>Ultimos capitulos</h1>
				{audioClips.map((item) => (
					<div>{item.title}</div>
				))}

				<h1>Series</h1>
				{series.map((item) => (
					<div>{item.title}</div>
				))}
				<style jsx>{`
					header {
						color: #fff;
						background: #8756ca;
						padding: 15px;
						text-align: center;
					}

					.channels {
						display: grid;
						grid-gap: 15px;
						padding: 15px;
						grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
					}

					.channel {
						display: block;
						border-radius: 3px;
						box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
						margin-bottom: 0.5em;
					}

					.channel img {
						width: 100%;
					}

					h2 {
						padding: 5px;
						font-size: 0.9em;
						font-weight: 600;
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
