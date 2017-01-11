import React from 'react';

const Card = (props) => {
  const { name, image, description, technologies, github, web } = props.project;
  return (
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Technologies</h3>
      <p>{technologies}</p>
      <a href={github} ><img src="src/images/github-logo.svg" alt="github link" /></a>
      <a href={web} >View app</a>
    </article>
  );
};

Card.propTypes = {
  project: React.PropTypes.object,
};

export default Card;
