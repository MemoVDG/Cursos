import Layout from '../components/Layout';
import AudioClips from '../components/AudioClips';
import Series from '../components/Series';

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
			<Layout title={channel.title}>
				{console.log(channel)}
				<img src={channel.urls.logo_image.original} />
				<h1>{channel.title} </h1>
				<h1>Ultimos capitulos</h1>
				<AudioClips audioClips={audioClips} />
				<h1>Series</h1>
				<Series series={series} />

				<style jsx>{`
					img {
						max-width: 200px;
						display: block;
						margin-left: auto;
						margin-right: auto;
						margin-top: 10px;
					}
					h1 {
						text-align: center;
					}
				`}</style>
			</Layout>
		);
	}
}
