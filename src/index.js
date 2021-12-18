// import _ from 'lodash';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import api from './API.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DDdBWoo8t7Ne5TXeJbq6/scores/';
const addBtn = document.getElementById('add-btn');
const refreshBtn = document.getElementById('refresh-btn');
const userName = document.getElementById('name-input');
const userScore = document.getElementById('score-input');

addBtn.addEventListener('click', () => {
  api.sendScores(url, userName, userScore);
});

refreshBtn.addEventListener('click', () => {
  api.getScore(url).then((data) => { api.displayScores(data); });
});