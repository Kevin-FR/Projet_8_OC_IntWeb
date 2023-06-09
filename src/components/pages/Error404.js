import '../../styles/Error404.scss';


function Error404() {
    return (
        <div className='kasa-error404'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a>Retourner sur la page d’accueil</a>
        </div>
    )
}
 
export default Error404