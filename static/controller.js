fetch('/randomtextme/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let gibberish = myjson;
  let randomtextsec =  document.querySelector('#article');
  let gibberish_div = document.querySelector('#article_body');
  for (let paragraph of gibberish.text_out) {
    let p = document.createElement('p');
    p.innerHTML = paragraph;
    p.className = "card-body";
    gibberish_div.appendChild(p);
  }
  randomtextsec.appendChild(gibberish_div);

})
.catch(function(err){
  console.log(err);
})

fetch('/quotesondesign/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let quote = myjson;
  let randomtextsec = document.querySelector('#article');
  let blockquote = document.createElement('blockquote');
  let footer = document.createElement('footer');
  footer.className = "blockquote-footer";
  blockquote.className = "blockquote";
  let p = document.createElement('p');
  p.className = "mb-0";
  p.innerHTML = quote.content;
  blockquote.appendChild(p);
  footer.innerHTML = quote.title;
  blockquote.appendChild(footer);
  randomtextsec.appendChild(blockquote);
})
fetch('/whatdoestrumpthink/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let trump = myjson;
  let trumpreviewssection = document.querySelector('#trumpreviewssection');
  let blockquote = document.createElement('blockquote');
  let footer = document.createElement('footer');
  footer.className = "blockquote-footer";
  blockquote.className = "blockquote";
  let p = document.createElement('p');
  p.className = "mb-0";
  p.innerHTML = trump.message;
  blockquote.appendChild(p);
  footer.innerHTML = "Donald Trump";
  blockquote.appendChild(footer);
  trumpreviewssection.appendChild(blockquote);
})
fetch('/randomtextme/api/headline')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let headline = myjson;
  let randomtextheading = document.querySelector('#randomtextheading');
  randomtextheading.innerHTML = headline.text_out;
})

fetch('/dogs/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let dog = myjson;
  let img_1 = document.querySelector('#img_1');
  img_1.src = dog.message;
})
.catch(function(err){
  console.log(err);
})
fetch('/dogs/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let dog = myjson;
  let img_2 = document.querySelector('#img_2');
  img_2.src = dog.message;
})
.catch(function(err){
  console.log(err);
})
fetch('/dogs/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let dog = myjson;
  let img_3 = document.querySelector('#img_3');
  img_3.src = dog.message;
})
.catch(function(err){
  console.log(err);
})
