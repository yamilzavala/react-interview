import { Link } from "react-router-dom";

const Section = ({children, title, url}) => {
    return (
        <div className='section mb-4'>
            <div className="title-row mb-4">
                <h4>{title}</h4>
                <Link to={url} className={`btn btn-secondary`}>Edit</Link>
            </div>

            <div className="content">{children}</div>
        </div>
    );
};

export default Section;