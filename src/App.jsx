import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import * as Pages from './pages'
import { Header, Footer } from './components'
import { EditorProvider } from './contexts';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from "./components";

function App() {
  return (
    <>
      <AuthProvider>
        <EditorProvider>
          <Header />
          <div className='content'>
            <Routes>
              <Route path="/signup" element={<Pages.SignUpPage />} />
              <Route path="/login" element={<Pages.LoginPage />} />
              <Route path="/about" element={<Pages.AboutUsPage/>} />
              <Route path="/contact" element={<Pages.ContactUsPage/>} />
              <Route path="/" element={<ProtectedRoute><Pages.Dashboard /></ProtectedRoute>} />
              <Route path="/decks" element={<ProtectedRoute><Pages.AllDecksPage /></ProtectedRoute>} />
              <Route path="/notes" element={<ProtectedRoute><Pages.AllNotesPage /></ProtectedRoute>} />
              <Route path="/newflashcard/:id" element={<ProtectedRoute><Pages.CreateFlashcardPage /></ProtectedRoute>} />
              <Route path="/newnote" element={<ProtectedRoute><Pages.CreateNotePage /></ProtectedRoute>} />
              <Route path="/revise/:id" element={<ProtectedRoute><Pages.RevisionPage /></ProtectedRoute>} />
              <Route path="*" element={<Pages.NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </EditorProvider>
      </AuthProvider>
    </>
  );
}

export default App;

//           <Route path="/flashcards/:id" element={<Pages.FlashcardPage />} />
//           <Route path="/notes/:id" element={<Pages.NotePage />} />
