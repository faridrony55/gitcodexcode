import React from 'react';

const Links = (props) => {
    const { title , websitelink , id } = props.portfolioLink;
    return (
        <>
          <li><a key={id} href={websitelink} target="_blank">{websitelink}</a></li>  
        </>
    );
};

export default Links;