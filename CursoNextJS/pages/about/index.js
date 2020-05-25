export default class extends React.Component {
	render() {
		return (
			<div className='about'>
				<img src='/static/about-logo.png'></img>
				<h1>Escucha Podcast</h1>
				<p>Created by @MemoVDevG</p>
				<p>Powered by https://audioboom.com</p>
				<style jsx>{`
					.about {
						display: flex;
						align-items: center;
						flex-direction: column;
						margin: auto;
					}
					img {
						max-width: 20%;
					}
					:global(body) {
						background: grey;
					}
					h1,
					p {
						color: white;
					}
				`}</style>
			</div>
		);
	}
}
