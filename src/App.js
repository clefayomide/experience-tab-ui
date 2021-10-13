import React, { useState, useEffect } from "react";
function App() {
  const [exps, setExp] = useState([]);
  const [val, setVal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getAllExp = async () => {
    const res = await fetch("https://course-api.com/react-tabs-project");
    const data = await res.json();
    setExp(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllExp();
  }, []);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  const { company, dates, duties, title } = exps[val];

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Experience</h1>
        <div className="underline"></div>
      </header>

      <main className="main">
        <div className="container">
          <div className="btn-container">
            {exps.map((exp, index) => {
              return (
                <button
                  onClick={() => setVal(index)}
                  key={exp.id}
                  className={`btn ${index === val && "active"}`}
                >
                  {exp.company}
                </button>
              );
            })}
          </div>

          <section className="job-info">
            <h3 className="job-title">{title}</h3>
            <h4 className="company-name">{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty) => {
              return (
                <div className="duties-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>

                  <p className="duty-text">{duty}</p>
                </div>
              );
            })}
          </section>
        </div>
        <button className="more-info">More Info</button>
      </main>
    </div>
  );
}

export default App;