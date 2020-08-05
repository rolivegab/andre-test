import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../api/mutations/login'

const Login = ({
    afterLogin
}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signIn, { loading: loadingSignIn }] = useMutation(SIGN_IN, {
        variables: {
            email,
            password
        }
    })

    return (
        <div>
            <form action="javascript:void(0)">
                <label for="email">Email</label>
                <br />
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                />
                <br />
                <label for="password">Senha</label>
                <br />
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)}
                />
                <br />
                <button type="submit" onClick={async () => {
                    const response = await signIn()
                    const token = response.data.signIn.token
                    if (token) {
                        localStorage.setItem('token', token)
                        afterLogin()
                    }
                
                }}>{loadingSignIn ? 'Carregando...' : 'Logar'}</button>
                
            </form>
        </div>
    )
}

export default Login