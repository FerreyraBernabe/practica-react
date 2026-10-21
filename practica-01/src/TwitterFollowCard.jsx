import './TwitterFollowCard.css'
import { useState } from 'react'

export function TwitterFollowCard({userName, name})
{
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = 
        isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => 
        {
            setIsFollowing(!isFollowing)
        }
    
    const avatarSrc = `https://unavatar.io/github/${userName}`
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" 
                alt="mi avatar de github" 
                src={avatarSrc}/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}