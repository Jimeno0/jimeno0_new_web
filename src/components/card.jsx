import React from 'react';

const Card = (props) => {
  const { name, image, description, technologies, github, web } = props.project;
  return (
    <article>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div>

        <p>{description}</p>
      </div>
      <div>
        <h3>Technologies</h3>
        <p>{technologies}</p>
      </div>
      <a href={github} ><img src="src/images/github-logo.svg" alt="github link" /></a>
      <hr />
    </article>
  );
};

Card.propTypes = {
  project: React.PropTypes.object,
};

export default Card;
