import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { i18nChunks } from 'shared/constants';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

// компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const BugButtonClassList = classNames('', {}, []);
    const { t } = useTranslation(i18nChunks.TRANSLATION);

    const throwErr = () => setError(true);

    useEffect(() => {
        if (error) throw new Error('Test error');
    }, [error]);

    return (
        <Button onClick={throwErr} className={BugButtonClassList}>
            {t('throw error')}
        </Button>
    );
};
