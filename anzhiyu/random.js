var posts=["cspslist/","OI2607/","suyi1st/","ic_test/","icvibelua/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };