// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I AM the danger.', 'Whats the most you ever lost on a coin toss?!', 'If it was easy it would just be called the way', 'Heres looking at you, kid'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
// Flashlight for the scavenger hunt
async function fetchcontent() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();
    const hellocontent = document.getElementById('hellocontent');
    hellocontent.innerText = textFromResponse;
  }
  function update(flash){
    var x = flash.clientX || flash.touches[0].clientX
    var y = flash.clientY || flash.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)
