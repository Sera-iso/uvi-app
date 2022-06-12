import './Search.css'

export default function Search() {
    return(
        <div className="Search">
            <form className="input-group">
                <input type="search" className="form-control" placeholder="Enter a city" autoFocus />
                <input type="submit" className="btn btn-primary" value="Search" />
            </form>
        </div>
    )    
}