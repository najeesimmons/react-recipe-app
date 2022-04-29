import { useEffect, useState} from "react";

function Popular() {

   const [popular, setPopular] = useState([]); 
  // useEffect will run the getPopular function as soon as  component is mounted  

  useEffect(() => {
      getPopular();
  // in square brackets below, a condition can be added which re-triggers useEffect/
  // getPopular    
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes)
  };

  return <div>
      {popular.map(recipe => {
          return (
              <div key={recipe.id}>
                  {recipe.title}
            </div>
          )
      })}
  </div>;
}

export default Popular;
