import Link from 'next/link';
export default class AudioClips extends React.Component {
	render() {
		const { audioClips } = this.props;
		return (
			<>
				{audioClips.map((item) => (
					<Link key={item.id} href={`/podcast?id=${item.id}`}>
						<a>
							<div className='chapterCard'>
								<h3>Capitulo: {item.title} </h3>
								<h4>Reproducir 🔊</h4>
								<p>Descripcion: {item.description}</p>
							</div>
						</a>
					</Link>
				))}

				<style jsx>
					{`
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
					`}
				</style>
			</>
		);
	}
}
