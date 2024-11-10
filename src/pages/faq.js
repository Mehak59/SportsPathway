import React, { useState } from 'react';
import './faq.css'; // Ensure the CSS file is linked properly

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I find a local sports league or team?",
      answer: "You can find local sports leagues or teams by checking online directories, community centers, or sports facilities in your area."
    },
    {
      question: "How do I prepare for a sports competition?",
      answer: "To prepare for a sports competition, focus on training, nutrition, rest, and mental preparation."
    },
    {
      question: "How can I manage stress and anxiety before a competition?",
      answer: "You can manage stress and anxiety before a sports competition by practicing relaxation techniques, focusing on positive thoughts, and visualizing success."
    },
    {
      question: "How can I handle disagreements or conflicts with other players or officials?",
      answer: "Approach disagreements or conflicts calmly, communicate respectfully, and seek solutions together."
    },
    {
      question: "What are some basic warmup exercises?",
      answer: (
        <ul>
          <li>Light cardio: Jogging, jumping jacks, or cycling</li>
          <li>Dynamic stretches: Arm circles, leg swings, torso twists</li>
          <li>Joint mobility exercises: Neck rolls, shoulder shrugs, wrist and ankle circles</li>
          <li>Muscle activation exercises: Glute bridges, planks, push-ups</li>
        </ul>
      )
    },
    {
      question: "What is sports psychology and how can it help me?",
      answer: "Sports psychology is the study of how psychological factors affect athletic performance. It can help you improve your mental skills, manage stress, and enhance your overall performance."
    },
    {
      question: "How can I prepare myself before a Tournament?",
      answer: "Preparing for a tournament requires a holistic approach. Prioritize regular training sessions to improve your skills and fitness. Fuel your body with a balanced diet to provide the necessary energy and nutrients. Ensure you get enough rest to allow your body to recover and prevent injuries. Additionally, work on your mental preparation through techniques like visualization, positive affirmations, and stress management to boost your confidence and focus."
    }
  ];

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h4 className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
          </h4>
          <div
            className="faq-answer"
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            <p className="para">{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
