import Layout from '../components/Layout';
import AudioClips from '../components/AudioClips';
import Series from '../components/Series';
import Error from './_error';

export default class extends React.Component {
	static async getInitialProps({ query, res }) {
		let idChannel = query.id;
		try {
			let [reqChannel, reqAudio, reqSeries] = await Promise.all([
				fetch(`https://api.audioboom.com/channels/${idChannel}`),
				fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
				fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
			]);

			if (reqChannel.status >= 400) {
				res.statusCode = reqChannel.status;
				return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status };
			}

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
				statusCode: 200,
			};
		} catch (e) {
			return { channel: null, audioClips: null, series: null, statusCode: 503 };
		}
	}

	render() {
		const { channel, audioClips, series, statusCode } = this.props;

		if (statusCode !== 200) {
			return <Error statusCode={statusCode} />;
		}
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
