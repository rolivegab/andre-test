const { gql } = require("@apollo/client");

const SIGN_IN = gql`
    mutation ($email: String!, $password: String!) {
        signIn(
            email: $email
            password: $password
        ) {
            token
        }
    }
`;

export {
    SIGN_IN
}