export default {
    characterQuotesWMovieName: state => {
        const coso= state.characterQuotesWMovieId.map(characterQuote =>{
            const index=state.movies.findIndex(movie=> movie["_id"] === characterQuote["movie"]);
            const {name}= index !== -1 ? state.movies[index] : {};
            console.log(name);
      
            return{
                ...characterQuote,
                name
            }
        })

        return coso;
    },
}