import React, { Component } from "react";
import Person from "./Person";

function ListRender() {
  /*  const list = ["Person1", "Person2", "Person3", "Person4"];
  const listRender = list.map(name => (
    <div>
      <h2>{name}</h2>
    </div>
  ));
  return <div>{listRender}</div>; */
  const persons = [
    {
      id: 1,
      name: "person1",
      age: 28,
      course: "CSE"
    },
    {
      id: 2,
      name: "person2",
      age: 29,
      course: "E & C"
    },
    {
      id: 3,
      name: "person3",
      age: 30,
      course: "IT"
    },
    {
      id: 4,
      name: "person4",
      age: 31,
      course: "ME"
    }
  ];

  const personRender = persons.map(person => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personRender}</div>;
}
export default ListRender;
