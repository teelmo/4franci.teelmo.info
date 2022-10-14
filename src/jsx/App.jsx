import React from 'react';
import Confetti from 'react-confetti';
import '../styles/styles.less';

function App() {
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <h1>
        Welcome to the page that invites
        {' '}
        <em>Francesca Zago</em>
        {' '}
        woman to eat with Teemo
      </h1>
      <p>Here is a photo of Franci in her natural inhabitat</p>
      <div className="image_container"><img src="./assets/img/4f1d5edd-0559-4a1d-9afd-d195acf63337.jpeg" alt="Franci" /></div>
      <h3>When: 14 October</h3>
      <h3>Where: Caps BBQ</h3>
      <h3>What: Food</h3>
      <p>Here a photo where Franci shows tongue and Teemo follows the action</p>
      <div className="image_container"><img src="./assets/img/IMG_1899.jpeg" alt="Franci & Teemo" /></div>
      <h1>Infor&shy;mation so we don&apos;t die</h1>
      <p>At eight a&apos;clock Geneva time (CET) we gather to Caps BBQ</p>
      <p>There will be other people as well.</p>
      <p>Propably Francesca as she likes food, Helena as she likes nachos, ZuZu as you cannot get red of him, Massi as he is the master mind, Yulia as we always want to have her and Dante because the latin people always come in multiples.</p>
      <p>🇺🇦🇺🇦🇺🇦 SLAVA UKRAINI! 🇺🇦🇺🇦🇺🇦</p>
      <p>Maybe some will cancel. Maybe others will join. This I cannot know but this is all I know.</p>
      <p>Here is a photo where Franci I act like we are surprised as we are also for the reason this event is happening.</p>
      <div className="image_container"><img src="./assets/img/IMG_3162.jpeg" alt="Sara & Zuzu" /></div>
      <h1>So Sara, plz come!</h1>
      <div className="video_container"><iframe width="100%" height="" title="Youtube video" src="https://www.youtube.com/embed/EslzthDFm2w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      <p>This is a bonus photo without any reason</p>
      <div className="image_container"><img src="./assets/img/9D177B91-1603-4B29-8DA9-1BC5B3B62B76.jpeg" alt="Franci" /></div>
    </div>
  );
}
export default App;
