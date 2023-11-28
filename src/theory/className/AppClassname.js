import classNames from 'classnames';

const AppClassname = () => {
    const isActive = true;
    const appClass = classNames({
        foo:true,
        baz: true,
        baz: isActive
    })
    
    return (
        <div className={`${appClass}`}>
            App
        </div>
    );
};

export default AppClassname;