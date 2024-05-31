import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['additionalClass'])).toBe(
            'someClass additionalClass'
        );
    });

    test('with mods', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'additionalClass',
            ])
        ).toBe('someClass additionalClass hovered scrollable');
    });

    test('with mods false', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'additionalClass',
            ])
        ).toBe('someClass additionalClass hovered');
    });

    test('with mods undefined', () => {
        expect(
            // @ts-ignore
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'additionalClass',
            ])
        ).toBe('someClass additionalClass hovered');
    });
});
