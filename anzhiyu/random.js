var posts=["cspslist/","ic_test/","OI2607/","suyi1st/","icvibelua/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };