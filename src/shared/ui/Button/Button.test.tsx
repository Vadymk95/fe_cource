import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('should render a button with a name', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('should render a button with a clear theme', () => {
        const { container } = render(
            <Button theme={ThemeButton.CLEAR}>Click me</Button>
        );
        const button = container.querySelector('button');

        expect(button).toHaveClass('Button', 'clear');
        expect(button).toHaveTextContent('Click me');
    });

    test('should render a button with a primary theme', () => {
        const { container } = render(
            <Button theme={ThemeButton.PRIMARY}>Click me</Button>
        );
        const button = container.querySelector('button');

        expect(button).toHaveClass('Button', 'primary');
        expect(button).toHaveTextContent('Click me');
    });

    test('should render a button with a secondary theme', () => {
        const { container } = render(
            <Button theme={ThemeButton.SECONDARY}>Click me</Button>
        );
        const button = container.querySelector('button');

        expect(button).toHaveClass('Button', 'secondary');
        expect(button).toHaveTextContent('Click me');
    });

    test('should render a button with a custom class name', () => {
        const { container } = render(
            <Button className="custom-class">Click me</Button>
        );
        const button = container.querySelector('button');

        expect(button).toHaveClass('Button', 'clear', 'custom-class');
        expect(button).toHaveTextContent('Click me');
    });

    test('should render a button with a custom class name and a primary theme', () => {
        const { container } = render(
            <Button className="custom-class" theme={ThemeButton.PRIMARY}>
                Click me
            </Button>
        );
        const button = container.querySelector('button');

        expect(button).toHaveClass('Button', 'primary', 'custom-class');
        expect(button).toHaveTextContent('Click me');
    });
});
