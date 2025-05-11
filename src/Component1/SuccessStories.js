import React, { useEffect, useState } from 'react';
import './SuccessStories.css';
import AshaStory from '../assets/AshaStory.png';
import PintoStory from '../assets/PintoStory.png';
import AnandStory from '../assets/AnandStory.png';

const stories = [
  {
    name: "Asha’s Story",
    image: AshaStory,
    quote: "I never thought I’d need help, but when I lost my job and faced eviction, Goodgive provided us with food and connected us to other resources. Thanks to them, we’re starting to rebuild our lives.",
  },
  {
    name: "Pinto’s Story",
    image: PintoStory,
    quote: "I lost my job during the pandemic and was struggling to feed my children. Goodgive provided us with nutritious meals every month, which gave me one less thing to worry about. I am so grateful for your support.",
    highlight: true,
  },
  {
    name: "Anand’s Story",
    image: AnandStory,
    quote: "When my father became ill, I had to take time off work to care for him. The food I received from the food bank allowed me to focus on his recovery without the stress of how to feed my family.",
  },
];

function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentStory = stories[currentIndex];

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <p>Your donations and support help change lives. Here is one of the stories that inspires us:</p>
      <div className="story-card single">
        <img src={currentStory.image} alt={currentStory.name} className="story-image" />
        <h3>{currentStory.name}</h3>
        <p className="quote">“{currentStory.quote}”</p>
      </div>
    </section>
  );
}

export default SuccessStories;
