import React, { ReactElement } from 'react';
import './Intro.css';

function Intro(): ReactElement {
  return (
    <div className="intro">
      <div className="container">
        <h1 className="intro__title">Цитаты спортсменов</h1>
        <p className="intro__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem velit veritatis
          delectus laborum quaerat hic, officiis nobis repellendus? Temporibus accusamus ab
          voluptatem rem totam aliquam nihil sit ipsum sequi, facilis adipisci dolor qui quidem
          mollitia nisi, odio perferendis enim minima ex id ratione voluptates sed. Nostrum
          exercitationem a dolorum natus veritatis, nobis totam eum expedita modi commodi qui autem.
        </p>
      </div>
    </div>
  );
}

export default Intro;
