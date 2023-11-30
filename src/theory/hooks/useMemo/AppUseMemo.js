import {useMemo, useState} from 'react';

const users = [
    { id: 1, name: 'bar'},
    { id: 2, name: 'foo'},
]

const AppUseMemo = () => {
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    const filteredUsers = useMemo(() => 
        users.filter(user => {
            console.log('filtering...')
            return user.name.toLowerCase().includes(search.toLowerCase())
        }),
    [search])



    return (
        <div>
            <h1>useMemo</h1>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setSearch(text)}>Search!</button>
            {filteredUsers.map((user, idx) => (<div key={idx}>{user.name}</div>))}
        </div>
    );
};

export default AppUseMemo;