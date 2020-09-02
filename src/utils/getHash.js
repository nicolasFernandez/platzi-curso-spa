
// cuando vamos a retornar un elemento no es necesario usar llaves en la arrow function
const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;