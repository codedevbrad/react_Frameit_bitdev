import './style.scss';

const DivBackground = ( { pos = 'left' , type, children, ...other } ) => {
    return (
        <div className="reactFrameit__dbackground" { ...other }>
                <div className={`rF_db__background rF_db__${ pos} ` }> </div>
                <h3> { children } </h3>
        </div>
    )
}

export default DivBackground;