import Link from 'next/link';
import Image from 'next/image';

const Album = props => {
	return (
		<div>
			<Link href={props.url} target='_blank'>
				<Image
					src={props.imgUrl}
					alt={props.name}
					width={300}
					height={300}
					className='hover:opacity-50'
				/>
			</Link>
		</div>
	);
};

export default Album;
