import React from 'react';

const Card = (props) => {
  const { name, image, description, technologies, github, web } = props.project;
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Technologies</p>
      <p>{technologies}</p>
      <a href={web} >View app</a>
      <a href={github} >source code</a>
    </article>
  );
};

Card.propTypes = {
  project: React.PropTypes.object,
};

export default Card;
