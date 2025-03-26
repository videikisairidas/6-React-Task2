import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'; //Ensure the extension is .jsx if necessary
import Header from './Header';
import Footer from './Footer';
import LoginPage from './account/LoginPage';
import RegisterPage from './account/RegisterPage';
import HomePage from './account/HomePage';
import ProfilePage from './account/ProfilePage';
import ProtectedRoute from './ProtectedRoute';
import RecipeList from './page/RecipeList.jsx';
import RecipeDetail from './page/RecipeDetails.jsx';
import MyFavoriteRecipe from './page/MyFavoriteRecipe.jsx';

const App = () => {
    return (

        <AuthProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
                        {/* <Route path="/recipes" element={<ProtectedRoute component={RecipeList} />} /> */}
                        <Route path="recipes">
                            <Route index element={<ProtectedRoute component={RecipeList} />} />
                            <Route path=":id" element={<ProtectedRoute component={RecipeDetail} />} />
                        </Route>
                        <Route path="/favorites" element={<ProtectedRoute component={MyFavoriteRecipe} />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </AuthProvider>

    );
};

export default App;

