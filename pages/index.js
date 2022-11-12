import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import background from './components/Images/freq3.png';
import Logo from './components/Images/logo12al.png';

export default function Home() {
  return (
    <div className="font-bold text-xl bg-white h-screen">
      <Image
        className="mt-24 z-10 lg:bottom-24 absolute "
        src={background}
        position="fixed"
        width={2000}
        height={10}
      />
      <Head>
        <title>12 Audio Labs</title>
      </Head>

      <div className="relative z-10 py-6  bg-white space-y-16 lg:space-y-32">
        <div className="text-center space-y-10 bg-white">
          <h3 className="font-bold text-xl uppercase tracking-wider text-black">
            Coming soon
          </h3>
          <Image
            className="mx-auto"
            src={Logo}
            position="fixed"
            width={300}
            height={0}
          />
          {/* <h1 className="text-7xl lg:text-9xl font-extrabold tracking-tight text-white shadow-lg">
            12 Audio Labs
          </h1> */}

          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto text-slate-700 trackign-tight">
            We`re under construction. Check back for an update soon. Stay in
            touch!
          </p>
        </div>
        <form
          className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto"
          action="https://formspree.io/f/meqdvbdj"
          method="POST"
        >
          <input
            required
            type="email"
            name="email"
            placeholder="You Email Id"
            className="w-full text-xl font-medium text-gray-900 bg-slate-100 shadow-md placeholder-gray-400 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
          />
          <button
            className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-gray-600"
            type="submit"
          >
            Notify me
          </button>
        </form>
      </div>
      <div className="flex bg-white ">
        <ul className="flex mx-auto space-x-3 bg-white lg:mt-32 mt-32 mb-12">
          <li>
            <Link
              href="https://instagram.com/attaboiilabs/"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black transition ease-in-out duration-500 hover:bg-black hover:text-white hover:shadow-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://instagram.com/attaboiilabs/"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
