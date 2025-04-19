import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from '@/components/AppRouter';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement
);
root.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
)