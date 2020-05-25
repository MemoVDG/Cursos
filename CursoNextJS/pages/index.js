export default class extends React.Component {
	render() {
		return (
			<div>
				<h1>Hola Platzi!</h1>
				<p>Bienvenido al curso de Next.js</p>
				<img src='/static/logo.png' alt='podcast-logo' />
				<style jsx>{`
					h1 {
						color: red;
					}

					:global(p) {
						color: green;
					}
					img {
						max-width: 50%;
						display: block;
						margin: auto;
					}
				`}</style>

				<style jsx global>
					{`
						body {
							background: yellow;
						}
					`}
				</style>
			</div>
		);
	}
}
