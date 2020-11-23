import './About.css';
import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about__photo"></div>
      <div className="about__text-container">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__paragraph">Меня зовут Стас Михайлов и я уже год занимаюсь front-end разработкой. Данный проект является заключительным в ходе обучения на платформе, которая помогла мне обрести профессию мечты - Яндекс.Практикум. Начиная практически с нуля, но благодаря лучшим наставникам и ревьюерам, менее чем за год удалось освоить достаточно большой объем непростых технологий.</p>
        <p className="about__paragraph">На данный момент мой основной стек состоит из: HTML, CSS, JS, JQuery, React, Redux, Node.js, Backbone, Underscore.js, RequireJs, Nginx, Git, webpack. Я работаю в IT-компании и участвую в разработке сложных интерфейсов для крупных заказчиков. Я безумно люблю свою работу, каждая задача по-своему интересна и сложна, постоянно учишься чему-то новому.</p>
        <p className="about__paragraph">Спасибо Яндекс.Практикуму за бесценные знания и поддержку в развитии по новой для меня профессии!</p>
      </div>
    </section>
  );
}

export default About;
