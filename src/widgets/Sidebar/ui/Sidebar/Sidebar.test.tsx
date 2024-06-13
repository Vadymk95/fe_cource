import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import 'shared/config';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('should render', () => {
        render(
            <Suspense fallback={<div>Loading...</div>}>
                <Sidebar />
            </Suspense>
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
