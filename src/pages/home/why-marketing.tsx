import React from 'react';
import Lottie from 'react-lottie-player';

import thinking from '../../lottie/thinking.json';

export default function WhyMarketing() {
	return (
		<section className='mt-20'>
			<h2 className='text-center text-8xl text-primary font-semibold '>
				Why <b className='text-secondary'>Marketing</b> ?
			</h2>{' '}
			<div className='h-[400px] -mt-[100px] flex justify-center'>
				<Lottie
					loop
					animationData={thinking}
					play
					style={{ background: 'transparent' }}
				/>
			</div>
			<p className='text-gray-600 text-md -mt-10'>
				Do you know what your customers want? Do you think your customers trust
				your products? When was the last time you saw a customer tweeting about
				your product or service? Was it a complaint or compliment?
			</p>
			<h5 className='text-primary text-4xl font-semibold mt-10'>
				The answers to all these questions lie in marketing.{' '}
			</h5>{' '}
			<p className='text-gray-600 text-md mt-10'>
				How you market your business determines if the enterprise will be
				successful or not. Marketing is a tool used to create and maintain
				demand, relevance, reputation, competition and more. Without it, your
				business is likely to close down due to lack of sales.
			</p>
		</section>
	);
}
