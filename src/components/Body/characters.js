import React from "react";
import "./characters.css";

const CharacterCard = props => (
<div className="cards">
    <button id={props.id}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </button>
</div>
);

export default CharacterCard;
