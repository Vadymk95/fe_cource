import { FC } from 'react';
import { classNames } from 'shared/lib';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = '' }) => {
    const LoaderClassList = classNames('loader', {}, [className]);

    return <div className="lds-dual-ring" />;
};
