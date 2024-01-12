import '../index.css';

const Home = () => (
  <div className="bg-home-bg h-[100svh] bg-contain lg:bg-cover lg:bg-center w-full bg-no-repeat absolute top-0">
    <div className="absolute top-[17%] lg:top-[25%] px-6 md:hidden">
      <h1 className="w-[50%] pb-1 text-xl">Simplify Your Math!</h1>
      {/* eslint-disable-next-line max-len  */}
      <p className="w-[60%]">Welcome to my calculator app! </p>
    </div>
    <div className="hidden absolute  md:top-[14%] px-10 md:block lg:hidden">
      <h1 className="w-[40%] pb-8 text-3xl tracking-wide leading-12">
        Simplify Your Math!
      </h1>
      {/* eslint-disable-next-line max-len  */}
      <p className="w-[37%] text-xl text-justify tracking-wide leading-8">Welcome to my calculator app, your go-to tool for effortless math solutions. Plus, I&apos;ve integrated entertaining quotes to inspire and uplift you while you work.</p>
    </div>
    <div className="hidden absolute  lg:top-[28%] px-10 lg:block">
      <h1 className="w-[40%] pb-6 text-2xl tracking-wide leading-12">
        Simplify Your Math with My Intuitive Calculator App!
      </h1>
      {/* eslint-disable-next-line max-len  */}
      <p className="w-[37%] text-lg text-justify tracking-wide leading-8">Welcome to my calculator app, your go-to tool for effortless math solutions. With a user-friendly interface, my app streamlines calculations for students, professionals, and anyone on the go. Plus, I&apos;ve integrated entertaining quotes to inspire and uplift you while you work. Say hello to simplified math and a dose of inspiration, all in one handy app.</p>
    </div>
  </div>
);
export default Home;
