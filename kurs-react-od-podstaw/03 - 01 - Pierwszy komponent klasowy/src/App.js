import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import './index.css';

const initialStateItems = [
    {
        image: "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/square_480/oapgW_Fp_400x400.jpg",
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: "https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg",
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS.jpg",
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: "https://avatars3.githubusercontent.com/u/1500684?s=460&u=1c014810361080e75ad80cdb8577ced97da65b11&v=4",
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        e.target.reset();
    }

    render() {
        return (
                <div>
                    <ListWrapper items={this.state.items} />
                    <Form submitFn={this.addItem} />
                </div>
        )
    }
};

export default App;
