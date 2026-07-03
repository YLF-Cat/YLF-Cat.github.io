var posts=["ic_test/","cspslist/","icvibelua/","welcome/","OI2607/","suyi1st/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };