import React, { useState } from "react";
import "./StoriesPage.css";

const storiesData = [
  { id: 1, story: "I overcame anxiety by practicing mindfulness every day." },
  { id: 2, story: "Talking to friends really helped me during tough times." },
  { id: 3, story: "Journaling helped me process my emotions and stay calm." },
  { id: 4, story: "Exercise gave me a positive outlet for my stress." },
  { id: 5, story: "Therapy was a life-changing experience for me." },
  { id: 6, story: "Meditation helped me find inner peace." },
  { id: 7, story: "I learned to set boundaries and prioritize self-care." },
  { id: 8, story: "Reading books about mental health empowered me." },
  { id: 9, story: "I discovered the power of gratitude journaling." },
  { id: 10, story: "Connecting with a support group made a huge difference." },
];

const StoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const storiesPerPage = 7;

  const totalPages = Math.ceil(storiesData.length / storiesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentStories = storiesData.slice(
    currentPage * storiesPerPage,
    (currentPage + 1) * storiesPerPage
  );

  return (
    <div className="stories-container">
      <h2>User Stories</h2>
      <div className="stories-list">
        {currentStories.map((story) => (
          <div key={story.id} className="story-card">
            <p>{story.story}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          &lt; Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default StoriesPage;
