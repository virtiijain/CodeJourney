import { useState, useEffect } from "react";
import { questions } from "./constants/questions";

function App() {
  const [category, setCategory] = useState("htmlcss");

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("completedQuestions");
    return saved
      ? JSON.parse(saved)
      : {
          htmlcss: {},
          javascript: {},
          react: {},
          nextjs: {},
          reactnative: {},
          nodejs: {},
        };
  });

  useEffect(() => {
    localStorage.setItem("completedQuestions", JSON.stringify(completed));
  }, [completed]);

  const toggleDone = (cat, q) => {
    setCompleted((prev) => {
      const prevCat = prev[cat] || {};
      return {
        ...prev,
        [cat]: {
          ...prevCat,
          [q]: !prevCat[q],
        },
      };
    });
  };

  const allQuestions = questions[category].categories.flatMap((cat) =>
    cat.type === "coding" ? cat.questions : cat.questions.map((qObj) => qObj.q)
  );

  const doneCount = Object.values(completed[category] || {}).filter(
    Boolean
  ).length;
  const totalCount = allQuestions.length;
  const percent = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <section className="app">
      <header className="header">
        <h1>CodeJourney</h1>
        <p className="subtitle">Every question checked is one step closer.</p>
      </header>

      <div className="controls">
        <div className="tabs">
          {Object.keys(questions).map((cat) => (
            <button
              key={cat}
              className={`tab ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {questions[cat].title}
            </button>
          ))}
        </div>
      </div>

      <div className="progress-card">
        <p>
          <strong>{doneCount}</strong> / {totalCount} completed
        </p>
        <div className="bar">
          <div className="fill" style={{ width: `${percent}%` }}></div>
        </div>
      </div>

      <div className="questions">
        {questions[category].categories.map((cat, i) => (
          <div key={i} className="category-block">
            <h3>{cat.name}</h3>
            <div className="question-list">
              {cat.type === "coding" &&
                cat.questions.map((q, idx) => (
                  <label key={idx} className="question">
                    <input
                      type="checkbox"
                      checked={completed[category]?.[q] || false}
                      onChange={() => toggleDone(category, q)}
                    />
                    <span>{q}</span>
                  </label>
                ))}

              {cat.type === "mock" &&
                cat.questions.map((qObj, idx) => (
                  <label key={idx} className="question mock">
                    <input
                      type="checkbox"
                      checked={completed[category]?.[qObj.q] || false}
                      onChange={() => toggleDone(category, qObj.q)}
                    />
                    <div>
                      <span className="mock-q">{qObj.q}</span>
                      <p className="mock-a">
                        <strong style={{ color: "#00e676" }}>Answer:</strong>{" "}
                        {qObj.a}
                      </p>
                    </div>
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
