import React from "react";
import "./characters.css";

const CharacterCard = props => (
        <div className="cards">
                <div className="img-container">
                        <img id={props.id} alt={props.name} src={props.image} />
                </div>
        </div>
);

export default CharacterCard;
