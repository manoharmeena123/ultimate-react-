import React from 'react'



const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  

 function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  
 const Topics = () => {
    const listItems = people.map((person,index) =>
        <li className='pt-3 p-2 row-gap-md-4 ' style={{boxShadow :"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
         key={person.indexd}>
            <img className='rounded-circle'
            src={getImageUrl(person)} alt={person.name}
             />
             <p style={{color:"black"}}>
                <b >{person.name}</b>
                {' '+person.profession+ ' '}
                know for {person.accomplishment}
             </p>
        </li>
        
        );

  return <ol className='bg-light text-black m-1' >{listItems}</ol>
} 
export default Topics