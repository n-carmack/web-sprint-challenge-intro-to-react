// Write your Character component here
import styled from 'styled-components';

const CharacterWrapperDiv = styled.div`

`;
const CharacterNameDiv = styled.div`
    margin: auto;
    border: solid black;
    color: black;
    width: 25%;
    padding: 1rem;
    font-weight: bold

`;

const Character = (props) =>{
    return (
        props.list.map(character=>(
            <CharacterNameDiv>{character.name} Height:{character.height}</CharacterNameDiv>
        ))
            
    )
}

export default Character;