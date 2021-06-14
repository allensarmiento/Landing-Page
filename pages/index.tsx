import classnames from 'classnames';
import Head from 'next/head';
import MenuButton from '../core/menu-button';
import Navigation from '../core/navigation';

const Home = () => {
  return (
    <div className={classnames(
      'w-screen',
      'h-screen',
      'leading-normal',
      'tracking-normal',
      'text-white',
      'gradient',
    )}>
      <Head>
        <title>
          Tailwind Starter Template - Landing Page Template: Tailwind Toolbox
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
        />
      </Head>
      <style jsx global>{`
        .gradient {
          background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
        }

        body {
          font-family: 'Source Sans Pro', sans-serif;
        }
      `}</style>
      <header id="header" className={classnames(
        'fixed',
        'w-full',
        'z-30',
        'top-0',
        'text-white',
      )}>
        <div className={classnames(
          'container',
          'flex',
          'flex-wrap',
          'items-center',
          'justify-between',
          'mx-auto',
          'mt-0',
          'py-2',
          'w-full',
        )}>
          <div className={classnames(
            'flex',
            'items-center',
            'pl-4',
          )}>
            <a className={classnames(
              'toggleColour',
              'text-white',
              'no-underline',
              'hover:no-underline',
              'font-bold',
              'text-2xl',
              'lg:text-4xl',
            )}>
              <svg
                className="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              LANDING
            </a>
          </div>
          <div className={classnames(
            'block',
            'lg:hidden',
            'pr-4'
          )}>
            <MenuButton />
          </div>
          <nav
            id="nav-content"
            className={classnames(
              'flex-grow',
              'lg:flex',
              'lg:items-center',
              'lg:w-auto',
              'hidden',
              'w-full',
              'mt-2',
              'lg:mt-0',
              'p-4',
              'lg:p-0',
              'bg-white',
              'lg:bg-transparent',
              'text-black',
              'z-20',
            )}
          >
            <Navigation />
            <button
              id="navAction"
              className={classnames(
                'mx-auto',
                'lg:mx-0',
                'mt-4',
                'lg:mt-0',
                'py-4',
                'px-8',
                'hover:underline',
                'bg-white',
                'text-gray-800',
                'font-bold',
                'rounded-full',
                'shadow',
                'opacity-75',
                'focus:outline-none',
                'focus:shadow-outline',
                'transform',
                'transition',
                'hover:scale-105',
                'duration-300',
                'ease-in-out',
              )}
            >
              Action
            </button>
          </nav>
        </div>
        <hr className={classnames(
          'border-b',
          'border-gray-100',
          'opacity-25',
          'my-0',
          'py-0',
        )} />
      </header>
      <div></div>
    </div>
  );
};

export default Home;
