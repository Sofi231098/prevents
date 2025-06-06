import { Error } from './error';

const ErrorPage = () => {
    return (
        <Error
            title='Esta página no existe.'
            subtitle='Lo sentimos, pero la página que estás buscando no se encuentra disponible.'
            showButton={true}
        />
    )
}

export default ErrorPage;