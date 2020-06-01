export default class Series extends React.Component {
	render() {
		const { series } = this.props;
		return (
			<>
				{series.map((item) => (
					<div className='chapterCard' key={item.id}>
						<h3>Nombre: {item.title} </h3>
					</div>
				))}

				<style jsx>
					{`
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
