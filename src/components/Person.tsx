import React, { Component } from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        This person of name {person.name}, With age {person.age} Doing Course in{" "}
        {person.course} branch
      </h2>
    </div>
  );
}
export default Person;
