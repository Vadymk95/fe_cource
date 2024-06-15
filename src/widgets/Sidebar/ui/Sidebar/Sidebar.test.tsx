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

    test('should render with className', () => {
        render(
            <Suspense fallback={<div>Loading...</div>}>
                <Sidebar className="test" />
            </Suspense>
        );
        expect(screen.getByTestId('sidebar')).toHaveClass('test');
    });

    test('should toggle', () => {
        render(
            <Suspense fallback={<div>Loading...</div>}>
                <Sidebar />
            </Suspense>
        );
        const toggle = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        toggle.click();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        toggle.click();
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
