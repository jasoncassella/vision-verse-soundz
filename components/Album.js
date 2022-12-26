import Link from 'next/link';
import Image from 'next/image';

const Album = props => {
	return (
		<div className='album'>
			<Link href={props.url} target="_blank">
				<Image src={props.imgUrl} alt={props.name} width={300} height={300} />
			</Link>
		</div>
	);
};

export default Album;
