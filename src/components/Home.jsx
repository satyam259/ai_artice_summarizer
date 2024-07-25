import { logo } from "../../src/assets";
const Home = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
          <img src={logo} alt="sumz_logo" className="w-36 object-contain" />
          <button
            type="button"
            onClick={() =>
              //for opening in another window
              window.open("https://github.com/satyam259", "satyam259")
            }
            className="black_btn"
          >
            GitHub
          </button>
        </nav>
        <h1 className="head_text">
          Generate Article Summaries With <br className="max-md:hidden" />
          <span className="orange_gradient ">AI-Powered Summization</span>
        </h1>
        <h2 className="desc">
          Introducing Summize: An innovative article summarizer powered by
          OpenAI GPT-4. Transform dense articles into clear, concise summaries
          effortlessly.
        </h2>
      </header>
    </>
  );
};

export default Home;
