import React from 'react';
import Profile from './components/profile';

const data = [
    {
        image: 'http://lorempixel.com/400/200/',
        name: 'Sally'
    },
    {
        image: 'http://lorempixel.com/400/200/',
        name: 'Rob'
    },
    {
        image: 'http://placekitten.com/200/300',
        name: 'Ned'
    },
];

const App = () => {
    return <div>
        {
            data.map((person) => <Profile key={person.name} image={person.image} name={person.name}/>)
        }
    </div>
}

export default App;