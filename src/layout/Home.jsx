import HomeStart from "./views/HomeStart";
import Info from './views/Info'
import Contact from './views/Contact'
import Container from "../components/module/Container"


const Home = () => {
return (
    <>
        <Container>
            <HomeStart />
            <Info/>
            <Contact/>
        </Container>
    </>
)
}

export default Home