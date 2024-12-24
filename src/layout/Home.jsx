import HomeStart from "./views/HomeStart"
import Info from './views/Info'
import Contact from './views/Contact'


const Home = () => {
return (
    <>
        <main className="contain-main">
            <HomeStart />
            <Info/>
            <Contact/>
        </main>
    </>
)
}

export default Home