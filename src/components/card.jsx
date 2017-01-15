import React from 'react';

const Card = (props) => {
  const { name, image, description, technologies, github, web } = props.project;
  const technologiesStyled = technologies.map(tech =>
    <span>
      {tech}
    </span>,
  );
  return (
    <article>
      <h3>{name}</h3>
      <a href={web}><img src={image} alt={name} /></a>
      <p>{description}</p>
      {/* <p className="technologies">{technologies}</p> */}
      <p className="technologies">{technologiesStyled}</p>
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
