export default class PodcastPlayer extends React.Component {
	render() {
		const { clip, onClose } = this.props;
		return (
			<div className='clip'>
				<nav>
					{onClose ? (
						<a onClick={onClose}>&alt; Volver</a>
					) : (
						<Link href={`/channel?id=${clip.channel.id}`}>
							<a className='close'>&alt; Vover</a>
						</Link>
					)}
				</nav>

				<picture>
					<div></div>
				</picture>
			</div>
		);
	}
}
