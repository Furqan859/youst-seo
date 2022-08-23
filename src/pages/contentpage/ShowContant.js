import React from 'react';
import './ShowContant.css';

const ShowContant = () => {
  return (
    <section id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="comment">
        <p v-for="items in item" v-text="items"></p>
          </div>
          </div>
          </div>
      <div class="row">
        <div class="col-6">
      <textarea type="text" class="input" placeholder="Write a comment" v-model="newItem" ></textarea>
          <button class='primaryContained float-right' type="submit">Add Comment</button>
        </div>
      </div>
    </div>
    <div class="container">
     
      <div class="row">
        <div class="col-6">
        <input type="text" class="form-control"/>
          <button class='primaryContained float-right' type="submit">Serach</button>
        </div>
      </div>
    </div>
    
  </section>
  )
}

export default ShowContant