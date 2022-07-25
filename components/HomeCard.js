import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const HomeCard = () => {
	return (
		<div>
			<div className='bg-red-100 overflow-hidden h-80 relative rounded-2xl'>
				<Image
					src='https://images.pexels.com/photos/210538/pexels-photo-210538.jpeg?auto=compress&cs=tinysrgb&w=1200'
					layout='fill'
					objectFit='cover'
					alt='hello'
				/>
			</div>
			<h3 className='mt-3'>Hello</h3>
			<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
			<h3 className='text-sm'>€850 per Month</h3>
		</div>
	);
};

export default HomeCard;
