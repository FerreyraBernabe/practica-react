import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css'
export function App()
{
    const users = 
    [
        {
            name: 'Ferreyra Bernabé',
            userName: 'FerreyraBernabe'
        },
        {
            name: 'Franco Reyes',
            userName: 'Franco486'
        },
        {
            name: 'Mariano Ruiz',
            userName: 'MarianhoRuiz'
        }
    ]
    return(
        <section className="App">
            {
                users.map(({name, userName}) => 
                (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName} 
                            name={name}>
                        </TwitterFollowCard>
                        
                ))
            }
        </section>
    )
}