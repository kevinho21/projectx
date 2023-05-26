import React, { useState, useRef }      from 'react';
import { Link }                         from 'react-router-dom';
import                                       '@fortawesome/fontawesome-free/css/all.css';

const NavigationBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const inputRef = useRef(null);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    };

    const handleSearchIconClick = () => {
        setIsSearchExpanded(!isSearchExpanded);
        setTimeout(() => {
            inputRef.current.focus();
        }, 10);
    };

    const handleSearchBlur = () => {
        setIsSearchExpanded(false);
        setSearchValue('');
    };

    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
            </ul>
            <div className={`search-bar ${isSearchExpanded ? 'expanded' : ''}`}>
                {!isSearchExpanded && (
                    <i
                        className="search-icon fas fa-search fa-lg"
                        onClick={handleSearchIconClick}
                        tabIndex={0}
                    />
                )}
                {isSearchExpanded && (
                    <input
                        className='input-field'
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                        onBlur={handleSearchBlur}
                        ref={inputRef}
                    />
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;