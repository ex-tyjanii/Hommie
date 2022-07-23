import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<div className='container mx-auto flex justify-between flex-wrap m-h-max'>
				<h1>Hello</h1>

				<ul className='flex w-1/4 justify-between'>
					<li>
						<Link href='/'>Homes</Link>
					</li>
					<li>
						<Link href='/'>Friends</Link>
					</li>
					<li>
						<Link href='/'>Sign Up</Link>
					</li>
				</ul>
			</div>
			<div className='my-20'>
				<h3 className='text-center text-gray-400'>
					Shared apartments in Ireland
				</h3>
				<h1 className='text-center text-2xl font-medium mt-2'>
					Find your new Home in Ireland
				</h1>
				<div className='w-11/12 mx-auto'>
					<div className='flex w-1/3 mx-auto items-center justify-between h-12 bg-gray-100 rounded-full px-3 mt-4 relative'>
						<div className='flex items-center w-10/12'>
							<FaSearch color='#6B7280' />
							<input
								placeholder='Hello input'
								className='bg-gray-100 ml-1 focus:outline-none  w-10/12'
							/>
						</div>

						<div className='bg-slate-900 p-2 rounded-full w-20'>
							<p className='text-white text-center'>Search</p>
						</div>
					</div>
					<div>
						<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl mt-20'>
							<Image
								src='https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
								layout='fill'
								objectFit='cover'
								alt='hello'
							/>
						</div>
						<h3 className='mt-3'>Hello</h3>
						<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
						<h3 className='text-sm'>€850 per Month</h3>
						<section className='grid grid-cols-3 gap-6 mt-20'>
							<div>
								<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl'>
									<Image
										src='https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
										layout='fill'
										objectFit='cover'
										alt='hello'
									/>
								</div>
								<h3 className='mt-3'>Hello</h3>
								<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
								<h3 className='text-sm'>€850 per Month</h3>
							</div>
							<div>
								<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl'>
									<Image
										src='https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
										layout='fill'
										objectFit='cover'
										alt='hello'
									/>
								</div>
								<h3 className='mt-3'>Hello</h3>
								<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
								<h3 className='text-sm'>€850 per Month</h3>
							</div>
							<div>
								<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl'>
									<Image
										src='https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
										layout='fill'
										objectFit='cover'
										alt='hello'
									/>
								</div>
								<h3 className='mt-3'>Hello</h3>
								<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
								<h3 className='text-sm'>€850 per Month</h3>
							</div>
							<div>
								<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl'>
									<Image
										src='https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
										layout='fill'
										objectFit='cover'
										alt='hello'
									/>
								</div>
								<h3 className='mt-3'>Hello</h3>
								<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
								<h3 className='text-sm'>€850 per Month</h3>
							</div>
							<div>
								<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl'>
									<Image
										src='https://images.pexels.com/photos/2371975/pexels-photo-2371975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
										layout='fill'
										objectFit='cover'
										alt='hello'
									/>
								</div>
								<h3 className='mt-3'>Hello</h3>
								<h3 className='text-sm text-gray-400 my-1'>jhghf</h3>
								<h3 className='text-sm'>€850 per Month</h3>
							</div>
							<div>
								<div className='bg-red-100 overflow-hidden h-100 relative  rounded-2xl'>
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
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
