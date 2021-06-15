import classnames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import GradientButton from '../core/gradient-button';
import { ConnectedWorld, Wave, WaveReversed, TravelBooking } from '../core/icons';
import KitchenSinkCard from '../core/kitchen-sink-card';
import MenuButton from '../core/menu-button';
import Navigation from '../core/navigation';
import RaisedCard from '../core/raised-card';
import ThemedH3 from '../core/themed-h3';
import ThemedP from '../core/themed-p';
import TitleHeading from '../core/title-heading';
import WhiteButton from '../core/white-button';

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
        'gradient',
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
            <WhiteButton className={classnames(
              'mt-4',
              'lg:mt-0',
              'shadow',
              'opacity-75',
            )}>
              Action
            </WhiteButton>
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
      <div className="pt-24">
        <div className={classnames(
          'container',
          'flex',
          'flex-wrap',
          'flex-col',
          'md:flex-row',
          'items-center',
          'px-3',
          'mx-auto',
        )}>
          <div className={classnames(
            'flex',
            'flex-col',
            'justify-center',
            'items-start',
            'w-full',
            'md:w-2/5',
            'text-center',
            'md:text-left',
          )}>
            <p className={classnames(
              'w-full',
              'uppercase',
              'leading-loose',
            )}>
              What business are you?
            </p>
            <h1 className={classnames(
              'my-4',
              'text-5xl',
              'font-bold',
              'leading-tight',
            )}>
              Main Hero Message to sell yourelf!
            </h1>
            <p className={classnames(
              'leading-normal',
              'text-2xl',
              'mb-8',
            )}>
              Sub-hero message, not too long and not too short. Make it just right!
            </p>
            <WhiteButton className={classnames(
              'my-6',
              'shadow-lg',
            )}>
              Subscribe
            </WhiteButton>
          </div>
          <div className={classnames(
            'w-full',
            'md:w-3/5',
            'py-6',
            'text-center',
          )}>
            <div className={classnames('w-full', 'md:w-4/5', 'z-50')}>
              <Image src="/hero.png" width={613} height={529} />
            </div>
          </div>
        </div>
        <Wave />
        <section className={classnames('bg-white', 'border-b', 'py-8')}>
          <div className={classnames(
            'container',
            'max-w-5xl',
            'm-8',
            'mx-auto',
          )}>
            <TitleHeading>Title</TitleHeading>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <ThemedH3>Lorem ipsum dolor sit amet</ThemedH3>
                <ThemedP>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:&nbsp;
                  <a className="text-pink-500 underline">undraw.co</a>
                </ThemedP>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <TravelBooking />
              </div>
            </div>
            <div className={classnames(
              'flex',
              'flex-wrap',
              'flex-col-reverse',
              'sm:flex-row',
            )}>
              <div className={classnames(
                'w-full',
                'sm:w-1/2',
                'mt-6',
                'p-6',
              )}>
                <ConnectedWorld />
              </div>
            </div>
            <div className={classnames(
              'w-full',
              'sm:w-1/2',
              'mt-6',
              'p-6',
            )}>
              <div className="align-middle">
                <ThemedH3>Lorem ipsum dolor sit amet</ThemedH3>
                <ThemedP>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:&nbsp;
                  <a className="text-pink-500 underline">undraw.co</a>
                </ThemedP>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-b py-8">
          <div className={classnames(
            'container',
            'flex',
            'flex-wrap',
            'mx-auto',
            'pt-4',
            'pb-12',
          )}>
            <TitleHeading>Title</TitleHeading>
            <RaisedCard />
            <RaisedCard />
            <RaisedCard />
          </div>
        </section>
        <section className="py-8 bg-gray-100">
          <div className={classnames(
            'container',
            'mx-auto',
            'px-2',
            'pt-4',
            'pb-12',
            'text-gray-800',
          )}>
            <TitleHeading>Pricing</TitleHeading>
            <div className={classnames(
              'flex',
              'flex-col',
              'sm:flex-row',
              'justify-center',
              'pt-12',
              'my-12',
              'sm:my-4',
            )}>
              <KitchenSinkCard
                title="Free"
                items={['Thing', 'Thing', 'Thing']}
              >
                £0&nbsp;
                <span className="text-base">for one user</span>
              </KitchenSinkCard>
              <KitchenSinkCard
                title="Basic"
                items={['Thing', 'Thing', 'Thing', 'Thing']}
              >
                £x.99
                <span className="text-base">/ per user</span>
              </KitchenSinkCard>
              <KitchenSinkCard
                title="Pro"
                items={['Thing', 'Thing', 'Thing']}
              >
                £x.99
                <span className="text-base">/ per user</span>
              </KitchenSinkCard>
            </div>
          </div>
        </section>
        <WaveReversed color="#f8fafc" />
        <section className={classnames()}>609 line</section>
      </div>
    </div>
  );
};

export default Home;
