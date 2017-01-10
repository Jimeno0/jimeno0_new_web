import React from 'react';

const Card = (props) => {
  const { name, image, description, technologies, github, web } = props.project;
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Technologies</p>
      <h3>{technologies}</h3>
      <a href={github} ><img src="src/images/github-logo.svg" alt="github link" /></a>
      <a href={web} >View app</a>
    </article>
  );
};

Card.propTypes = {
  project: React.PropTypes.object,
};

export default Card;
