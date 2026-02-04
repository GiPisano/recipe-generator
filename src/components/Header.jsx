import chefLogo from "../assets/chef.png"

export default function Header(){
    return (
        <header>
            <img src={chefLogo} alt="Robot Chef logo"></img>
            <h1>Chef Claude</h1>
        </header>
    )
}