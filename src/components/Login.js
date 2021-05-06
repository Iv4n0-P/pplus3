import React from 'react'
import axios from 'axios'

const Login = (props) => {

    const [user, setUser] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(false)

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        
        const loginDetailsForSend = {
            "email": user,
            "password": pass
        }

        const planplus = axios.create({
            baseURL: 'https://pp.doubleclick.hr',
            auth: {
                username: user,
                password: pass
            }
        })

        try {
            const data = await planplus.post('/hr/users/login/', loginDetailsForSend)
            props.history.push(`/home/${user}`)
            } catch {
            setUser('')
            setPass('')
            setError(true)
        }        
    }

    return (
        <div className="login-wrap">
            <h1 className="title">Workplaces</h1>
            <h3 className="subtitle">Unesite korisničko ime i lozinku. <span>Za sve nejasnoće obratite se voditelju.</span></h3>
           <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Korisničko ime" value={user} onChange={(e) => { setUser(e.target.value) }} />
                <input type="text" placeholder="Lozinka" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                {error && <p className="errmsg">Pogrešno korisničko ime ili lozinka</p>}
                <button className="add-btn">Prijava</button>
            </form>
        </div>
    )
}

export default Login
