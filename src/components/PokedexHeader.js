import React from "react";
import {
    Header,
    Segment,
    Image
} from 'semantic-ui-react'

const PokedexHeader = ({author,name}) => {
    return(
        <Segment basic inverted padded='very' vertical> 
            <Header size='huge'>This is a Header for {name} Pokedex!</Header>
            <Image  src='Haunter.png' size='small' centered />
            <Header size="h3">Author : {author}</Header>
        </Segment> 
      
    )
  } 

export default PokedexHeader