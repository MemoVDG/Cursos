import Link from 'next/link';

export default class extends React.Component {
	static async getInitialProps({ query }) {
		let idChannel = query.id;

		let reqPodcast = await fetch(`https://api.audioboom.com/audio_clips/${idChannel}.mp3`);
		let dataPodcast = await reqPodcast.json();
		let podcast = dataPodcast.body.audio_clip;
		// Promise.all sirve para paralelizar las request
		return {
			podcast,
		};
	}

	render() {
		const { podcast } = this.props;
		return (
			<div>
				<header>
					<Link href={`/channel?id=${podcast.channel.id}`}>
						<a>← Volver</a>
					</Link>
				</header>
				{console.log(podcast)}
				<div className='podcast'>
					<img src={podcast.urls.post_image?.original} />
					<div className='information'>
						<h3>{podcast.title}</h3>
						<p>{podcast.description}</p>
						<audio controls>
							<source src={podcast.urls.high_mp3} type='audio/mpeg' />
							Your browser does not support the audio element.
						</audio>
					</div>
				</div>
				<style jsx>{`
					header {
						color: #fff;
						background: #8756ca;
						padding: 15px;
					}

					img {
						max-width: 200px;
						display: block;
						margin-left: auto;
						margin-right: auto;
						margin-top: 10px;
						border-radius: 10%;
					}

					.information {
						background-color: #7a7a7a;
						color: white;
						border-bottom-left-radius: 17px;
						border-bottom-right-radius: 17px;
					}

					.podcast {
						max-width: 60%;
						display: block;
						margin-left: auto;
						margin-right: auto;
						margin-top: 15px;
						border-radius: 20px;
						border-style: solid;
						border-width: medium;
						text-align: center;
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
