import React from 'react';
import './HowToDonate.css';
import Donate from '../assets/DONATE.png';
//import DonateFoodItems from '../assets/DonateFoodItems.jpg'

const donateOptions = [
  {
    icon: '🍽️',
    title: 'Donate Non-Perishable Food Items',
    text: 'We accept a wide variety of non-perishable food donations, including Canned goods (vegetables, fruits, soups, beans, meats, etc.), Dry foods (rice, cereal, lentils, flour, etc.), baby food, Cooking oil and spices',
  },
  {
    icon: '📦',
    title: 'Choose the Box',
    text: 'If you’d prefer to donate by choosing the food item that you want to donate, you can view the options available in the **Food-box menu**, we will use your contribution to purchase food and the same combination of items will be consolidated in a Food-box and the same will be delivered to one family.',
  },
  {
    icon: '💰',
    title: 'Donate Financially',
    text: 'If you’d prefer to donate money, we can use your contribution to purchase food in bulk, maintain our operations, and support our community outreach programs. A small donation can go a long way in providing essential meals to families in need.',
  },
  {
    icon: '📣',
    title: 'Host a Food Drive',
    text: 'Consider organizing a food drive at your school, workplace, or community center. We can provide guidance on how to run an effective drive and ensure your efforts support those who need it most.',
  },
];

const HowToDonate = () => {
  return (
    <section className="donate-section">
      <div className="donate-header">
        <h2>How to Donate</h2>
        <p>
          Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem detraxit hosti et quidem se text, ne ad respondendum reddidisti voluptates omittantur maiorum dolorum fuga.
        </p>
      </div>
      <div className="donate-grid">
        {donateOptions.map((item, idx) => (
          <div className="donate-card" key={idx}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <button className="donate-button">Donate Now</button>
      <img src={Donate} alt="Decorative" className="corner-image" />
    </section>
  );
};

export default HowToDonate;
