import React from 'react';

const Card = (props) => {
  const { name, image, description, technologies, github, web } = props.project;
  return (
    <article>
      <h3>{name}</h3>
      <a href={web}><img src={image} alt={name} /></a>
      <p>{description}</p>
      <h4>Technologies</h4>
      <p>{technologies}</p>
      <a href={github}>
        <img className="icon" src="src/images/github-logo.svg" alt="github link" />
      </a>
    </article>
  );
};

Card.propTypes = {
  project: React.PropTypes.object,
};

export default Card;
