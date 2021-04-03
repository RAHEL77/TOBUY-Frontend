import Ingredent from './Ingredent'
const Recipe=(props)=>{
    return(
        <div>
            <fieldset>
                <p>{props.title}</p>
                <img src={props.recipe.strMealThumb} alt={props.recipe.title} style={{width:'10vw'}}/>

                <br/>
                <Ingredent name={props.recipe.strIngredient1}/>
                {/* <Ingredent measure={props.recipe.strIngredient1}/> */}
            </fieldset>
        </div>
    )
}
export default Recipe;