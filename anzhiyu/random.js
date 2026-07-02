var posts=["cspslist/","ic_test/","OI2607/","icvibelua/","suyi1st/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };