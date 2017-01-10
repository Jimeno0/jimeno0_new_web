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
      <button href={web} >View app</button>
      <button href={github} >source code</button>
    </article>
  );
};

// Card.propTypes.project = React.PropTypes.array.isRequired;

export default Card;
