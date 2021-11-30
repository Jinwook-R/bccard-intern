import AppLayout from "../components/AppLayout";

const Home = () => {
    return (
        <AppLayout>
                {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </AppLayout>
    );
}

export default Home;