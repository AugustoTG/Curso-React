
export const loadPosts = async ()=>{
  const postsPesponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
  const [posts, photos] = await Promise.all([postsPesponse, photosResponse]);
    
  const postJson = await posts.json();
  const photosJson = await photos.json();
    
  const postAndPhotos = postJson.map((post, index)=>{
      return {...post, cover: photosJson[index].url}
  });
    
  return postAndPhotos;
    
}