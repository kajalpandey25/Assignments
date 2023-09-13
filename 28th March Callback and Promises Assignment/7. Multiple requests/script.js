async function fetchCombinedData() {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      ]);
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
  
      // convert todo and details is an object 
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      // print this object 
      console.log(combinedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  fetchCombinedData();