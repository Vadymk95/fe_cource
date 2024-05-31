import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Loader } from 'widgets';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className = '' }) => {
    const PageLoaderClassList = classNames(cls.PageLoader, {}, [className]);

    return (
        <div className={PageLoaderClassList}>
            <Loader />
        </div>
    );
};
