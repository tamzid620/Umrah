const ErrorPage = () => {
  return (
    <div>
      <section className=" flex items-center justify-center min-h-screen bg-[#25476a]">
        <div className=" container text-center">
          <div className="mx-auto max-w-[400px]">
            <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
              404
            </h2>
            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
              Oops! That page can't be found
            </h4>
            <p className="mb-8 text-lg text-white">
              The page you are looking for it maybe deleted
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-[#25476a]"
            >
              Go to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
