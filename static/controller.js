fetch('/randomtextme/api/generate')
.then(function(response){
  return response.json();
})
.then(function(myjson){
  let gibberish = myjson;
  let randomtextsec =  document.querySelector('#randomtext');
  let gibberish_div = document.createElement('div');
  for (let paragraph of gibberish.text_out) {
    let p = document.createElement('p');
    p.innerHTML = paragraph;
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
  let randomtextsec = document.querySelector('#randomtext');
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
