import React from 'react';

const UserList = () =>{

    const listuser = ()=> {
        console.log( 'Iniciando Estado');
        return [
            {
                firstName:'Bryan',
                lastName:'Olivares'
            },
            {
                firstName:'Angel',
                lastName:'Paredes'
            },
            {
                firstName:'Miguel',
                lastName:'Martinez'
            }
        ];
    };

    const [users, setUsers] = React.useState( listuser );

    const handleAddUser = () => {
        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;

        const newUser = {
            firstname,
            lastname
        };

        setUsers((prevState)=> [
                ...prevState,
                newUser
            ]);
    };

    return (
        <div>
            <div>
                <label htmlFor='name'>Nombre</label>
                <input type='text' id='name'/>

                <label htmlFor='lastname'>Apellido</label>
                <input type='text' id='lastname'/>

                <button onClick={ handleAddUser }>Agregar Usuario</button>
            </div>
            <h1> Listas de usuarios ({ users.length } en total)</h1>
            <ul>
                {
                    users.map( ( user, index ) => (
                            <li key={ index }>{ user.firstname } { user.lastname }</li>
                        )
                    )
                }
            </ul>
        </div>
    );

}
export default UserList;