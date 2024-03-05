import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import * as Pages from './pages'
import { Header, Footer } from './components'
import { EditorProvider } from './contexts';

function App() {
  return (
    <>
      <EditorProvider>
        <Header />
        <div className='content'>
        <Routes>
          <Route path="/signup" element={<Pages.SignUpPage />} />
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/" element={<Pages.Dashboard />} />
          <Route path="/flashcards" element={<Pages.AllFlashcardsPage />} />
          <Route path="/notes" element={<Pages.AllNotesPage />} />
          <Route path="/newflashcard" element={<Pages.CreateFlashcardPage />} />
          <Route path="/newnote" element={<Pages.CreateNotePage />} />
          <Route path="/revise" element={<Pages.RevisionPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
        </div>
        <Footer />
      </EditorProvider>
    </>
  );
}

export default App;

//           <Route path="/flashcards/:id" element={<Pages.FlashcardPage />} />
//           <Route path="/notes/:id" element={<Pages.NotePage />} />
