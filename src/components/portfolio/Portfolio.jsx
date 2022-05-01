import React from 'react';
import './Portfolio.css';
import portfolio2 from '../../assets/portfolio2.jpg'
import todoapp from '../../assets/todoapp.png'
import music from '../../assets/music.png'

const data = [
    {
        id: 1,
        image: portfolio2,
        title: 'Shopping Site',
        github:  "https://github.com/chuongtran01/simplemusicplayer",
        demo: "https://dribble.com/Allen_pixels"
    },
    {
        id: 1,
        image: music,
        title: 'Simple Music Player',
        github:  "https://github.com/chuongtran01/simplemusicplayer",
        demo: "https://chuongtran01.github.io/simplemusicplayer/"
    },
    {
        id: 1,
        image: todoapp,
        title: 'To-do App',
        github:  "https://github.com/chuongtran01/todoapp",
        demo: "https://chuongtran01.github.io/todoapp/"
    },
]

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn2' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;