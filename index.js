import {useState} from 'react';
export default function Home() {
	const [email, setEmail] = useState('');
	const [res, setRes] = useState(false);
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Email <span className="text-secondary">Validator</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check if an email address exists or not
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					className="flex w-full justify-center md:flex-col md:w-5/6"
					onSubmit={e => checkValidity(e)}
				>
					<input
						autoFocus={true}
						type="email"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter the email address..."
						onChange={e => setEmail(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
						onClick={checkValidity}
					>
						Validate
					</button>
				</form>
			</div>
		</div>
	);
}
